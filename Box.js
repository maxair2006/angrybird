class Box {
    constructor(x,y,w,h){
        var options ={
            restitution: 1.0
        }
    
        this.box = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.box);
        this.w = w;
        this.h = h;
     }
       display(){
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        fill("purple")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
       }
}