class Box {
    constructor(x, y, width, height){
      this.visibility
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");

     if(polygon.velocity>3){
      image(img, 0, 0);
      tint(0, 153, 204); // Tint blue
      image(img, 50, 0);
    }
    
  }
  score(){
    if(this.visibility<0 && this.visibility>-150){
      score++;
    }
  } 
}
  