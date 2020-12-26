class Pig {
    constructor(x,y){
        var options ={
            restitution: 1.0
        }
    
        this.box = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.box);
        this.w = 50;
        this.h = 50;
     }
       display(){
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("green")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
       }
}