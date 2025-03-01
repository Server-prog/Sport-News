document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
  
    menuIcon.addEventListener('click', () => {
      const isVisible = mobileNav.style.display === 'flex';
      mobileNav.style.display = isVisible ? 'none' : 'flex';
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        mobileNav.style.display = 'none';
      }
    });
  });
  