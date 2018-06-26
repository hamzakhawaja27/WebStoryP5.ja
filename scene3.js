function scene3(){

var ar=[];
var t=new telescope();


for (var i=0;i<30;i++){
st1= new star(random(windowWidth), random(0.8*windowHeight), 5*random(1.3), 10*random(1.3), 5);
ar.push(st1);
}


this.display=function(){
    for (var i=0;i<30;i++){
    ar[i].display();
    }
    fill(255,255,255);
    quad(windowWidth/2,windowHeight,(windowWidth/2)+0.01*windowWidth,windowHeight,(windowWidth/2)+0.005*windowWidth,windowHeight-0.25*windowHeight,windowWidth/2,windowHeight-0.26*windowHeight)
    quad((windowWidth/2)-0.04*windowWidth,windowHeight,(windowWidth/2)-0.035*windowWidth,windowHeight,(windowWidth/2)+0.01*windowWidth,windowHeight-0.3*windowHeight,windowWidth/2,windowHeight-0.3*windowHeight)
    t.display();

}

}
