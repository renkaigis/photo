window.onload=function()
{
    window.requestAnimationFrame(getDate)
}

function getDate()
{
    var d=new Date();   
    var year=d.getFullYear()  //获取年

    var Tools=document.getElementById("currentYear")
    Tools.innerHTML=year
}