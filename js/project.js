/* ===================================
   项目卡片点击效果
   使用方法：复制到 source/js/projects.js
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
  // 项目卡片点击效果
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('.btn').href;
      if (link) {
        window.location.href = link;
      }
    });
  });
  
  // 添加鼠标悬停音效（可选）
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // 可以在这里添加音效
      console.log('Hover effect');
    });
  });
});
