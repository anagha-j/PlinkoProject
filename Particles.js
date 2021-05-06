class PlinkoParticle {
    constructor(x,y,r){
        var options = {
            density : 0.5,
            restitution : 0.4,
            friction : 0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle (this.x,this.y,this.r,options)
        this.color = color (random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.r);
    }
}