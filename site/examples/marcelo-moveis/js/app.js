/**
 * Marcelo Móveis - Core Logic
 * Implementa animações de scroll avançadas usando Intersection Observer.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Marcelo Móveis - Core Initialized 🚀");

  // 1. Intersection Observer Animation Setup
  // Configuramos um observer que detecta quando um elemento passa a ser "visível" na janela de visualização do usuário.
  
  const observerOptions = {
    root: null,          // viewport global
    rootMargin: '0px',   // sem margem virtual
    threshold: 0.15      // 15% do elemento precisa estar vísivel para disparar
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento estiver "entrando" em tela
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Uma vez animado, paramos de monitorá-lo para otimização de performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 2. Buscando todos os elementos que devem ser animados
  const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .reveal-right, .stagger-children');
  
  // E conectando eles ao observador
  animatedElements.forEach(el => scrollObserver.observe(el));

  // 3. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close all other items (Optional: for a true accordion feel)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question .material-symbols-rounded');
        if (otherBtn) otherBtn.textContent = 'expand_more';
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
        const btn = question.querySelector('.material-symbols-rounded');
        if (btn) btn.textContent = 'expand_less';
      }
    });
  });
});
