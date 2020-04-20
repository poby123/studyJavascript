var run, spawnTime;
var go=0, turn=true;
var w=innerWidth, h=200;
var rd=Math.random() * Math.PI, vlc=0.04;

var spawnAt=[30, 100, 170], spawnIn;
var obstacles=[], collectables=[];
var score=0, life=5;

function dist(x1, y1, x2, y2){
        xDist = x1 - x2;
        yDist = y1 - y2;

        return Math.hypot(xDist,yDist);
    }
function collide(x1, y1, r1, x2, y2, r2){
        if(dist(x1, y1, x2, y2) < r1 + r2){
            return true;
        }

        else {
            return false;
        }
    }
class Obstacles{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.el;
    }
    Render(){
        this.el=document.createElement("span");
        this.el.setAttribute("class", "obstacles");
        this.el.style.left=`${this.x}px`;
        this.el.style.top=`${this.y}px`;
        gameField.appendChild(this.el);
    }
    Run(){
        this.x-=2;
        this.el.style.top=`${this.y}px`;
        this.el.style.left=`${this.x}px`;
    }
}
class Collectables{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.el;
    }
    Render(){
        this.el=document.createElement("span");
        this.el.setAttribute("class", "collectables");
        this.el.style.left=`${this.x}px`;
        this.el.style.top=`${this.y}px`;
        gameField.appendChild(this.el);
    }
    Run(){
        this.x-=2;
        this.el.style.top=`${this.y}px`;
        this.el.style.left=`${this.x}px`;
    }
}
window.onload=()=>{
     Life.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`.repeat(life);
     Score.innerHTML=`Score:${score}`;

   function spawn(){
   spawnIn=Math.floor(Math.random()*10);
   if(!(spawnIn>=7)){
       obstacles.push(new Obstacles((2*w)-(w/2), spawnAt[Math.floor(Math.random()*3)]));
       obstacles[obstacles.length-1].Render();
       }
    else{
        collectables.push(new Collectables((2*w)-(w/2), spawnAt[Math.floor(Math.random()*3)]));
        collectables[collectables.length-1].Render();
    }
   }
   function change(){
            if(turn==true){
                turn=false;
            }
            else{
                turn=true;
            }
          }
    gameField.style.height=h+"px";
    gameField.style.width=w+"px";
    function animation(){
        run=requestAnimationFrame(animation);
        ball1.style.top=`${(h/2)+Math.cos(rd)*70}px`;
        ball1.style.left=`${(w/2)+Math.sin(rd)*70}px`;
        ball2.style.top=`${(h/2)-Math.cos(rd)*70}px`;
        ball2.style.left=`${(w/2)-Math.sin(rd)*70}px`;
        if(turn==true){
            rd+=vlc;
        }
        else{
            rd-=vlc;
        }
        for(var i in obstacles){
            obstacles[i].Run();

            if(collide((w/2)+Math.sin(rd)*70, (h/2)+Math.cos(rd)*70, 10, obstacles[i].x, obstacles[i].y, 10) || collide((w/2)-Math.sin(rd)*70, (h/2)-Math.cos(rd)*70, 10, obstacles[i].x, obstacles[i].y, 10)){
                                gameField.removeChild(obstacles[i].el);
                obstacles.splice(i,1);
                life-=1;
                Life.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`.repeat(life);
                if(life==0){
                    stop();
                    clearInterval(spawnTime);
                    life=5;
                    gameField.style.display="none";
                    dashBoard.style.display="none";
                    gameOver.style.display="flex";
                    result.innerHTML=`Your score: ${score}`;
                }
            }
            else if(obstacles[i].x<-10){
                gameField.removeChild(obstacles[i].el);
                obstacles.splice(i,1);
            }
        }
        for(var i in collectables){
            collectables[i].Run();

            if(collide((w/2)+Math.sin(rd)*70, (h/2)+Math.cos(rd)*70, 10, collectables[i].x, collectables[i].y, 10) || collide((w/2)-Math.sin(rd)*70, (h/2)-Math.cos(rd)*70, 10, collectables[i].x, collectables[i].y, 10)){
                                gameField.removeChild(collectables[i].el);
                collectables.splice(i,1);
                score+=1;
                Score.innerHTML=`Score:${score}`;
            }
            else if(collectables[i].x<-10){
                gameField.removeChild(collectables[i].el);
                collectables.splice(i,1);
            }
        }
    }
function stop(){
    cancelAnimationFrame(run)
}
play.addEventListener("click", ()=>{
    start.style.display="none";
    dashBoard.style.display="flex";
    gameField.style.display="block";
    spawnTime=setInterval(spawn,2000);
    onclick=change;
    animation();


    })
replay.addEventListener("click", ()=>{
    score=0;
    Score.innerHTML=`Score: ${score}`;
    Life.innerHTML=`<i class="fa fa-heart" aria-hidden="true"></i>`.repeat(life);
    gameOver.style.display="none"
    dashBoard.style.display="flex";
    gameField.style.display="block";
    spawnTime=setInterval(spawn,2000);
    onclick=change;
    animation();
})
}
