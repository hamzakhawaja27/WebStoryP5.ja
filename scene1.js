function scene1(){
var t = millis();
var elapse=1000;
this.rad=5;

tx=windowWidth;
ty=windowHeight;

pic7=loadImage("assets/world.PNG");
pic8=loadImage("assets/GUN.PNG");

this.display=function(){

image(pic8,0,0,windowWidth,windowHeight);
tint(255,150);
image(pic7,0,0,windowWidth,windowHeight);
fill(255,0,0,200);
ellipse(0.54*windowWidth,0.51*windowHeight,this.rad,this.rad);
ellipse(0.63*windowWidth,0.295*windowHeight,this.rad,this.rad);
ellipse(0.66*windowWidth,0.28*windowHeight,this.rad,this.rad);
ellipse(0.18*windowWidth,0.36*windowHeight,this.rad,this.rad);
ellipse(0.26*windowWidth,0.47*windowHeight,this.rad,this.rad);
ellipse(0.45*windowWidth,0.30*windowHeight,this.rad,this.rad);
ellipse(0.458*windowWidth,0.33*windowHeight,this.rad,this.rad);
ellipse(0.47*windowWidth,0.355*windowHeight,this.rad,this.rad);
ellipse(0.527*windowWidth,0.34*windowHeight,this.rad,this.rad);
ellipse(0.50*windowWidth,0.44*windowHeight,this.rad,this.rad);
ellipse(0.54*windowWidth,0.42*windowHeight,this.rad,this.rad);
ellipse(0.535*windowWidth,0.55*windowHeight,this.rad,this.rad);
ellipse(0.60*windowWidth,0.47*windowHeight,this.rad,this.rad);
ellipse(0.59*windowWidth,0.40*windowHeight,this.rad,this.rad);
ellipse(0.58*windowWidth,0.29*windowHeight,this.rad,this.rad);
ellipse(0.59*windowWidth,0.27*windowHeight,this.rad,this.rad);
ellipse(0.71*windowWidth,0.33*windowHeight,this.rad,this.rad);
ellipse(0.75*windowWidth,0.48*windowHeight,this.rad,this.rad);
ellipse(0.795*windowWidth,0.46*windowHeight,this.rad,this.rad);
ellipse(0.84*windowWidth,0.50*windowHeight,this.rad,this.rad);



this.rad=this.rad+0.2;

if(this.rad>30){
  this.rad=5;
}


}

}
