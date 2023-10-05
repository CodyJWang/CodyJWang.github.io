// 导入需要执行的文件
document.write("<script src='/sources/js/owo-big.js'></script>");

function whenDOMReady() {
    //此处填写需要执行的代码
    owoB();
}

window.onload=function(){
    whenDOMReady(); //打开网站之后先执行一次函数
    document.addEventListener("pjax:complete", whenDOMReady); //pjax加载完成之后执行上面函数
}
