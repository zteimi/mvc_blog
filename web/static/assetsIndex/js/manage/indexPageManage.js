//页面跳转
//跳转详情页
function jumpToView(articleId) {
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","articleViews");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","articleId");
    input.attr("value",articleId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
//回到首页
function jumpToIndex(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","articleIndex");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
//留言板
function jumpToMessageBoard(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","messageBoard");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
//时间轴
function jumpToTraceTimeline(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","traceTimeline");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
// 博文管理
function jumpToArticleManage(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","articleManage");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
// 添加博文
function jumpToCreate(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","articleCreate");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
// 更新博文
function jumpToUpdate(articleId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","articleUpdate");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","articleId");
    input.attr("value",articleId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
// 账号管理
function jumpToAccountManage(userId){
    var form = $("<form>");
    form.attr("style","display:none");
    form.attr("target","");
    form.attr("method","post");
    //请求地址
    form.attr("action","accountManage");
    var input = $("<input>");
    input.attr("type","hidden");
    input.attr("name","userId");
    input.attr("value",userId);
    $("body").append(form);
    form.append(input);
    form.submit();
    form.remove();
}
//跳转到注册页面
function jumpToRegister(){
    popupDiv('pop-div-confirm');
}
//弹窗显示
function popupDiv(div_id) {
    var div_obj = $("#"+div_id);
    var windowWidth = document.body.clientWidth;
    var windowHeight = document.body.clientHeight;
    var popupHeight = div_obj.height();
    var popupWidth = div_obj.width();
    //添加并显示遮罩层
    $("<div id='mask'></div>").addClass("mask")
        .width(windowWidth)
        .height(windowHeight)
        .click(function() {hideDiv(div_id); })
        .appendTo("body")
        .fadeIn(200);
    div_obj.css({"position": "absolute"})
        .animate({left: windowWidth/2-popupWidth/2,
            top: windowHeight/3, opacity: "show" }, "slow");
}
//弹窗隐藏
function hideDiv(div_id) {
    $("#mask").remove();
    $("#" + div_id).animate({left: 0, top: 100, opacity: "hide" }, "slow");
}



