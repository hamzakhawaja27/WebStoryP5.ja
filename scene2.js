function scene2(){
var col1=color(255,255,255);
var col2=color(255,255,255);
var col3=color(255,255,255);
var col4=color(255,255,255);
var col5=color(255,255,255);
var xdiff=0;
var ydiff=0;
var r=0;
var a=0;
var q1=0;
var q2=0;
var tf=false;
var elapse=1000;
var stime;
var speedy=3;
var s6=new scene6();

xx=0.45*windowWidth
yy=0.4*windowHeight

xx1=0.50*windowWidth
yy1=0.4*windowHeight

xx2=0.50*windowWidth;
yy2=windowHeight;

xx3=0.50*windowWidth;
yy3=0.8*windowHeight+0.2*windowHeight;

x=0.1*windowWidth;
y=0.4*windowHeight;

x1=0.1*windowWidth;
y1=0.2*windowHeight;

x2=0.9*windowWidth;
y2=windowHeight/2;

x3=0.8*windowWidth;
y3=windowHeight;

this.display=function(){
if(tf==false){
      noStroke();
      fill(200, 200, 200, 255);

      rect(x,y,0.1*windowWidth,0.4*windowHeight)

      arc(x1, y1, 0.1*windowWidth, 0.3*windowHeight, PI,2*PI);

      quad(x2, y2, x2-0.15*windowWidth, y2, x2-0.05*windowWidth, y2-0.2*windowHeight,x2, y2-0.2*windowHeight);

      quad(x3, y3, x3+0.15*windowWidth, y3, x3+0.05*windowWidth, y3-0.2*windowHeight,x3, y3-0.2*windowHeight);
}
else{
  fill(255,255,255);


  rect(xx,yy,0.1*windowWidth,0.4*windowHeight)

  arc(xx1,yy1 , 0.1*windowWidth, 0.3*windowHeight, PI,2*PI);

  quad(xx2, yy2, xx2-0.15*windowWidth, yy2, xx2-0.05*windowWidth, yy2-0.2*windowHeight,xx2, yy2-0.2*windowHeight);

  quad(xx3, yy3, xx3+0.15*windowWidth, yy3, xx3+0.05*windowWidth, yy3-0.2*windowHeight,xx3, yy3-0.2*windowHeight);

}

}

this.move=function(){
strokeWeight(1.0);
if(r==1){
x=mouseX;
y=mouseY;
}

if(a==1){
x1=mouseX;
y1=mouseY;
}

if(q1==1){
x2=mouseX;
y2=mouseY;
}

if(q2==1){
x3=mouseX;
y3=mouseY;
}

}

this.check=function(){
  if(mouseX>x && mouseX<x+0.1*windowWidth && mouseY>y && mouseY<y+0.4*windowHeight){
  r=1;
  }

var Ax=mouseX;
var Ay=mouseY;
var At1=(x1-Ax)*(x1-Ax);
var At2=(0.05*windowWidth)*(0.05*windowWidth);
var At3=(y1-Ay)*(y1-Ay);
var At4=(0.15*windowHeight)*(0.15*windowHeight);
var Atx=At1/At2;
var Aty=At3/At4;
var final=Atx+Aty;

  if(final<=1 && mouseY<y1){
  a=1
  }

if(mouseX>(x2-0.15*windowWidth) && mouseX<x2 && mouseY<y2 && mouseY>0.8*y2){
  q1=1;
}

if(mouseX>x3 && mouseX<(x3+0.15*windowWidth) && mouseY<y3 && mouseY>(y3-0.2*windowHeight)){
  q2=1;
}


}

this.uncheck=function(){

r=0;
a=0;
q1=0;
q2=0;
}

this.Exactloc=function(){


noFill();
strokeWeight(5.0)
stroke(col1);
xx=0.45*windowWidth
yy=0.4*windowHeight
rect(xx,yy,0.1*windowWidth,0.4*windowHeight)
stroke(col2);
xx1=0.50*windowWidth
yy1=0.4*windowHeight
arc(xx1,yy1 , 0.1*windowWidth, 0.3*windowHeight, PI,2*PI);
stroke(col3);
xx2=0.50*windowWidth;
yy2=windowHeight;
quad(xx2, yy2, xx2-0.15*windowWidth, yy2, xx2-0.05*windowWidth, yy2-0.2*windowHeight,xx2, yy2-0.2*windowHeight);

xx3=0.50*windowWidth;
yy3=0.8*windowHeight+0.2*windowHeight;
stroke(col4);
quad(xx3, yy3, xx3+0.15*windowWidth, yy3, xx3+0.05*windowWidth, yy3-0.2*windowHeight,xx3, yy3-0.2*windowHeight);

}


this.Highlight=function(){


  if(x>(0.45*windowWidth-0.1*windowWidth) && x<(0.45*windowWidth+0.1*windowWidth)){
  col1= color(100,0,0);
  }
  else{
  col1=color(255,255,255)
  }

if(x1>((windowWidth/2) - 0.1*windowWidth) && x1<((windowWidth/2) + 0.1*windowWidth) ){
  col2=color(100,0,0)
}
else{
  col2=color(255,255,255);
}

if(x2<xx2+5 && x2>xx2-5){
  col3=color(100,0,0);
}
else{
col3=color(255,255,255);
}
if(x3<xx3+5 && x3>xx3-5){
  col4=color(100,0,0);
}
else{
col4=color(255,255,255);
}

}

this.ColorCheck=function(){
  if(col1.levels[0]==100  && col2.levels[0]==100 && col3.levels[0]==100 && col4.levels[0]==100){
  tf=true;
}

return tf;
  }

this.fire=function(){
yy=yy-speedy;
yy1=yy1-speedy;
yy2=yy2-speedy;
yy3=yy3-speedy;

}

this.nextscene6=function(){
  background(0,0,0)
  s6.display();
}


}
