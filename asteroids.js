function asteroids(){
this.tita=[8.6,18.3,7.4,4.6]
this.Dia=[10.4,22.7,17.6,9.4]
this.lith=[20.3,12.4,18.3,22.2]
this.water=[15.7,18.6,17.7,18.8]
this.others=[45,28,39,45]
var Allaes=[]
this.flag=0;

for (var i=0;i<4;i++){
Allaes[i] = new asteroid(this.tita[i],this.Dia[i],this.lith[i],this.water[i],this.others[i],0.9-(0.2*i), 0.2*(i+0.5));
}

this.display=function(){
for (var i=0;i<4;i++){
Allaes[i].display();
  }

}
var astnum;
this.checkcol=function(){
            for (var i=0;i<4;i++){
            this.flag=Allaes[i].collision();
              if(this.flag==1){
                astnum=i;
                selAstr=1;
                break;
              }
            }
            for(var i=0;i<4;i++){
              if(i!=astnum){
              Allaes[i].flag=0;
              Allaes[i].col=[100,100,100];

            }
            }


}


}
