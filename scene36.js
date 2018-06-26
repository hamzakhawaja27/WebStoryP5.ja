function scene36(){

var sc1=new Scientist();
var sc2=new Scientist1();
var d=new dial1();

this.sent="Sounds like a good Idea. Lets"
this.sent1="get working."
this.scont="Press any key to continue"



this.display=function(){

    sc1.display();
    sc2.display();
    d.display();
    fill(0,0,0)
    textSize(14)
    text(this.sent, (3*windowWidth/4)-240,windowHeight-305);
    text(this.sent1, (3*windowWidth/4)-240,windowHeight-290);

}

}
