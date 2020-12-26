class Bird{
    constructor(x,y){
    var options = {
        restitution: 0.8
    }
    this.bird= Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.bird)
    this.w = 50;
    this.h = 50;    
    }
    display(){
        this.bird.position.x=mouseX;
        this.bird.position.y=mouseY;
        push()
        translate(this.bird.position.x,this.bird.position.y)
        rotate(this.bird.angle)
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
       }
}
