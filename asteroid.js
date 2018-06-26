
function asteroid(xx,yy,zz,ww,oo,cirlen,scale){

this.col=[100,100,100];
this.count=0;
this.flag=0;
this.cir=cirlen;

var numv=random(15,30);
var rdiff = [];
for(var j=0 ; j < numv; j++){
rdiff[j]=random(20,40) * scale;
}
var r= 40;
var x0;
var y0;

this.display=function(count,coll){
  if(this.flag==1){
  fill(170,0,0)
  rect(0.85*windowWidth,0.1*windowHeight,0.02*windowWidth,0.02*windowHeight)
  text("Titanium",0.88*windowWidth,0.12*windowHeight)
  let prop=2*PI*(xx/100)
  arc(x1, y1, 0.15*windowWidth, 0.15*windowHeight, 0,prop);

  fill(0,170,0)
  rect(0.85*windowWidth,0.13*windowHeight,0.02*windowWidth,0.02*windowHeight)
  text("Diamond",0.88*windowWidth,0.15*windowHeight)
  let prop1=prop;
  prop=prop+2*PI*(yy/100)
  arc(x1, y1, 0.15*windowWidth, 0.15*windowHeight,prop1,prop);


  fill(0,0,170)
  rect(0.85*windowWidth,0.16*windowHeight,0.02*windowWidth,0.02*windowHeight)
  text("Lithium",0.88*windowWidth,0.18*windowHeight)
  prop1=prop;
  prop=prop+2*PI*(zz/100);
  arc(x1, y1, 0.15*windowWidth, 0.15*windowHeight,prop1,prop);

  fill(170,170,0)
  rect(0.85*windowWidth,0.19*windowHeight,0.02*windowWidth,0.02*windowHeight)
  text("Water",0.88*windowWidth,0.21*windowHeight)
  prop1=prop;
  prop=prop+2*PI*(ww/100);
  arc(x1, y1, 0.15*windowWidth, 0.15*windowHeight,prop1,prop);

  fill(170,0,170)
  rect(0.85*windowWidth,0.22*windowHeight,0.02*windowWidth,0.02*windowHeight)
  text("Others",0.88*windowWidth,0.24*windowHeight)
  prop1=prop;
  prop=prop+2*PI*(oo/100);
  arc(x1, y1, 0.15*windowWidth, 0.15*windowHeight,prop1,prop);
}

  x0=(windowWidth/2) + this.cir*(windowWidth/2)*cos(this.count + this.cir);
  y0=(windowHeight/2) + this.cir*(windowHeight/2)*sin(this.count + this.cir);
  fill(this.col[0],this.col[1],this.col[2]);
  beginShape();
  for(var i=0;i<numv;i++){
    var angle=map(i,0,numv,0, TWO_PI);
    var x = x0 + 2*(r+rdiff[i]) * cos(angle);
    var y =  y0 + ((r+rdiff[i])/4) * sin(angle);
    vertex(x,y)
  }
  endShape();
  this.count=this.count+0.0085;

}

this.collision=function(){
var d=Math.sqrt(Math.pow((mouseX-x0),2) + Math.pow((mouseY-y0),2))
if (d<r){
 this.col=[255,255,255];
 this.flag=1;
}
else{
  this.col=[100,100,100];
  this.flag=0;
}
return this.flag;
}



}
