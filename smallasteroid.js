function smallasteroid(wx,wy,cirlen,scale){

  this.col=[89,29,10];
  this.count=0;
  this.flag=0;
  this.cir=cirlen;

  var numv=random(15,30);
  var rdiff = [];
  for(var j=0 ; j < numv; j++){
  rdiff[j]=random(10,30) * scale;
  }
  var r= 5;
  var x0;
  var y0;

this.display=function(){

  x0=wx + this.cir*(windowWidth/2)*cos(this.count + this.cir);
  y0=wy + this.cir*(windowHeight/2)*sin(this.count + this.cir);
  fill(this.col[0],this.col[1],this.col[2]);
  beginShape();
  for(var i=0;i<numv;i++){
    var angle=map(i,0,numv,0, TWO_PI);
    var x = x0 + 2*(r+rdiff[i]) * cos(angle);
    var y =  y0 + ((r+rdiff[i])/2) * sin(angle);
    vertex(x,y)
  }
  endShape();
  this.count=this.count+0.0085;

}


}
