document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const msgElement = document.getElementById('form-msg');
    
    // Efecto 3D al mover el mouse en el contenedor de cristal (Glassmorphism)
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
