import newlec from "../newlec.js"

export default class Boy{
    #speed; // 프라이빗, 단 모두 #vx로 해야된다. 그리고 이건 엄청 귀찮은 것이기 때문에 보통 하지 않나보다/

    constructor(x,y){
        this.x=x || 100;
        this.y=y || 100;

        this.img = document.querySelector("#boy")

        this.vx=0;   // 이동할 단위 위치 x
        this.vy=0;   // 이당할 단위 위치 y

        this.dx=0;   // 목적지 좌표 x
        this.dy=0;   // 목적지 좌표 y

        this.#speed=5;

        this.ix = 1;
        this.iy = 2;

        this.sw=106;  // this.img.width/3;
        this.sh=148.25;  // this.img.height/3;
        this.sx=this.ix*this.sw;
        this.sy=this.iy*this.sh;
        
        this.noLife=false;//0113
        this.walkDelay=10;
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRigth = false;

    }

    set speed(value){
        this.#speed=value;
    }

    get speed(){
        return this.#speed;
    }

    
    draw(ctx){
        this.sx=this.ix*this.sw;
        this.sy=this.iy*this.sh;
        // var img = new Image();        // 23-01-06 주석처리
        // img.src="./img/boy.png"
        // img.onload=function(){
        // }.bind(this);                 // 23-01-06 주석처리
            ctx.drawImage(this.img,
                this.sx, this.sy,this.sw,this.sh,
                this.x-this.sw/2, this.y-this.sh+15, this.sw,this.sh)

            //ctx.strokeRect()// 원 그리기()   (다른 그림은 비긴 스트로크 / 비긴랙트 필)
            //ctx.fillRect()// 원 그리기(속 채우기)
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.sw/2, 0, 2*Math.PI)
            ctx.stroke();

    }
    
    update(){
        //console.log(newlec.enemies.length);
        for(let enemy of newlec.enemies){
            let ex = enemy.x;         //적의 중앙값x 0111
            let ey = enemy.y;         // 적의 중앙값y 원래는 게터로 y를 가져와야 하는데 수업이니 그냥 쉽게 불러오겠따.
            let x = this.x;
            let y = this.y;
            //let x = this.x+this.sw/2;
            //let y = this.y+this.sh/2;

            //let t = this.x+this.img.width/2;
            //let q = this.y+this.img.height/2;

            // 내 생각//let r1r2 = this.sw/2 + this.x;          // 반지름길이 
            //let d = Math.sqrt((this.x)*(this.x)+(this.y)*(this.y));  //실제 거리

            let d = Math.sqrt((ex-x)*(ex-x)+(ey-y)*(ey-y));
            let r1r2 = this.sw/2 + enemy.width/2;

            //let r1r2 = Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));

            if(d <=r1r2){
                enemy.chungdol(); // 230112
                console.log("충돌발생?!")
                 
                // 보이의 체력 깎기
                  // 위임 받아 놓은 함수(콜백 함수)를 호출한다.
                  if(this.onNoLife && !this.noLife){
                      this.onNoLife();
                      this.noLife=true;
                    }
            }

        }
        // 마우스 멈추기
        if((this.dx-2<this.x && this.x<this.dx+2)||(this.dy-2<this.y && this.y<this.dy+2)){
            this.vx=0;
            this.vy=0;
        }

        // 속도
        if(this.moveUp)
            this.y-=this.#speed;
        if(this.moveDown)
            this.y+=this.#speed;
        if(this.moveLeft)
            this.x-=this.#speed;
        if(this.moveRigth)
            this.x+=this.#speed;

        
        // 벡터가 0이면 반환 멈췄을 때 차렷만들기
        if(!(this.moveLeft||this.move.Rigth||this.moveUp||this.moveDown||false)) // 마직막 false는 오류방지용
            if(this.vx == 0 && this.vy == 0){  // 걸음을 멈추게 만드는 녀석
                this.ix=1;
                return;
            }

        this.x+=this.vx;
        this.y+=this.vy;
        
        // 동작설정
        this.walkDelay--;
        if(this.walkDelay==0){
            this.ix=this.ix==2?0:2;
            this.walkDelay=10;
        }

    }

    // 마우스 이동 조절
    moveTo(dx,dy){
        //this.ix=0;           23-01-06

        if(this.ix==0){
            this.ix=2;
            this.sx=this.ix*this.sw;
        }
        
        let w=dx-this.x;             // 클릭좌표x와 최초출력 위치(this.x)를 보정해 삼각형 한쪽 변(x변) 구함
        let h=dy-this.y;             // 클릭좌표y와 최초출력 위치(this.y)를 보정해 삼각형 한쪽 변(y변) 구함
        
        let d = Math.sqrt(w*w+h*h);  // 대각선의 길이를 구한다. 5^2=3^2+4^2니까 5=√3^2+√4^2나 똑같은 것이다.
        this.vx=w/d;                 // 그 구한 칸이 vx에 담긴다.
        this.vy=h/d;                 // 그 구한 칸이 vy에 담긴다.
        this.dx = dx;                // 23-01-06
        this.dy = dy;                // 23-01-06
    }

    move(dir){                      // 방향설정 
        switch(dir){
            case 1: //북쪽  
                 this.iy=0;
                this.moveUp = true;
            break;
            case 3: //남쪽       -> 북쪽남쪽이 좌표가 같으니 하나로 통일
                 this.iy=2;
                this.moveDown = true;
            break;
            case 2: // 동쪽
                 this.iy=1;
                this.moveRigth = true;
            break;
            case 4:  // 서쪽    -> 동쪽 서쪽이 같으니 하나로 통일
                 this.iy=3;
                this.moveLeft = true;
            break;
        }
    }

    moveTo2(d){
        switch(d){
            case w:
                this.y-=20;
            break;
            case d:
                this.x+=20;
            break;
            case s:
                this.y+=20;
            break;
            
            case a:
                this.x-=20;
            break;
        }
    }

    stop(dir){
        switch(dir){
            case 1: //북쪽  
                this.moveUp = false;
            case 3: //남쪽       -> 북쪽남쪽이 좌표가 같으니 하나로 통일
                this.moveDown = false;
            break;

            case 2: // 동쪽
                this.moveRigth = false;
            case 4:  // 서쪽    -> 동쪽 서쪽이 같으니 하나로 통일
                this.moveLeft = false;
            break;
        }
    }
}