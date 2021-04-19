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