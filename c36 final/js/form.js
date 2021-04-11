class Form
{
    constructor()
    {

    }

    display()
    {
        var title= createElement("h3")
        title.html("CAR RACING GAME")
        title.position(400,100)
        

        var input= createInput("NAME")
        input.position(350,250)

        
        var button= createButton("Press to continue")
        button.position(350,280);

        
        button.mousePressed(function(){
            input.hide()
            button.hide();

            var greeting= createElement("h1")
            greeting.html("HELLO")
            greeting.position(400,300)

            var name = input.value();
            mypc=mypc+1;
            myplayer.updateplayerinfo(name)
            myplayer.updatepc(mypc)
        })
    }   
      
}        