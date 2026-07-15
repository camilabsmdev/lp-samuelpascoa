/**
 * SAMUEL PÁSCOA ADVOCACIA - LANDING PAGE ACTIONS
 * Accordion interactive behaviors & event tracking support.
 */

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initSmoothScroll();
});

/**
 * FAQ Accordion Controller
 */
function initAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.closest('.faq-item');
            
            // Check if item is already active
            const isActive = currentItem.classList.contains('active');
            
            // Close all other active items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If the clicked item was not active, open it
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
}

/**
 * Smooth Scrolling for Anchor Links (just in case)
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return; // ignore simple dummy links
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.main-header').offsetHeight || 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
