document.addEventListener('DOMContentLoaded', function () {
    const leftMenuTrigger = document.querySelector('.left-menu-trigger');
    const leftMenu = document.querySelector('.left-menu');
  
    leftMenuTrigger.addEventListener('click', () => {
      leftMenu.classList.toggle('active');
    });
  
    const notificationCount = 3;
    const notificationCountElement = document.querySelector('.notification-count');
    notificationCountElement.textContent = notificationCount.toString();
  });
  
  