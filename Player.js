class Player {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="pink";
        this.spt.addAnimation("player",playerAnimation);
        this.spt.scale=0.09;

    }
        move(xdir,ydir){
           this.spt.x+=xdir*grid;
            this.spt.y+=ydir*grid;
        }
      
    }
       
    
