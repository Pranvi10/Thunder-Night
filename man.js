class Man{
    constructor(x, y, w, h){
        this.x=0;
        this.y=0;
        this.w=0;
        this.h=400;
        this.img=loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
        var man_pro={isStatic:true};
        this.body=Bodies.rectangle(x, y, w, h, man_pro);
        
        rectMode(CENTER);

        World.add(world, this.body);
    }

    display()
    {
        push();
        animation(this.img, this.body.position.x, this.body.position.y);
        pop();
        }}