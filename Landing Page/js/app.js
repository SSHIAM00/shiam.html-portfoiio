
// build the nav
const navMenu = document.querySelector('#navbar__list');
const navLinks = document.querySelectorAll('.menu__link');
const navSections = document.querySelectorAll('section');

function buildNav() {
    const fragment = document.createDocumentFragment();

    navSections.forEach((navSection) => {
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = navSection.getAttribute('data-nav');
        aTag.setAttribute('class', 'menu__link');



 // Scroll to section on link click
        aTag.addEventListener("click", () => {
            navSection.scrollIntoView({behavior: "smooth"});
            });
        liTag.appendChild(aTag);
        fragment.appendChild(liTag);
    });
    navMenu.appendChild(fragment);
};



function getVisibleSectionIndex() {
    let minor = window.innerHeight;
    visibleSectionIndex = -1;

    navSections.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
}

// Add class 'active' to section when near top of viewport
function setActiveSection(){
    visibleSectionIndex = getVisibleSectionIndex();

    if(visibleSectionIndex != -1){
        
        let navATagList = document.querySelectorAll('.menu__link');

        
        for (let i = 0; i < navSections.length; i++) {
           
            if (i == visibleSectionIndex){
                navSections[i].classList.add('your-active-class');
                navATagList[i].classList.add('your-active-class');
            }
            
            else{
                navSections[i].classList.remove('your-active-class');
                navATagList[i].classList.remove('your-active-class');
            }
        }; 
    };
}


// Set sections as active
buildNav();

document.addEventListener('scroll', setActiveSection);


// A function to determine the current section of the screen
function getCurrentSection() {
    let currentSection = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < (sectionTop + sectionHeight)) {
            currentSection = section;
        }
    });
    return currentSection;
}

// The correlation function corresponding to the current section and applying the effect to it
function highlightCurrentNavLink() {
    const currentSection = getCurrentSection();
    if (currentSection) {
        const currentSectionId = currentSection.getAttribute('id');
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('href').slice(1) === currentSectionId) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }
}

// Implement the effect function on scrolling
window.addEventListener('scroll', highlightCurrentNavLink);



 

