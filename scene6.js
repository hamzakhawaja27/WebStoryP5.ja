var start=0;
function scene6(){
this.smallastr=[];
this.theta=0;
var ar=[];
this.incdec=1.0;
var d1=new dig(0.1*windowWidth,0.4*windowHeight,0.9,-1);
var sa1=new stillasteroid(0.1*windowWidth - 0.3*windowWidth ,0.4*windowHeight - 0.15*windowHeight,1,3.5);
var d2=new dig(0.9*windowWidth,0.6*windowHeight,0.7,1);
var sa2=new stillasteroid(0.9*windowWidth - 0.25*windowWidth ,0.6*windowHeight - 0.20*windowHeight,1,2.5);
var d3=new dig(0.8*windowWidth,0.1*windowHeight,0.5,-1);
var sa3=new stillasteroid(0.8*windowWidth - 0.25*windowWidth ,0.1*windowHeight - 0.25*windowHeight,1,1.5);
var d4=new dig(0.3*windowWidth,0.05*windowHeight,0.3,1);
var sa4=new stillasteroid(0.3*windowWidth - 0.28*windowWidth ,0.05*windowHeight - 0.33*windowHeight,1,0.7);
var d5=new dig(0.6*windowWidth,0.4*windowHeight,0.3,-1);
var sa5=new stillasteroid(0.6*windowWidth - 0.26*windowWidth ,0.08*windowHeight,1,0.7);
var d6=new dig(0.4*windowWidth,0.45*windowHeight,0.2,1);
var sa6=new stillasteroid(0.4*windowWidth - 0.27*windowWidth ,0.096*windowHeight,1,0.4);
var d7=new dig(0.2*windowWidth,0.84*windowHeight,0.1,-1);
var sa7=new stillasteroid(0.2*windowWidth - 0.27*windowWidth ,0.45*windowHeight,1,0.3);

for(var i=0;i<20;i++){
let smallas=new smallasteroid(windowWidth - random(0,1)*i*windowWidth/2,windowHeight - random(0,1)*i*windowHeight/2,1,0.1*i);
this.smallastr[i]=smallas
}

for (var i=0;i<30;i++){
st1= new star(random(windowWidth), random(0.8*windowHeight), 5*random(1.3), 10*random(1.3), 5);
ar.push(st1);
}

this.display=function(){
  button1 = createButton('start digging');
  button1.position(0.03*windowWidth,0.9*windowHeight);
  button2 = createButton('stop digging');
  button2.position(0.20*windowWidth,0.9*windowHeight);
  button1.mousePressed(awain1)
  button2.mousePressed(awain2)
//button.mousePressed(greet);

background(0,0,0);

fill(255,255,255)
for (var i=0;i<30;i++){
ar[i].display();
}
noStroke();
fill(255,130,0);
ellipse(windowWidth/2 +  0.1 *windowWidth,0.4*windowHeight  ,windowWidth,windowHeight);
d1.display(start);
d2.display(start);
d3.display(start);
d4.display(start);
d5.display(start);
d6.display(start);
d7.display(start);

sa1.display();
sa2.display();
sa3.display();
sa4.display();
sa5.display();
sa6.display();
sa7.display();

for(var i=0;i<20;i++){
this.smallastr[i].display();
}
}




}
function awain1(){
  start=1;
}
function awain2(){
  start=0;
}
