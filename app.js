$(function() {
    var main_input = $('.main_input');
    var enter = $("#enter");
    var more = $("#more");
    var more_text = $("#more p");
    main_input.on({
        focus: function () {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
            more.hide();
            enter.addClass("active");
        },
        blur: function () {
            if (this.value == "") {
                this.value = this.defaultValue;
            }
            more.hide();
            enter.removeClass("active");
        },
        keypress: function (event) {
            if (event.keyCode == "13") {
                enter.click();
            }
        }
    });
    //转换地址
    var turl = function (in_url) {
        var url_reg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$|^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        var host, out_url;
        if (in_url.indexOf("/") != -1) {
            //分割原地址
            var url_array = in_url.split("/");
            host = url_array[0];
            if (host == "jwzx.cqupt.edu.cn") {
                out_url = "https://jwzx.cqupt.congm.in";
            } else {
                out_url = "http://" + host + ".cqupt.congm.in";
            }
            for (var j = 1; j < url_array.length; j++) {
                out_url += "/" + url_array[j];
            }
        } else {
            host = in_url;
            if (host == "jwzx.cqupt.edu.cn") {
                out_url = "https://jwzx.cqupt.congm.in";
            } else {
                out_url = "http://" + host + ".cqupt.congm.in";
            }
        }
        if (url_reg.test(host)) {
            more_text.html('外网地址为：<a target="_blank" href="' + out_url + '">' + out_url + '</a><br><small>(若无法访问请检查地址或<a href="http://congm.in">联系作者Cong Min</a>)</small>');
            return out_url;
        } else {
            more_text.html('输入的内网地址，格式有误！<br>请检查后重新输入。(注: http://前缀已补全)');
            return 0;
        }
    };
    enter.click(function () {
        more.show();
        var main_input_val = main_input.val();
        var url = turl(main_input_val);
        if (url) {
            window.open(url);
        }
    });
    $("#share").click(function () {
        $(".bdsharebuttonbox").fadeToggle();
    });
    //顶部悬浮提醒框
    var warn = $("#warn");
    var warn_text = $("#warn-text");
    var s = warn.get(0);
    var si = warn_text.get(0);
    var s_scrollLeft, s_add = 1, tmar;
    //文字滑动
    function mar() {
        if (s.offsetWidth <= si.offsetWidth) {
            s_scrollLeft = s.scrollLeft;
            s.scrollLeft += s_add;
            if (s_scrollLeft == s.scrollLeft) {
                s_add = -s_add;
            }
            tmar = setTimeout(mar, 20);
        }
    }

    //框体升降
    var warnBox = {
        up: function () {
            warn.animate({"top": "-48px"}, "slow");
            clearTimeout(tmar);
        },
        down: function (text) {
            $.each(text, function (i, e) {
                setTimeout(function () {
                    s.scrollLeft = 0;
                    warn_text.html(e);
                    warn.animate({"top": "18px"}, "slow");
                }, 12500 * i + 2500);
                setTimeout(function () {
                    mar();
                }, 12500 * i + 4000);
                setTimeout(function () {
                    warnBox.up();
                }, 12500 * i + 12500);

            });
        }
    };
    var warn_text_array = ["为了方便大家长期使用以及保证内网安全，请文明和谐的使用，不要调皮，切记切记｡◕‿◕｡", "目前只支持http协议，如发现无法访问的内网网址或IP，请<a href='http://congm.in'>联系作者Cong Min</a>。"];
    warnBox.down(warn_text_array);
    //底部信息切换
    setTimeout(show_about, 10000);
    function show_about() {
        $(".about#tome").fadeToggle();
        $(".about#toblues").fadeToggle();
        setTimeout(show_about, 10000);
    }
    //console.log();
    consoleSomething();
    function consoleSomething() {
        if (/webkit/.test(navigator.userAgent.toLowerCase())) {
            console.log('%c ', 'line-height:150px;background-image:url("http://congm.in/index/img/congminBlack.png");background-repeat:no-repeat;background-size:auto 150px;padding:75px 265px;');
            console.log('%c @ Cong Min - 闵聪      http://congm.in', 'padding-left:32px;line-height:32px;font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei","Hiragino Sans GB","Hiragino Sans GB W3",sans-serif;color:#666;font-size:14px;');
            console.log('%c 温馨提示：为了保证内网的安全，以及方便大家能够长期的使用内网外入，请文明和谐的使用，不要调皮，切记切记｡◕‿◕｡', 'color:#333;font-size:16px;')
        }
    }
});
//百度分享插件
window._bd_share_config = {
    common: {
        bdText: '重庆邮电大学 - 内网外入',
        bdDesc: '戳进来，一站解决外网访问教务在线等内网所有网页！http://cqupt.congm.in',
        bdUrl: 'http://cqupt.congm.in',
        bdPic: 'http://cqupt.congm.in/img/cqupt.png',
    },
    share: [{
        "tag": "share_default",
        "bdSize": 16
    }]
};
with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
//空间分享
(function () {
    var p = {
        url: location.href,
        showcount: '0', /*是否显示分享总数,显示：'1'，不显示：'0' */
        desc: '一站解决外网访问教务在线等内网所有网页！http://cqupt.congm.in', /*默认分享理由(可选)*/
        summary: '戳进来，一站解决外网访问教务在线等内网所有网页!', /*分享摘要(可选)*/
        title: '重庆邮电大学 - 内网外入', /*分享标题(可选)*/
        site: 'cqupt.congm.in', /*分享来源 如：腾讯网(可选)*/
        pics: 'http://cqupt.congm.in/img/cqupt.png' /*分享图片的路径(可选)*/
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    $(".bds_qzone").attr("href", "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&'));
})();