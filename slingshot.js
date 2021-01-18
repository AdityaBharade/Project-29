class Slingshot{

    constructor(abody,bpoint){
  
      var options = {
          bodyA: abody,
          pointB: bpoint,
          stiffness: 0.1,
          length : 10
      }
      this.pointB = bpoint
      this.chain = Constraint.create(options);
      World.add(world, this.chain)
  }
  
  fly(){
  
  this.chain.bodyA = null
  
  }
  
  
    display(){
  if(this.chain.bodyA){
  var pointA = this.chain.bodyA.position
  var pointB = this.pointB
  
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
  }
  }