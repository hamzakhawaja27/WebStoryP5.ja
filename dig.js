function dig(tx,ty,zoom,flip){


this.ang=0;

this.in=0.02;


  this.display=function(input){
    fill(50,50,50);
    stroke(0,0,0)

  push()
  translate(tx,ty);
  scale(flip,1)
  scale(zoom);
  quad(0,0.05*windowHeight +0.20*windowHeight,0.015*windowWidth,0.05*windowHeight+0.20*windowHeight,0.010*windowWidth,0.05*windowHeight,0,0.05*windowHeight)
  quad(0.02*windowWidth,0.05*windowHeight +0.20*windowHeight,0.025*windowWidth+0.01*windowWidth,0.05*windowHeight+0.20*windowHeight,0.005*windowWidth,0.05*windowHeight,0,0.05*windowHeight)
  fill(50,50,50);
  rotate(this.ang * input + PI/8);

  rect(-0.125*windowWidth,-0.05*windowHeight,0.25*windowWidth,0.10*windowHeight,4)
  rect(-0.15*windowWidth,0.05*windowHeight-0.2*windowHeight,0.05*windowWidth,0.2*windowHeight)
  arc(-0.125*windowWidth-0.01*windowWidth/2,-0.05*windowHeight+0.10*windowHeight,0.01*windowWidth,0.4*windowHeight,0,PI)
  let x1=-0.125*windowWidth + 0.25*windowWidth;
  let y1=-0.05*windowHeight;
  rect(x1,y1,0.05*windowWidth,0.13*windowHeight,0.01*windowWidth)
  rect(x1 + 0.025*windowWidth,y1-0.06*windowHeight,0.01*windowWidth,0.06*windowHeight)
  x1=x1+0.05*windowWidth;
  rect(x1 + 0.025*windowWidth,y1-0.06*windowHeight,0.01*windowWidth,0.06*windowHeight)
  rect(x1,y1,0.05*windowWidth,0.13*windowHeight,0.01*windowWidth)


  //quad(0.04*windowWidth,windowHeight,(windowWidth/2)-0.035*windowWidth,windowHeight,(windowWidth/2)+0.01*windowWidth,windowHeight-0.3*windowHeight,windowWidth/2,windowHeight-0.3*windowHeight)

  pop()

  this.ang=this.ang+this.in;

  if(this.ang>(PI/4)){
    this.in=-1*this.in
  }

  if(this.ang<-(PI/6))
  this.in=-1*this.in
  }




}
