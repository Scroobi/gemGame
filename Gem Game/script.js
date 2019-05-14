$(document).ready(function () {

    var rando = Math.floor(Math.random() * 101 + 19);


    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);

    var userAmount = 0;
    var wins = 0;
    var lose = 0;

    $("#numWin").text(wins);
    $("#numLose").text(lose);

    function reset()
    {
        rando = Math.floor(Math.random() * 101 + 19)
        console.log(rando);
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
        userAmount = 0;
        $("yourAmount").text(userAmount); 
    }
    
    function gemReset()
    {
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
    }
    
    function winz()
    {
        wins++;
        $("numWin").text(wins);
        alert("You Win!");
        reset();
    }

    function lossz()
    {
        lose++;
        $("#numLose").text(lose);
        alert("You Lose!");
        reset();
    }

    $("#gem1").on("click", function()
    {
        userAmount = userAmount + gem1;
        console.log("New Total = " + userAmount);
        $("#yourAmount").text("Your Total: " + userAmount);
        if(userAmount == rando)
        {
            winz();
        }
        else if (userAmount > rando)
        {
            lossz();
        }
    })

    $("#gem2").on("click", function()
    {
        userAmount = userAmount + gem2;
        console.log("New Total = " + userAmount);
        $("#yourAmount").text("Your Total: " + userAmount);
        if(userAmount == rando)
        {
            winz();
        }
        else if (userAmount > rando)
        {
            lossz();
        }
    })

    $("#gem3").on("click", function()
    {
        userAmount = userAmount + gem3;
        console.log("New Total = " + userAmount);
        $("#yourAmount").text("Your Total: " + userAmount);
        if(userAmount == rando)
        {
            winz();
        }
        else if (userAmount > rando)
        {
            lossz();
        }
    })

    $("#gem4").on("click", function()
    {
        userAmount = userAmount + gem4;
        console.log("New Total = " + userAmount);
        $("#yourAmount").text("Your Total: " + userAmount);
        if(userAmount == rando)
        {
            winz();
        }
        else if (userAmount > rando)
        {
            lossz();
        }
    })

    

});