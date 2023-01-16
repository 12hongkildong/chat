
export default  class RankCanvas{
    constructor(){
        this.dom=document.querySelector(".rank-canvas")

        //this.dom.focus();
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
    }

    run(){
        this.update();
        this.draw();

        window.setTimeout(()=>{
            this.run();
        },17)

    }

    update(){



    }

    draw(){
        //this.ctx.fillRect(0,0,this.dom.width-1, this.dom.heigut-1);
        this.ctx.strokeRect(0,0,this.dom.width-1, this.dom.height-1);


    }


}