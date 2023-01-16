export default class Background{
    constructor(){
        this.x=0;
        this.y=0;

        this.img = document.querySelector("#bg");
        
    }


    
    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y);    
    }
    
    update(){

    }
}