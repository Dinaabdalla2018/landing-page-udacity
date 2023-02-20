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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var valueMin = -400
var valueMax = 150

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

u_list    = document.getElementById("navbar__list")
l_section = document.querySelectorAll('section')




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
// build ul dynamic with id of section.
function build_nav(){
for(var i=0 ; i< l_section.length ; i++){
    // create item to add list
    var li = document.createElement("li");
    li.innerHTML = l_section[i].id;
    u_list.appendChild(li);
}
}
 

// Add class 'active' to section when near top of viewport
function makeActive(){
window.onscroll = function() {
 l_section.forEach(element => {
        var position = element.getBoundingClientRect();
        if(position.top >= valueMin && position.top <= valueMax)
        element.classList.add("your-active-class");
        else
        element.classList.remove("your-active-class");  
    })}
    
}

/**
 * scollSection 
 * when click any item in navbar scroll section
 * 
*/
function scollSection(){
    list_elem.forEach(li => {
        li.addEventListener("click",function(e){
            e.preventDefault();
         document.getElementById(e.target.innerHTML).scrollIntoView({ behavior: 'smooth' }); // e.target.innerHTML == section.id
        })
        
    });
}

// Build menu
build_nav()
// Set sections as active
makeActive();
// Scroll to anchor ID using scrollIntoView event
list_elem = document.querySelectorAll("ul li");
// Scroll to section on link click
scollSection()
