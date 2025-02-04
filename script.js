var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});
swiper.on('slideChange', function () {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink")

});
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

//  Auto typing

const professions = ["Software Engineer", "MERN Stack Developer", "Java Developer"];
let index = 0;
let professionElement = document.getElementById("profession");
let typingSpeed = 150;  // typing speed in ms
let eraseSpeed = 100;   // erasing speed in ms
let pauseTime = 2000;   // time to wait before changing text

function typeEffect() {
    let text = professions[index];
    let i = 0;

    // Type the profession
    function type() {
        if (i < text.length) {
            professionElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseTime); // Wait before erasing
        }
    }

    // Erase the text
    function erase() {
        let currentText = professionElement.innerHTML;
        professionElement.innerHTML = currentText.substring(0, currentText.length - 1);

        if (currentText.length > 0) {
            setTimeout(erase, eraseSpeed);
        } else {
            index = (index + 1) % professions.length; // Change to next profession
            typeEffect(); // Start typing next profession
        }
    }

    type(); // Start typing effect
}

// Start the typing effect
typeEffect();


// Flip effect
// List of job roles 
const jobRoles = ["Software Engineer", "MERN Stack Developer", "Java Developer"];
let currentIndex = 0;

// Function to update the job title
function updateJobTitle() {
    const jobTitleElement = document.getElementById("flip-container");
    const flipWrapper = jobTitleElement.querySelector('.flip-wrapper');
    const frontFace = jobTitleElement.querySelector('.front-face');
    const backFace = jobTitleElement.querySelector('.back-face');

    // Set both front and back text to the next job title
    frontFace.innerHTML = jobRoles[currentIndex];
    currentIndex = (currentIndex + 1) % jobRoles.length;
    backFace.innerHTML = jobRoles[currentIndex];

    // Trigger the flip animation
    flipWrapper.style.animation = "none"; // Reset the animation
    flipWrapper.offsetHeight; // Trigger reflow
    flipWrapper.style.animation = "flipEffect 5s infinite"; // Restart the animation
}

// Create the flip structure
function createFlipStructure() {
    const jobTitleElement = document.getElementById("flip-container");
    jobTitleElement.innerHTML = `
        <div class="flip-wrapper">
            <span class="front-face">${jobRoles[0]}</span>
        </div>
    `;

    // Update the job title every 2 seconds
    setInterval(updateJobTitle, 2000);
}

// Initialize the flip effect
createFlipStructure();


function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open-sidebar");
}
