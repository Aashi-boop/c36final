class Player{
    constructor()
    {
        
    }

    readpc()
    {
        mydatabase.ref("playercount").on("value", function (data){
            mypc=data.val();
        })
    }

    updateplayerinfo(playersname)
    {
        var plyindex= "players/player" + mypc;
        mydatabase.ref(plyindex).set({
            name: playersname
        })
    }

    updatepc(playerscount)
    {
        mydatabase.ref("/").update({
            playercount: playerscount
        })
    }
}