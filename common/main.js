/* 插入于内网页面中
 * cqupt.congm.in
 * */

/* 插入js */
/* 百度统计 */
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
    var a = '<a href="//cqupt.congm.in" id="cqupt_congm_in">' +
                '内网外入' + '<br>' +
                '<small>cqupt.congm.in</small>' +
            '</a>';
    if(self == top){
        document.body.insertAdjacentHTML("afterbegin", a);
    }
})();

/* 链接地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    var host_reg = /cqupt\.congm\.in/;
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        var protocol = url_array[0];
        if(url_array.length > 2 && (protocol == "http:" || protocol == "https:") && !host_reg.test(url_array[2])){
            url_array[2] += ".cqupt.congm.in";
            all_a[i].href = url_array.join('/');
        }
    }
})();