class Ground {
 constructor(x,y,w,h){
    var options ={
        isStatic: true
    }

    this.ground = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.ground);
    this.w = w;
    this.h = h;
 }
 display(){
    rectMode(CENTER);
    fill("white");
    rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
 }
}
