var startTime;
var song;
var flag=false;
var t;
var speedy=0;
var Allscene3=[];
var sc3No=0;
var flag2=0;
var selAstr=0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here

    s1=new scene1();
    s2=new scene2();
    s3=new scene3();
    Allscene3[0]=new scene31();
    Allscene3[1]=new scene32();
    Allscene3[2]=new scene33();
    Allscene3[3]=new scene34();
    Allscene3[4]=new scene35();
    Allscene3[5]=new scene36();
    s4=new scene4();
    s5=new scene5();
    s6=new scene6();
    Image1=loadImage("assets/Fire1.jpg");

    startTime=millis();




  }

function draw() {
    // your "draw loop" code goes here

if (millis()-startTime<10000){
    background(255);
    s1.display();
    sc3No=0;
  }
else{
        if(sc3No<6){
          background(0);
          fill(255,255,255);
          s3.display();
          Allscene3[sc3No].display();
        }
        else{
          background(0);
          fill(255,255,255);
          s4.display();
              if(flag2>0){
                background(0);
                s2.display();
                flag=s2.ColorCheck();
                  if(flag==true){
                          if((millis()-t)>1000 && (millis()-t)<30000){
                            s2.fire();
                            image(Image1, (windowWidth/2) - 0.1*windowWidth, windowHeight-speedy,0.2*windowWidth,0.6*windowHeight);
                            speedy=speedy+3;
                                  if((windowHeight-speedy)<(-1*0.6*windowHeight)){
                                  s2.nextscene6();
                                      }

                          }
                          else if((millis()-t)>30000){
                            background(0,0,0)
                            s5.display();
                          }
                  }

                  else{
                    s2.Highlight();
                    s2.Exactloc();
                    flag=s2.ColorCheck();
                    t=millis();
                  }


              }


        }

}




}


function mousePressed() {
  s2.check();
  s4.check();
}
function mouseDragged() {
  s2.move();
}
function mouseReleased(){
  s2.uncheck();
}
function keyPressed() {
  sc3No=sc3No+1;
  if(selAstr==1 && sc3No>5){
  flag2=flag2+1;
  }
}
