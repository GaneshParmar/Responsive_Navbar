var num=0;
function navDisplay(){
    if(num==0){
        document.getElementById("menu-list").style.display="block";
        document.getElementById("sm-menu").style.color="black";
        num=1;
    }
    else
    {
        document.getElementById("menu-list").style.display="none";
        document.getElementById("sm-menu").style.color="rgba(0,0,0,0.5)";
        num=0;
    }
}