document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    const mainTitle = document.getElementById('main-title');
    const germanTexts = document.querySelectorAll('.german-text');
    const englishTexts = document.querySelectorAll('.english-text');
    
    let isGerman = true;
    
    translateBtn.addEventListener('click', function() {
        if (isGerman) {
            // Switch to English
            germanTexts.forEach(text => text.style.display = 'none');
            englishTexts.forEach(text => text.style.display = 'block');
            mainTitle.textContent = 'German Culture';
            translateBtn.textContent = 'Auf Deutsch übersetzen';
            
            // Update navigation
            document.querySelector('nav ul li:nth-child(1) a').textContent = 'Central Mosque';
            document.querySelector('nav ul li:nth-child(2) a').textContent = 'Food';
            document.querySelector('nav ul li:nth-child(3) a').textContent = 'Famous Places';
            
            // Update section titles
            document.querySelector('#mosque .section-title').textContent = '🕌 Cologne Central Mosque';
            document.querySelector('#food .section-title').textContent = '🥨 German Food';
            document.querySelector('#places .section-title').textContent = '🏔️ Famous Places in Germany';
            
        } else {
            // Switch to German
            germanTexts.forEach(text => text.style.display = 'block');
            englishTexts.forEach(text => text.style.display = 'none');
            mainTitle.textContent = 'Deutsche Kultur';
            translateBtn.textContent = 'Auf Englisch übersetzen';
            
            // Update navigation
            document.querySelector('nav ul li:nth-child(1) a').textContent = 'Zentralmoschee';
            document.querySelector('nav ul li:nth-child(2) a').textContent = 'Essen';
            document.querySelector('nav ul li:nth-child(3) a').textContent = 'Berühmte Orte';
            
            // Update section titles
            document.querySelector('#mosque .section-title').textContent = '🕌 Köln Zentralmoschee';
            document.querySelector('#food .section-title').textContent = '🥨 Deutsches Essen';
            document.querySelector('#places .section-title').textContent = '🏔️ Berühmte Orte in Deutschland';
        }
        
        isGerman = !isGerman;
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});