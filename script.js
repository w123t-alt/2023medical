document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM已加载完成');
  
  const postList = document.getElementById('postList');
  console.log('postList元素:', postList);
  
  let currentPostId = 45; // 与示例起始ID保持一致

  // 生成并添加 posts 的函数
  function addPosts(count = 5) {
    console.log('开始添加', count, '个post');
    for (let i = 0; i < count; i++) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = `Post #${currentPostId++}`;
      console.log('创建post:', post.textContent);
      postList.appendChild(post);
    }
  }

  // 初始加载一批 posts
  addPosts(5);

  // 监听滚动事件，实现无限滚动
  window.addEventListener('scroll', () => {
    // 计算当前滚动位置与底部的距离
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    // 当滚动接近底部时，加载新内容
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      console.log('滚动到底部，加载更多内容');
      addPosts(5);
    }
  });
});