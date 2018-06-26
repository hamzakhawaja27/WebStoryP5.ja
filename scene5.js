function scene5(){

this.xx=0.45*windowWidth
this.yy=0.4*windowHeight

this.xx1=0.50*windowWidth
this.yy1=0.4*windowHeight

this.xx2=0.50*windowWidth;
this.yy2=windowHeight;

this.xx3=0.50*windowWidth;
this.yy3=0.8*windowHeight+0.2*windowHeight;
this.rad=[];

for(var j=0 ; j < 5; j++){

this.rad[j]=random(0.02*windowWidth,0.06*windowWidth);


}



this.display=function(){


background(0,0,0)

fill(100,100,100)
beginShape();
for(var i=0;i<5;i++){
  var angle=map(i,0,5,0, TWO_PI);
  var x = (windowWidth/2) + (0.06*windowWidth+this.rad[i]) * cos(angle);
  var y =  (windowHeight/2) + (0.06*windowWidth+this.rad[i]) * sin(angle);
  vertex(x,y)
}
endShape();

fill(255,255,255)
push()
translate(0.8*windowWidth/2,0.6*windowHeight/2)
scale(0.2)

  rect(this.xx,this.yy,0.1*windowWidth,0.4*windowHeight)
  arc(this.xx1,this.yy1 , 0.1*windowWidth, 0.3*windowHeight, PI,2*PI);
  quad(this.xx2, this.yy2, this.xx2-0.15*windowWidth, this.yy2, this.xx2-0.05*windowWidth, this.yy2-0.2*windowHeight,this.xx2, this.yy2-0.2*windowHeight);
  quad(this.xx3, this.yy3, this.xx3+0.15*windowWidth, this.yy3, this.xx3+0.05*windowWidth, this.yy3-0.2*windowHeight,this.xx3, this.yy3-0.2*windowHeight);
pop();

fill(0,255,0)
textSize(40);
text("Political Situation improves", (0.2*windowWidth),0.1*windowHeight);
text("ANU Asteroid Mission Successful", (windowWidth/4),0.25*windowHeight);
fill(0,0,255)
text("Stock Market plummets", (windowWidth/4),0.8*windowHeight);
text("Asteroids Searched for Lithium and other metals", (0.3*windowWidth),0.9*windowHeight);
fill(255,0,0)
text("The End", (3*windowWidth/4),0.5*windowHeight);
}

}
