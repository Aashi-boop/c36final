
var mydatabase;

var mygs=0;
var mypc=0;

var mygame, myplayer, myform;


function setup(){
    createCanvas(500,500);
    

    mydatabase= firebase.database();

    mygame= new Game();
    mygame.readgs();
    mygame.start();
    
}

function draw()
{

}