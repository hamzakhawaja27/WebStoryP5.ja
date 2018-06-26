function scene33(){

var sc1=new Scientist();
var sc2=new Scientist1();
var d=new dial();

this.sent="Do you think we could mine diamond"
this.sent1="titanium, lithium etc from an asteroid"
this.sent2="and end the issue once and for all?"
this.scont="Press any key to continue"

this.display=function(){

    sc1.display();
    sc2.display();
    d.display();

    fill(0,0,0)
    textSize(14)
    text(this.sent, ((windowWidth/4)-40)+60,windowHeight-305);
    text(this.sent1, ((windowWidth/4)-40)+60,windowHeight-290);
    text(this.sent2, ((windowWidth/4)-40)+60,windowHeight-275);


}

}
