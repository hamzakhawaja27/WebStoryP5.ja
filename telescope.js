function telescope(){



this.display=function(){

push()
translate(windowWidth/2,0.7*windowHeight);
push()
rotate(PI/4)
quad(145,-20,145,20,170,30,170,-30)
rect(105,-20,40,40,4)
rect(-80,-25,180,50,4)
rect(-125,-30,40,60,4)
rect(-145,-35,15,70,4)
pop()
pop()
}




}
