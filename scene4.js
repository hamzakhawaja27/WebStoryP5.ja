function scene4(){

var a1=new asteroids();
var t1=0;
this.pc="Select the asteroid most suited and click any key to continue."

var ar=[];
for (var i=0;i<30;i++){
st1= new star(random(windowWidth), random(0.8*windowHeight), 5*random(1.3), 10*random(1.3), 5);
ar.push(st1);
}

this.display=function(){

  for (var i=0;i<30;i++){
  ar[i].display();
  }
    fill(255,0,0);
    quad(windowWidth/2,windowHeight,(windowWidth/2)+10,windowHeight,mouseX+10,mouseY,mouseX,mouseY);
    fill(120,120,120);
    stroke(100);
    a1.display();
    t1=t1+0.007;
    fill(255,0,0)
    textSize(16);
    text(this.pc,20,20);

}

this.check=function(){

a1.checkcol();

}




}
