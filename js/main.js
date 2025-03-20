$(document).ready(function() {
    // 加载并插入 header.html
    $.get('template/header.html', function(data) {
        $('body').prepend(data);
        
        // 获取页面标题并更新导航栏中的 span 元素
        var pageTitle = document.title;
        document.title = '橙子113 - ' + pageTitle; // 修改页面标题
        $('#page-title').text(' - ' + pageTitle);
    });

    // 加载并插入 footer.html
    $.get('template/footer.html', function(data) {
        $('body').append(data); // 将 footer.html 添加到页面结尾
    });
});