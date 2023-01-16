import GameCanvas from './panel/game-canvas.js';    // 모듈화
//import newlec from './newlec.js';
import RankCanvas from './panel/rank-canvas.js';

window.addEventListener("load", function(){
    const gameCanvas = new GameCanvas();
    gameCanvas.ongameOver =(e)=>{ //0113

        gameCanvas.dom.classList.add("d-none");   // 클래스리스트는 클래스이름을 의미한다. 
        rankCanvas.dom.classList.remove("d-none"); // 

        gameCanvas.pause = true;
    }
    gameCanvas.run();

    //gameCanvas.pause();

    const rankCanvas = new RankCanvas();
    rankCanvas.run();


});