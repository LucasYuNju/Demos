// 这里只是最简单的实现，完整的接口，应该包含显示时间，用于关闭的函数，以及被关闭时的回调函数，以及窗口宽高等
window.createModel = function({
  message,
  parentSelector = 'body',
}) {
  const parent = document.querySelector(parentSelector);
  if (!parent)
    return;
  const template = `
    <div class="modal-content">
      <div class="message">${message}</div>
      <div class="buttons">
        <button class="close-button">关闭</button>
      </div>
    </div>
  `;
  // 用jQuery会更简单一些
  const modal = document.createElement('div');
  modal.classList.add('modal')
  // modal.innerHTML = template.replace('{message}', message);
  modal.innerHTML = template;
  parent.appendChild(modal);

  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target === modal) {
      parent.removeChild(modal);
    }
  });
  document.querySelector('.modal .close-button').addEventListener('click', (e) => {
    parent.removeChild(modal);
  });
}
