(function() {
  // 1. 定义视频路径 (对应你放在 source/video/ 下的文件)
  const videoPath = '/video/splash-video.mp4'; 

  // 2. 创建 HTML 结构 (加入了 video 标签)
  const splashHTML = `
    <div id="splash-screen">
      <!-- 背景视频层 -->
      <video id="splash-video" autoplay muted loop playsinline>
        <source src="${videoPath}" type="video/mp4">
      </video>
      
      <!-- 遮罩层 (让文字更清晰) -->
      <div class="splash-overlay"></div>

      <!-- 内容容器 -->
      <div class="splash-content">
        <!-- LOGO/头像 -->
        <div class="splash-logo">
          🦋
        </div>

        <!-- 博客标题 (这里加了一个 div 包裹，应用了 .splash-title-box 样式) -->
        <div class="splash-title-box">
            <h1 class="splash-title">欢迎来到我的世界！</h1>
        </div>

        <!-- 副标题/Slogan -->
        <p class="splash-subtitle">记录技术 · 分享热爱</p>

        <!-- 进入按钮 -->
        <button class="splash-enter-btn" onclick="hideSplash()">进入博客 →</button>

        <!-- 进度条 -->
        <div class="splash-progress">
          <div class="splash-progress-bar"></div>
        </div>

        <!-- 跳过提示 -->
        <p class="splash-skip-hint">3 秒后自动进入</p>
      </div>
    </div>
  `;

  // 3. 插入到 body 开头
  document.body.insertAdjacentHTML('afterbegin', splashHTML);

  // 4. 逻辑控制
  let splashTimer;

  function hideSplash() {
    const splash = document.getElementById('splash-screen');
    const video = document.getElementById('splash-video');
    
    if (splash && !splash.classList.contains('hidden')) {
      // 暂停视频
      if(video) video.pause();
      
      // 添加隐藏类
      splash.classList.add('hidden');

      // 完全移除
      setTimeout(() => {
        splash.style.display = 'none';
      }, 800);

      // 清除定时器
      if (splashTimer) {
        clearTimeout(splashTimer);
      }
    }
  }

  // 页面加载完成后启动
  window.addEventListener('load', () => {
    // 3 秒后自动进入
    splashTimer = setTimeout(() => {
      hideSplash();
    }, 3000);
  });

  // 按 ESC 跳过
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideSplash();
    }
  });

  // 暴露全局函数
  window.hideSplash = hideSplash;
})();