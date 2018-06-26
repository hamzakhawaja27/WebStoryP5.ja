function scene35(){

var sc1=new Scientist();
var sc2=new Scientist1();
var d=new dial();

this.sent="Lets go and find an asteroid which"
this.sent1="which looks suitable for the task. And "
this.sent2="get started with the space mission."
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
