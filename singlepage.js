// 简单的单页切换功能
function showPage(pageId) {
    // 隐藏所有页面
    const allPages = document.querySelectorAll('div[id^="page"]');
    allPages.forEach(page => {
        page.style.display = 'none';
    });
    
    // 显示选中的页面
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// 页面加载完成后执行
window.onload = function() {
    // 为每个按钮添加点击事件
    const buttons = document.querySelectorAll('button[data-page]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // 默认显示第一个页面
    showPage('page1');
}