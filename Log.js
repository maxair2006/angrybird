class Log {
    constructor(x,y,h,angle){
        var options ={
            restitution: 0.5, 
            friction: 1
        }
    
        this.box = Bodies.rectangle(x,y,20,h,options);
        Matter.Body.setAngle(this.box,angle)
        World.add(world,this.box);
        this.w = 20;
        this.h = h;
     }
       display(){
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("orange")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
       }
}