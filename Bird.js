class Bird
{
    constructor(x,y)
    {
     var option=
     {
         'restitution':1
     }
        this.body=Bodies.circle(x,y,50,option);
        
         

        
        

       
        World.add(world,this.body);
    }
    display ()
    {
        var pos=this.body.position;
        
        

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,50);
        //ellipse.debug=true;
      
    }

}
 
