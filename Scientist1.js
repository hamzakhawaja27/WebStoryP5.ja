function Scientist1(){



this.display=function(){
fill(50,150,0)
rect((3*windowWidth/4),windowHeight-200,50,100)
fill(50,100,100)
quad((3*windowWidth/4),windowHeight-100,((3*windowWidth/4))+25,windowHeight-100,((3*windowWidth/4)),windowHeight,(3*windowWidth/4) -25 ,windowHeight);
quad(((3*windowWidth/4)) + 25,windowHeight-100,((3*windowWidth/4))+50,windowHeight-100,((3*windowWidth/4)) + 75,windowHeight,(3*windowWidth/4) + 50 ,windowHeight);
fill(200,100,50)
rect(((3*windowWidth/4))-25,windowHeight-10,30,10)
rect(((3*windowWidth/4)) + 50,windowHeight-10,30,10)
fill(200,100,50)
rect(((3*windowWidth/4))+17.5,windowHeight-210,15,10)
rect(((3*windowWidth/4))+10,windowHeight-240,30,30)

}


}
