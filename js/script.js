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
