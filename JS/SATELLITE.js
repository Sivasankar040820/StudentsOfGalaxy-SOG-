var images=document.getElementsByClassName("a")
for(i=1; i<=images.length; i++)
{
    images[i-1].setAttribute("src","../ASSET/images/satellite/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images)
var indval=0;
var imagesarr=["1.jpg","2.jpg","3.jpg","5.webp","4.webp","6.webp"]
function inc()
{
    indval++;
    if(indval>=imagesarr.length)
    {
        indval=0;
        document.getElementById("header").style.backgroundImage="url(../ASSET/images/satellite/"+imagesarr[indval]+")"
    }
    else{
        document.getElementById("header").style.backgroundImage="url(../ASSET/images/satellite/"+imagesarr[indval]+")" 
    }
}
function dec()
{
    indval--;
    if(indval<0)
    {
        indval=9;
        document.getElementById("header").style.backgroundImage="url(../ASSET/images/satellite/"+imagesarr[indval]+")"
    }
    else{
        document.getElementById("header").style.backgroundImage="url(../ASSET/images/satellite/"+imagesarr[indval]+")"
    }
}
function openImg(pic,name,info)
{
    document.getElementById("subWindow").removeAttribute("style")
    document.getElementById("subwindowimg").src='../ASSET/images/satellite/'+pic+".jpg"
    document.getElementById("imagHeading").innerHTML=name;
    document.getElementById("imgpara").innerHTML=info;
}
function closeImg()
{
    document.getElementById("subWindow").setAttribute("style","display:none")
}