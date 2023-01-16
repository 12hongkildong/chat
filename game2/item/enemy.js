export default class Enemy{
    constructor(x=0,y=0){  //0110 매개변수에 기본값 주기 가능해짐 es6
        this.x= x;
        this.y= y;

        this.speed=2;
        this.onOutOfScreen=null; //0110

        this.isChungdol = false;

        // this.sw=48;
        // this.sy=64;
        // this.ix=0;
        // this.iy=0;
        // this.sx=ix*this.sw;
        // this.sy=iy*this.sy;


        this.img=document.querySelector("#enemy");
        this.imgExpl=document.querySelector("#hit");

        //[e]xplosion [i]ndex
        this.eimgX=0;  // 폭발x를 변경하기 위한 변수
        this.eimgY=0;  // 폭발y를 변경하기 위한 변수

        this.eix = 0;   // 폭발 x
        this.eiy = 0;   // 폭발 y
        this.esw = this.imgExpl.width/4;
        this.esh = this.imgExpl.height/5;

        
        
    }
    
    // get centerX(){    0111
    //     //console.log(img.width)
    //     return this.x+this.img.width/2;  // 현재 이미지 너비의 반 얻어내기

    // }
    // get centerY(){
    //     return this.y+this.img.height/2;  
    // }

    get width(){
        return this.img.width;
    }

    chungdol(){ 
        this.isChungdol = true;
    }


    draw(ctx){
        ctx.drawImage(this.img,                 // 비행기 그림
            this.x-this.img.width/2,
            this.y-this.img.height/2);

            
            this.esx = this.esw*this.eix;
            this.esy = this.esh*this.eiy;


        if(this.isChungdol){

            ctx.drawImage(this.imgExpl,              // 폭발 그림
                this.esx,this.esy,this.esw, this.esh,
                this.x-this.esw/2,this.y-this.esh+58,this.esw,this.esh);
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.img.width/2, 0, 2*Math.PI)
        ctx.stroke();


    }
    update(){
        this.y+=this.speed;

        if(this.y >500)
            if(this.onOutOfScreen != null)
                this.onOutOfScreen(this);

    }

}