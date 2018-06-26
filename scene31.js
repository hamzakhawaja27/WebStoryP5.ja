function scene31(){

var sc1=new Scientist();
var sc2=new Scientist1();
var d=new dial();
this.sent="Scarcity of natural resources has"
this.sent1="created a havoc around the world?"
this.scont="Press any key to continue"


this.display=function(){

    sc1.display();
    sc2.display();
    d.display();
    fill(0,0,0)
    textSize(14)
    text(this.sent, ((windowWidth/4)-40)+60,windowHeight-305);
    text(this.sent1, ((windowWidth/4)-40)+60,windowHeight-290);
    fill(255,0,0)
    textSize(10)
    text(this.scont, (windowWidth/4)+145,windowHeight-265);
}

}
