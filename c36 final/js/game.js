class Game{
    constructor()
    {

    }

    readgs()
    {
       mydatabase.ref("gamestate").on("value", function (data){
           mygs=data.val();
       }) 
    }

    start()
    {
        if(mygs===0)
        {
            myplayer= new Player();
            myplayer.readpc();

            myform= new Form();
            myform.display();
        }
    }
}