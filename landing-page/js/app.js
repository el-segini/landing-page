/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
 * 
 * 
*/
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');
const frag = document.createDocumentFragment();
const navLinks = document.getElementsByTagName('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildMenu = (() =>{
    sections.forEach((section) => {
        //bulding the both elements list & anchor
        let navList = document.createElement('li');
        let navLink = document.createElement('a');
        //linking the anchor , adding the class , adding the text
        navLink.href = '#' + section.id;
        navLink.classList.add('menu__link');
        navLink.innerText = section.getAttribute('data-nav');
        //appending the navlink to the list then to the fragment
        navList.appendChild(navLink);
        frag.appendChild(navList);
        // adding the event listener of scrolling smoothly to the Link
        navLink.addEventListener('click', function scrollIntoView(e){
            e.preventDefault;
            window.scrollTo({
            behavior : "smooth",
            top: section.offsetTop,
          })
        })
    })
    //finally adding our fragment to the nav ul
    return nav.appendChild(frag);
})(); 


// Add class 'active' to section when near top of viewport 
const toggleActive = () =>{
     sections.forEach((section) => {
        let rect = section.getBoundingClientRect();
        if ((rect.top >= -100)&&(rect.top <= 300)){
            section.classList.add("your-active-class");
        } else {
          section.classList.remove("your-active-class");
        }
});
}


// Scroll to anchor ID using scrollTO event
// const scrollIntoView = () => {
//   window.scrollTo({
//       behavior: "smooth",
//     });
//     console.log('hi');
//   };
  


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active 
window.addEventListener('scroll' , (ev)=>{
    ev.preventDefault();
    toggleActive(); 
})





