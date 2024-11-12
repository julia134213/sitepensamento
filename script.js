function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
      page.classList.remove('active');
    });
  
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
    activePage.classList.add('active');
  }
  
  // Exibe a primeira página ao carregar
  window.onload = () => showPage('page1');
  