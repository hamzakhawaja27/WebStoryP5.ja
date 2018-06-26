function Scientist(){



this.display=function(){
fill(50,50,0)
rect((windowWidth/4)-40,windowHeight-200,50,100)
fill(50,100,200)
quad((windowWidth/4)-40,windowHeight-100,((windowWidth/4)-40)+25,windowHeight-100,((windowWidth/4)-40),windowHeight,(windowWidth/4)-40 -25 ,windowHeight);
quad(((windowWidth/4)-40) + 25,windowHeight-100,((windowWidth/4)-40)+50,windowHeight-100,((windowWidth/4)-40) + 75,windowHeight,(windowWidth/4)-40 + 50 ,windowHeight);
fill(200,100,50)
rect(((windowWidth/4)-40)-25,windowHeight-10,30,10)
rect(((windowWidth/4)-40) + 50,windowHeight-10,30,10)
fill(200,100,50)
rect(((windowWidth/4)-40)+17.5,windowHeight-210,15,10)
rect(((windowWidth/4)-40)+10,windowHeight-240,30,30)

}



}
