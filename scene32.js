function scene32(){


var sc1=new Scientist();
var sc2=new Scientist1();
var d=new dial1();

this.sent="Yes. It was in the headlines today."
this.sent1="Its a terrible tragedy."
this.scont="Press any key to continue"


this.display=function(){

    sc1.display();
    sc2.display();
    d.display();
    fill(0,0,0)
    textSize(14)
    text(this.sent, (3*windowWidth/4)-240,windowHeight-305);
    text(this.sent1, (3*windowWidth/4)-240,windowHeight-290);
    fill(255,0,0)
    textSize(10)
    text(this.scont, (3*windowWidth/4)-140,windowHeight-265);


}

}
