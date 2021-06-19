class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visibility = 255;
        this.image=loadImage("wood1.png");
    }
        display(){
            if(this.body.speed < 4){
                var pos =this.body.position;
                rectMode(CENTER);
                //imageMode(CENTER);
                rect(pos.x, pos.y, this.width, this.height); 
                //image(this.image,pos.x,pos,y,this.width,this.height) 
            console.log(this.body.speed)
        
    }
    else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility -5
        //tint(255,this.Visibility)
        //var pos =this.body.position;
        //rectMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
        }
        
    }