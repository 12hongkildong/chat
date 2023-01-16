
export default class ConfirmDlg{
    constructor(){
        this.x=100;
        this.y=100;
        this.width=400;
        this.height=200;

        this.btnYes={  // 개별화 안 해서 두 번 작성
            x:70,
            y:100,
            width:100,
            height:50,
            label:"YES"

        }
        this.btnNo = {
            x:230,
            y:100,
            width:100,
            height:50,
            label:"NO"
        }

        this.isVisible = false;

        this.onContinue = false;
        this.onEnd = false;
        

        this.onclick=null;

    }
    // 윈도우로써 사용가 입력 이벤트를 수신하기 위한 함수
    notifyClick(x,y){  //서비스 함수가 아닌 노티파이를 수신하기 위한 함수
        // 자식이 있다면 자식에게도 이 이벤트를 통지해야 한다.(자식도 윈도우로 본다)
        // 하지만 자식이 아직 분가 하지 않았다면 내가 체크해 통지하면 된다.
        
        if((this.x < x && x < this.x+this.width)
            &&(this.y < y && y < this.y+this.height)&&this.isVisible ) {// 내가 클릭 된 건지 알아보고, 
            console.log("클릭크");
            
            // wktlrdprp xhdwl
            // 자식들이 있따면 통지하고
            // 자식 객체가 없으니 내가 해야지
            // 세 가지 이벤트를 만들어야 한다. 예스버튼, 노버튼, '나'버튼
            // 자식위치에 이벤트 만들기
            
            // if((this.btnYes.x < x && x < this.x+this.width)&&(this.y < y && y < this.y+this.height))
            // // else if()
            if(this.onclick)//click이 이밴트고, on이 이밴트를 담는 변수(?)
                this.onclick(3); // 1을 받으면 dlg, 2는 yes, 3은 no버튼
            
        }

    }


    show(){
        this.isVisible=true;


    }

    update(){  // 업데이트가 구동력을 가진 존재이다. 살아있는 듯한 움직임을 보이게




    }

    draw(ctx){
        if(!this.isVisible)
            return;

        let {x,y}=this;

        ctx.fillStyle = '#FFF7';
        ctx.fillRect(x, y, this.width, this.height);

        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, this.width, this.height);

        ctx.fillStyle = 'black'
        ctx.font = 'bold 48px serif'
        ctx.fillText('Continue?', this.width/2, y+70);

        let btns = [this.btnYes, this.btnNo];

        for(let btn of btns){
            let {x,y,width:w,height:h, label}=btn

            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x+x, this.y+y, w, h);            // 내 윈도우로 부터의 x값
            ctx.fillStyle = 'black';
            ctx.strokeRect(this.x+x, this.y+y, w, h);
            ctx.font = 'bold 30px serif'
            ctx.fillText(label, this.x+x+20, this.y+135);
        }


        


        // ctx.fillStyle = 'gray';
        // ctx.fillRect(x+230, y+100, 100, 50);
        // ctx.fillStyle = 'black';
        // ctx.strokeRect(x+230, y+100, 100, 50);
        // ctx.font = 'bold 30px serif'
        // ctx.fillText('NO', this.width/2+160, y+135);


    }
    

    isLocated(x,y){
       // if(x== && y==)

    }



}