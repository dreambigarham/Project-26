class Bob{
    constructor(x,y,radius){
        var props={
            isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,radius,props)
        this.x=x
        this.y=y
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
  ellipseMode(RADIUS)
   ellipse( this.body.position.x,this.body.position.y,this.radius,this.radius)
    }  
}