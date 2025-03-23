// 检测IE浏览器并跳转
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    
    if (msie > 0 || trident > 0) {
        window.location.href = '/unsupported.html';
        return true;
    }
    return false;
}

$(document).ready(function() {
    // 检测IE浏览器
    if (detectIE()) return;

    // 加载并插入 header.html
    $.get('template/header.html', function(data) {
        $('body').prepend(data);
        
        // 获取页面标题并更新导航栏中的 span 元素
        var pageTitle = document.title;
        document.title = '橙子113 - ' + pageTitle;
        $('#page-title').text(' - ' + pageTitle);
    });

    // 加载并插入 footer.html
    $.get('template/footer.html', function(data) {
        $('body').append(data); // 将 footer.html 添加到页面结尾
    });
});