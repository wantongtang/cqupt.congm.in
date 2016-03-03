/* 插入于内网页面中
 * cqupt.congm.in
 * */

/* 插入js */
/* 百度统计 */
var _hmt = _hmt || [];
(function() {
    var baidu = document.createElement("script");
    baidu.src = "//hm.baidu.com/hm.js?d57aa305b1d347caa2d89b63bdcd298c";
    if(self == top){
        document.body.appendChild(baidu);
    }
})();
/* CNZZ统计 */
(function() {
    var cnzz = document.createElement("script");
    cnzz.src = "//s4.cnzz.com/z_stat.php?id=1257517721";
    if(self == top){
        document.body.appendChild(cnzz);
    }
})();

/* 插入css */
(function() {
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "//cqupt.congm.in/common/main.css";
    if(self == top){
        document.head.appendChild(css);
    }
})();

/* 插入dom */
(function(){
    var a = '<a href="//cqupt.congm.in" id="_cqupt">' +
                '内网外入<br>' +
                '<small>cqupt.congm.in</small>' +
            '</a>' +
            '<div id="_cqupt-discuss">' +
                '<span class="_cqupt-iconfont _cqupt-pinglun">&#xf00f8;</span>' +
                '<span class="_cqupt-pinglun-text">评论</span>' +
            '</div>' +
            '<div id="_cqupt-side-box">' +
                '<header class="_cqupt-header">' +
                    '<div id="_cqupt-discuss-close"><img src="//cqupt.congm.in/img/close.png"></div>' +
                '</header>' +
                '<div class="_cqupt-content">' +
                    '<div class="_cqupt-duosuo">' +
                        '<div class="ds-thread" data-thread-key="1" data-title="内网外入" data-url="https://cqupt.congm.in"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';
    if(self == top){
        document.body.insertAdjacentHTML("afterbegin", a);
    }
})();

/* 多说 */
var duoshuoQuery = {short_name:"cqupt-inner"};
(function() {
    var duosuo = document.createElement("script");
    duosuo.src = "//cqupt.congm.in/js/duosuo_embed.min.js";
    if(self == top){
        document.body.appendChild(duosuo);
    }
})();

/* 链接地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        if(url_array.length > 2 && all_a[i].href.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in" + ":" + host_array[1];
            }
            all_a[i].href = url_array.join('/');
        }
    }
})();

/* discuss */
(function(){
    var discuss = document.getElementById("_cqupt-discuss");
    var side = document.getElementById("_cqupt-side-box");
    var close = document.getElementById("_cqupt-discuss-close");
    discuss.onclick = function(){
        discuss.className = "active";
        side.className = "active";
    };
    close.onclick = function(){
        discuss.className = "";
        side.className = "";
    };
})();