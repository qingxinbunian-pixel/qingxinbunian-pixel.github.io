/* 小窝增强脚本：AOS 滚动动画 + pangu 中英文空格（兼容 pjax） */
(function () {
  // 初始化 AOS：给文章卡片和侧边栏卡片加滚动淡入
  function initAos() {
    if (typeof AOS === 'undefined') return;
    // 给需要动画的元素补 data-aos（主题本身不带）
    document.querySelectorAll('.recent-post-item, .card-widget').forEach(function (el) {
      if (!el.hasAttribute('data-aos')) el.setAttribute('data-aos', 'fade-up');
    });
    AOS.init({
      duration: 400,
      offset: 30,
      once: true,
      easing: 'ease-out'
    });
    AOS.refresh();
  }

  // pangu：文章正文中英文之间自动加空格
  function initPangu() {
    if (typeof pangu === 'undefined') return;
    var article = document.querySelector('#article-container');
    if (article) pangu.spacingElement(article);
  }

  function boot() {
    initAos();
    initPangu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // pjax 切换页面后重新初始化（Butterfly 会触发 pjax:complete）
  document.addEventListener('pjax:complete', boot);
})();
