const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebarMenu = document.getElementById('sidebar-menu');

hamburgerBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('active');
});
