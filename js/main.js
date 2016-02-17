/* 插入于内网页面中
 * cqupt.congm.in
 * */
/* 百度统计 */
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?d57aa305b1d347caa2d89b63bdcd298c";
    if(self == top){
        document.body.appendChild(hm);
    }
})();
/* 插入dom - 左上角固定链接 */
(function(){
    var a_css = "display:inline-block;" +
        "position:fixed;" +
        "z-index:999999;" +
        "left:-2px;" +
        "top:6px;" +
        "height:36px;" +
        "margin:0;" +
        "padding:6px 24px;" +
        "background:#35b558;" +
        "opacity:.85;" +
        "filter:alpha(opacity=85);" +
        "border-top-right-radius:4px;" +
        "border-bottom-right-radius:4px;" +
        "box-shadow:2px 0 6px #666;" +
        "-moz-box-shadow:2px 0 6px #999;" +
        "-webkit-box-shadow:2px 0 6px #999;" +
        "text-align:center;" +
        "overflow:hidden;" +
        "color:#fff;" +
        "font-family:'Helvetica Neue',Helvetica,Arial,'Microsoft YaHei',sans-serif;" +
        "font-size:13px;" +
        "font-weight:500;" +
        "line-height:18px;" +
        "-webkit-font-smoothing:antialiased;" +
        "-webkit-text-size-adjust:none;" +
        "text-decoration:none;" +
        "outline:none;";
    var small_css = "margin:0;" +
        "padding:0;" +
        "color:#fff;" +
        "font-family:'Helvetica Neue',Helvetica,Arial,'Microsoft YaHei',sans-serif;" +
        "font-size:11px;" +
        "font-weight:500;" +
        "line-height:18px;";
    var a = '<a href="//cqupt.congm.in" style="' + a_css + '">' +
        '内网外入' +
        '<br>' +
        '<small style="' + small_css + '">' +
        'cqupt.congm.in' +
        '</small>' +
        '</a>';
    if(self == top){
        document.body.insertAdjacentHTML("afterbegin", a);
    }
})();
/* 链接地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    var host_reg = /.+\.cqupt\.congm\.in/;
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        var protocol = url_array[0];
        if(url_array.length > 2 && (protocol == "http:" || protocol == "https:") && !host_reg.test(url_array[2])){
            url_array[2] += ".cqupt.congm.in";
            all_a[i].href = url_array.join('/');
        }
    }
})();