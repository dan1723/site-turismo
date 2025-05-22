// Seleciona todos os itens com submenu
document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const li = this.parentElement;
      const menu = document.getElementById('main-menu');

      // Fecha outros abertos
      menu.querySelectorAll('li.has-dropdown').forEach(item => {
        if (item !== li) {
          item.classList.remove('active');
        }
      });

      // Toggle submenu
      li.classList.toggle('active');
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', function (e) {
    const isClickInside = document.querySelector('.navbar').contains(e.target);
    if (!isClickInside) {
      document.querySelectorAll('.has-dropdown').forEach(item => {
        item.classList.remove('active');
      });
    }
  });

