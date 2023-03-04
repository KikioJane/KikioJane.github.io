function alertButton()
{
    alert("Hello, world!");
    //Add action that makes text bigger when button is pressed
    document.getElementById("Text box").style.fontSize = "24px";
}

function fancyStyle()
{
    if(document.getElementById("Fancy").checked == true)
    {
        document.getElementById("Text box").style.fontWeight = "bold";
        document.getElementById("Text box").style.color = "blue";
        document.getElementById("Text box").style.textDecoration = "underline";
    }
    else if(document.getElementById("Boring").checked == true)
    {
        document.getElementById("Text box").style.all = "revert";
    }

}

function mooButton()
{
    document.getElementById("Text box").style.textTransform = "uppercase";
    var text = document.getElementById("Text box").value;
    var sentence = text.split(".");
    text = sentence.join(".-Moo");
    document.getElementById("Text box").value = text;
}