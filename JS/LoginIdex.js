var email="sog@gmail.com"
var password="sog@123"
function accesstopage()
{
    var usergiveUSID=document.getElementById("userEmail").value
    var usergiveUSP=document.getElementById("userPass").value
    if(usergiveUSID == email && usergiveUSP == password )
    {
        var fom=document.forms
        fom[0].action="./HTML/Homepages.html"
        fom[0].elements[2].type="submit"
    }
    else if(usergiveUSID!=email && usergiveUSP==password)
    {
        document.getElementById("status").innerHTML="Email is Wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,black)"
        document.getElementById("passdiv").style.borderColor="royalblue"
    }
    else if(usergiveUSID==email && usergiveUSP!=password)
    {
        document.getElementById("status").innerHTML="Password is Wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,teal,red)"
        document.getElementById("emaildiv").style.borderColor="royalblue"
    }
    else{
        document.getElementById("status").innerHTML=" Email & Password is Wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
    }
}
function visiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transfrom 0.2s"
    var img=document.images
    img[0].src="./ASSET/png/monkeyopen.png"
}
function inVisiblePass()
{
    var fom=document.forms
    fom[0].elements[1].type="password"
    var img=document.images
    img[0].src="./ASSET/png/monkeyclose.png"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transfrom 0.2s"
}