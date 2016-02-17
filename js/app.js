$(function() {
    var main_input = $('.main_input'), enter = $("#enter"), more = $("#more"), $tagsList = $("#tagsList"), $status = $("#status");
    var more_text = more.find("p");
    //升起动画控制
    var iUp = (function() {
        var t = 0,
            d = 200,
            clean = function(){
                t = 0;
            },
            up = function(e) {
                setTimeout(function() {
                    $(e).addClass("up")
                }, t);
                t += d;
            },
            down = function(e){
                $(e).removeClass("up");
            },
            toggle = function(e){
                setTimeout(function() {
                    $(e).toggleClass("up")
                }, t);
                t += d;
            };
        return {
            clean: clean,
            up: up,
            down: down,
            toggle: toggle
        }
    })();
    $(".iUp").each(function(i, e) {
        iUp.up(e);
    });
    //读取josn数据，顶部悬浮提醒框warn文本及tagList快捷链接
    $.getJSON("./data.json?" + new Date().getTime(), function(data){
        var warn_text_array = data.warn;
        var tagsList = data.tagsList;
        warnBox.down(warn_text_array);
        $.each(tagsList, function(i, e){
            $tagsList.append("<a target='_blank' href='" + e.href + "'>" + e.title + "</a>");
        });
        tagsInit();
    });
    var status = {
        reset: function(){
            $status.find("i").attr("class", "reset");
            $status.find("span").text("正在查询中");
        },
        on: function(){
            $status.find("i").attr("class", "on");
            $status.find("span").text("服务器在线");
        },
        off: function(){
            $status.find("i").attr("class", "off");
            $status.find("span").text("服务器超时");
        }
    };
    //服务器状态
    var statusQuery = function(){
        status.reset();
        var query = $.ajax({
            url: "//host.congm.in/status.php?callback=?",
            dataType: "jsonp",
            timeout : 3000,
            success: function(data){
                if($.parseJSON(data).status == 'ok'){
                    status.on();
                }else{
                    status.off();
                }
            },
            complete : function(XMLHttpRequest){
                if(XMLHttpRequest.statusText != 'success'){
                    query.abort();
                    status.off();
                }
            }
        });
    };
    statusQuery();
    $status.on("click", statusQuery);
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
        var host, out_url, url_array, url_reg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$|^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        var thost = function (in_host) {
            //判断host
            return (in_host == "jwzx.cqupt.edu.cn")?"https://jwzx.cqupt.congm.in":("http://" + host + ".cqupt.congm.in");
        };
        //分割原地址
        url_array = in_url.split("/");
        host = url_array[0];
        out_url = thost(host);
        for (var j = 1; j < url_array.length; j++) {
            out_url += "/" + url_array[j];
        }
        if (url_array[url_array.length-1].indexOf(".")==-1) {
            out_url += "/";
        }
        if (url_reg.test(host)) {
            more_text.html('外网地址为：<a target="_blank" href="' + out_url + '">' + out_url + '</a><br><small>(若无法访问请检查地址或<a href="http://congm.in">联系作者Cong Min</a>)</small>');
            return out_url;
        } else {
            more_text.html('输入的内网地址，格式有误！<br>请检查后重新输入。(注: http://前缀已补全)');
            return 0;
        }
    };
    //输入框确认点击
    enter.on("click", function () {
        more.show();
        var main_input_val = main_input.val();
        var url = turl(main_input_val);
        if (url) {
            window.open(url);
        }
    });
    //分享按钮
    var sharebtn =  $(".bdsharebuttonbox");
    $("#share").on("mouseover", function () {
        sharebtn.fadeIn();
    });
    $(".shareBox").on("mouseleave", function () {
        sharebtn.fadeOut();
    });
    //顶部悬浮提醒框
    var warn = $("#warn"), warn_text = $("#warn-text");
    var s = warn.get(0), si = warn_text.get(0);
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
            var t = {
                showTime: 2500,
                moveTime: 4000,
                totalTime: 15000
            };
            $.each(text, function (i, e) {
                setTimeout(function () {
                    s.scrollLeft = 0;
                    warn_text.html(e);
                    warn.animate({"top": "18px"}, "slow");
                }, t.totalTime * i + t.showTime);
                setTimeout(function () {
                    mar();
                }, t.totalTime * i + t.moveTime);
                setTimeout(function () {
                    warnBox.up();
                }, t.totalTime * i + t.totalTime);

            });
        }
    };
    //底部信息切换
    setTimeout(show_about, 10000);
    function show_about() {
        $(".about#tome").fadeToggle();
        $(".about#toblues").fadeToggle();
        setTimeout(show_about, 10000);
    }
    //console.log();
    (function consoleSomething() {
        if (/webkit/.test(navigator.userAgent.toLowerCase())) {
            console.log('%c ', 'line-height:150px;background-image:url("https://congm.in/index/img/congminBlack.png");background-repeat:no-repeat;background-size:auto 150px;padding:75px 265px;');
            console.log('%c @ Cong Min - 闵聪      https://congm.in', 'padding-left:32px;line-height:32px;font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei","Hiragino Sans GB","Hiragino Sans GB W3",sans-serif;color:#666;font-size:14px;');
            console.log('%c 温馨提示：为了保证内网的安全，以及方便大家能够长期的使用内网外入，请文明和谐的使用，不要调皮，切记切记｡◕‿◕｡', 'color:#333;font-size:16px;')
        }
    })();
});
//空间分享
(function () {
    var p = {
        url: location.href,
        showcount: '1', /*是否显示分享总数,显示：'1'，不显示：'0' */
        desc: '一站解决外网访问教务在线等内网所有网页！https://cqupt.congm.in', /*默认分享理由(可选)*/
        summary: '戳进来，一站解决外网访问教务在线等内网所有网页!', /*分享摘要(可选)*/
        title: '重庆邮电大学 - 内网外入', /*分享标题(可选)*/
        site: 'cqupt.congm.in', /*分享来源 如：腾讯网(可选)*/
        pics: 'https://cqupt.congm.in/img/cqupt.png' /*分享图片的路径(可选)*/
    };
    var s = [];
    for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
    }
    $(".share_qzone").attr("href", "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&'));
})();