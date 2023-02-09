// ========== Navbar Started ========== //
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=> {
    navBar.classList.toggle('active');
})

const header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 100) {
        header.classList.add('header-solid');
    } else {
        header.classList.remove('header-solid');
    }
});

const link = document.querySelectorAll('.nav-link');

link.forEach(element => {
    element.addEventListener('click', function(){
        link.forEach(link=>link.classList.remove('active-purple'))

        this.classList.add('active-purple');
    });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', ()=> {
    const scrollY = window.pageYOffset;
    sections.forEach((current)=> {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.add('active-purple');
        } else {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('active-purple');
        }
    });
});
// ========== Navbar Ended ========== //

// ========== Resume Started ========== //
const education = document.querySelectorAll('.timeline-content');

// ========== Resume Ended ========== //

// ========== Fun Facts Started ========== //
const facts = document.querySelector('.facts');
const counters = document.querySelectorAll('.fact-number');

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 3100 && window.scrollY < 3120) {
        counters.forEach((counter) => {
            const updateCounter = ()=> {
                const target = counter.getAttribute('data-target');
            const c = +counter.innerText;
            
                const increment = target / 500;
                    
                if(c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        facts.classList.add('activated');

        if (facts.hasAttribute('.activated')) {
            window.scrollY == 0;
            counters.forEach((counter) => {
                const target = counter.getAttribute('data-target');
                counter.innerHtml = target;
            });
        };
    }
});

// ========== Fun Facts Ended ========== //

// ========== Portfolio Started ========== //
const filters = document.querySelectorAll('.filter-menu .list-filter li');

filters.forEach(filter => {
    filter.addEventListener('click', function() {
        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.portfolio-content .filtr-item:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.portfolio-content [data-filter='${selectedFilter}']`);
    
        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.portfolio-content [data-filter]');
        }

        itemsToHide.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show');
        });

        itemsToShow.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });

    });
});

const list = document.querySelectorAll('.list-filter li');

list.forEach(element => {
    element.addEventListener('click', function(){
        list.forEach(list=>list.classList.remove('active'))

        this.classList.add('active');
        
    });
});
// ========== Portfolio Ended ========== //