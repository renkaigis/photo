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
    // mySchool.innerHTML="Northwest A&F University"
    mySchool.innerHTML="Curtin University"
    myCollege.innerHTML="School of Design and the Built Environment"
    // myCollege.innerHTML="College of Natural Resources and Environment"

    // 页面底部的联系方式
    var myEmail=document.getElementById("myEmail")    
    var myQQ=document.getElementById("myQQ")
    myEmail.innerHTML="<a href='"+"mailto:kai.ren@curtin.edu.au'"+">kai.ren@curtin.edu.au</a>"
    // myEmail.innerHTML="<a href='"+"mailto:renkaigis@gmail.com'"+">renkaigis@gmail.com</a>"
    myQQ.innerHTML="QQ: 541638321"
}