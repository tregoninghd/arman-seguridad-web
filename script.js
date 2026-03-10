document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const msgElement = document.getElementById('form-msg');
    
    // Configuración Menú responsivo y Sticky
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Cambiar color del navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menú de hamburguesa para móviles
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animar el botón (convertir de menú a 'X')
            const spans = menuBtn.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Cerrar menú móvil al seleccionar un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                menuBtn.click();
            }
        });
    });

    // Efecto 3D al mover el mouse en el Hero (Glassmorphism)
    const container = document.querySelector('.glass-container');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(0)`;
    });
    
    // Reiniciar posición cuando el mouse sale de la pantalla
    document.addEventListener('mouseleave', () => {
        container.style.transition = 'transform 0.5s ease';
        container.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;
        
        setTimeout(() => {
            container.style.transition = 'none';
        }, 500);
    });

    // Manejo del formulario de suscripción
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalBtnText = btn.innerHTML;
        
        // Estado de carga
        btn.innerHTML = '<span>Enviando...</span>';
        btn.style.opacity = '0.7';
        btn.disabled = true;
        
        // Simulando una llamada a una API o servidor
        setTimeout(() => {
            btn.innerHTML = originalBtnText;
            btn.style.opacity = '1';
            btn.disabled = false;
            
            form.reset();
            
            msgElement.textContent = '¡Listo! Te avisaremos muy pronto. ¡Qué chido que te unas!';
            msgElement.className = 'form-message success';
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                msgElement.style.opacity = '0';
            }, 5000);
        }, 1500);
    });
});
