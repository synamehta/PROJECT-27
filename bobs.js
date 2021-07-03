class BOBS{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0,
            density:0.8
        }
    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(world,this.body);
    
    }
    display(){
        push()
        fill("pink");
        ellipseMode(RADIUS);   
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }

}