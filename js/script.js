// scroll da ancoragem de outros dispositivos
document.querySelectorAll('.header-menu a[href^="#"]').forEach(function(anchor) {
	anchor.addEventListener('click', function(e) {
			e.preventDefault();
			var id = this.getAttribute('href');
			var target = document.querySelector(id);
			if (target) {
					var targetOffset = target.offsetTop;
					window.scrollTo({
							top: targetOffset - 58,
							behavior: 'smooth'
					});
			}
	});
});

// scroll da ancoragem mobile
document.querySelectorAll('.menu-mobile a[href^="#"]').forEach(function(anchor) {
	anchor.addEventListener('click', function(e) {
			e.preventDefault();
			var id = this.getAttribute('href');
			var target = document.querySelector(id);
			if (target) {
					var targetOffset = target.offsetTop;
					window.scrollTo({
							top: targetOffset - 58,
							behavior: 'smooth'
					});
			}
	});
});

const toggleButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-mobile');
const items = document.querySelectorAll('.item-menu a');

// mostra menu mobile ao clicar no botão
toggleButton.addEventListener('click', () => {
	items.forEach((e) => e.classList.remove("ativo"));
	setTimeout(() => {
    toggleButton.classList.toggle("down");
    menu.style.display = "block";
  }, 200);
});

// Esconde o menu ao clicar em um item do menu mobile
items.forEach(item => {
  item.addEventListener('click', (e) => {
		e.target.classList.add("ativo");
		setTimeout(() => {
			toggleButton.classList.remove("down");
			menu.style.display = "none"; // Oculta o menu
		}, 200); // Tempo em milissegundos para visualizar o estilo
  });
});

// Fecha o menu quando usuário clicar fora dele
window.onclick = function(e) {
	if(!e.target.matches('.btn-menu')) {
		toggleButton.classList.remove("down");
			menu.style.display = "none";
	}
}