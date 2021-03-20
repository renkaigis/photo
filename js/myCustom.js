window.onload=function()
{
    window.requestAnimationFrame(getDate)
}

function getDate()
{
    var d=new Date();   
    var year=d.getFullYear()  //获取年

    // 页面底部日期
    var currentYear=document.getElementById("currentYear")
    currentYear.innerHTML=year

    // 页面底部学校信息
    var mySchool=document.getElementById("mySchool")
    var myCollege=document.getElementById("myCollege")
    mySchool.innerHTML="NanJing Normal University"
    myCollege.innerHTML="School Of Geography Science"

    // 页面底部的联系方式
    var myEmail=document.getElementById("myEmail")    
    var myQQ=document.getElementById("myQQ")
    myEmail.innerHTML="<a href='"+"mailto:renkaigis@foxmail.com'"+">renkaigis@foxmail.com</a>"
    myQQ.innerHTML="QQ：541638321"
}