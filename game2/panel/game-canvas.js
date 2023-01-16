// app이 쓸 수 있또록 공게하는 방법1

import Boy from '../item/boy.js';
import Background from '../item/background.js';
import Enemy from '../item/enemy.js';
import newlec from '../newlec.js';
import ConfirmDlg from '../item/Confirmdlg.js';

export default class GameCanvas{   //export default 모듈화

    constructor(){
        
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        
        this.enemies = [];          // 어그리게이션 지합값
        
        this.enemyAppearDelay = 60;  // 0110 적기 출현 딜레이 변수
        //flight = 0;
        // this.enemies = [     // 컴포지션 - 미리 준비해 놨다.
        //     new Enemy(10,0),new Enemy(30,0),new Enemy(50,0),new Enemy(100,0),new Enemy(600,0),
        //     new Enemy(40,20),new Enemy(50,20),new Enemy(130,45),new Enemy(50,30),new Enemy(600,100)]; //0110
        this.boy = new Boy(100,100);
        this.boy.onNoLife=this.boyNoLifeHandler.bind(this); // 230112ec
        this.bg = new Background();   // 23-01-06
        
        this.dlg = new ConfirmDlg();

        //this.dlgClickHandler = this.dlgClickHandler.bind(this);
        this.dlg.onclick = this.dlgClickHandler.bind(this);  // 확인하기
        // this.dlg.onclick=(id)=>{ //0113
        //     console.log(id);
        // }
      

        // for(let enemy of this.enemies)
        //     enemy.onOutOfScreen=(en)=>{  // 람다식 함수 만들기
        //         let index = this.enemies.indexOf(en)
        //             this.enemies.splice(index,1);
        //     };
        
        
        
        
        this.boy.speed++;
        //this.boy.setSpeed(this.boy.getSpeed()+5); // 속도를 1 증가시키는 것
        console.log("speed:"+this.boy.speed)


        this.gameover=false;
        
        this.pause=false;
        
        // 내가 정의한 이벤트 목록(부모가 처리할 이벤트) //0113
        this.ongameOver = null;
        // 내가 처리할 이벤트(이벤트 처리 함수들)
        this.dom.onclick=this.clickHandler.bind(this);
        this.dom.onkeydown=this.keyDownHander.bind(this);
        this.dom.onkeyup=this.keyUpHander.bind(this);
        
        
        newlec.enemies = this.enemies;  // 0111생성을 한 뒤에 옮겨줘야지.
    }

    run(){
        if(this.pause)
            return;

        this.update();
        this.draw();

        console.log("time Start");
        window.setTimeout(()=>{
            this.run();
        },17);
    }
    update(){
        this.boy.update();
        for(let enemy of this.enemies)
            enemy.update(/*this.ctx*/);       //0110 여기는 그냥 enemy이지 this.enemy가 아니다.
        
        this.dlg.update();
            // let min = Math.ceil(-50);
            // let max = Math.ceil(1000);
            
            // console.log(Math.ceil(-50))
            // console.log(Math.floor(50))
            // console.log(Math.random())
            // console.log(Math.floor(Math.random() * (max - min)));
            
            // if(this.flight<10)
            // this.flight++;

            // if(this.flight<10)
            
            this.enemyAppearDelay--;
            if(this.enemyAppearDelay==0)
            {
                // function getRandomInt(min, max) {
                //     min = Math.ceil(min);
                //     max = Math.floor(max);
                //     return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
                // }
                let x= Math.floor(Math.random() * (this.dom.width+50-50)) -50 // -50~this.dom.width+50;
                let y=-50;

                let enemy = new Enemy(x,y);

                 enemy.onOutOfScreen = this.enemyOutOfScreenHandler.bind(this);
                 
                 
                 /*(en)=>{  // 람다식 함수 만들기
                //     let index = this.enemies.indexOf(en)
                //         this.enemies.splice(index,1);
                // };*/
                this.enemies.push(enemy)
                    // for(let enemy of this.enemies)
                    // enemy.onOutOfScreen=(en)=>{  // 람다식 함수 만들기
                    //     let index = this.enemies.indexOf(en)
                    //         this.enemies.splice(index,1);
                    // };
                this.enemyAppearDelay = (Math.floor(Math.random()*(60-30))+30); // 0110 문제
                //console.log((Math.floor(Math.random()*(2+0.5))+0.5));
            }
    
    }
    draw(){
        this.bg.draw(this.ctx);   // 23-01-06
        this.boy.draw(this.ctx);
        for(let enemy of this.enemies){
            enemy.draw(this.ctx);         //0110 여기는 그냥 enemy이지 this.enemy가 아니다.
            //console.log(this);
        }

        this.dlg.draw(this.ctx);
    }
    pause(){
        //this.pause=true;
    }






    // 죽으면 캔버스 교체하기
    boyNoLifeHandler(){
        // 게임 종료를 의미하는 애니메이션 실행하거나
        // 게임 종료 또는 계속을 위한 입력 받거나
        // 캔버스 바로 전환하거나
        // 기타 등등
        // if(!this.dlg.isShow())
        this.dlg.show(); // 0113
        




    }

    // 이벤트 핸들러 -> 사라지기
    enemyOutOfScreenHandler(en){  //     enemyOutOfScreenHandler = function(en){
        let index = this.enemies.indexOf(en)
        this.enemies.splice(index,1);
    };

    dlgClickHandler(id){  // 0113
        //console.log(id);
        // 사용자가 더 이상 게임을 이어갈 의사가 없다고 함.
         if(this.ongameOver)     // app이 게임이 끝나면 할 일이 있다고 했나?
             this.ongameOver();  // '바꿔주세요~'를 말하는 게 아니라 '나 게임 끝났어~'를 만드는 것
                                // app에게 canvas가 끝났음ㅇ르 알림
    }

    clickHandler(e){

        // this.boy.notifyClicke.x, e.y) // 보이 선택 해 할 거 없으니 주석처리

        // for(let enemy of this.) // 적기 선택해 할 거 없으니 주석처리
        //     enemy.notifyClick(e.x,e.y)

        this.dlg.notifyClick(e.x,e.y) // 


        this.boy.moveTo(e.x,e.y);
        // this.pause = true;
        // this.boy.move(2);
        // this.boy.draw(this.ctx);
    }

    keyDownHander(e){
        // console.log(e);
        // console.log(e.key);
        switch(e.key){
            case "ArrowUp":
                this.boy.move(1);
            break;
            case "ArrowLeft":
                this.boy.move(4);
            break;
            case "ArrowRight":
                this.boy.move(2);
            break;
            case "ArrowDown":
                this.boy.move(3);
            break;
        }
    }

    keyUpHander(e){
        //console.log(e.key);
        // this.boy.move(0);
        switch(e.key){
            case "ArrowUp":
                this.boy.stop(1);
            break;
            case "ArrowLeft":
                this.boy.stop(4);
            break;
            case "ArrowRight":
               this.boy.stop(2);
            break;
            case "ArrowDown":
                this.boy.stop(3);
            break;
        }

    }


}

//export default GameCanvas// app이 쓸 수 있또록 공게하는 방법2