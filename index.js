function myfunction(){
    if (document.getElementById("menu").style.display === "none"  )
    {
    document.getElementById("menu").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    }
    else
    {
    document.getElementById("menu").style.display = "none";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        document.getElementsById("nav").style.top ="0px"
    }
    else {
        document.getElementsById("nav").style.top ="-120px"
    }
    prevScrollpos = currentScrollPos;
}