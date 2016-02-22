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
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        if(url_array.length > 2 && all_a[i].href.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{g
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in" + ":" + host_array[1];
            }
            all_a[i].href = url_array.join('/');
        }
    }
})();