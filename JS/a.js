document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3; // adjust according to your design
    const cardCount = totalCards / 2; // original number of cards

    let currentIndex = 0;
    let cardWidth;
    let autoScrollInterval;

    function updateDimensions() {
        const card = cards[0];
        const style = window.getComputedStyle(card);
        const gap = parseInt(style.marginRight) || 40;
        cardWidth = card.offsetWidth + gap;
    }

    function moveTo(index) {
        currentIndex = index;
        track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function nextSlide() {
        currentIndex++;
        moveTo(currentIndex);

        // Seamless loop
        if (currentIndex >= cardCount) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0px)`;
                // Force reflow
                track.offsetHeight;
                track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
            }, 800);
        }
    }

    function prevSlide() {
        currentIndex--;
        moveTo(currentIndex);

        if (currentIndex < 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = cardCount - 1;
                track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                track.offsetHeight;
                track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
            }, 800);
        }
    }

    // Auto scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, 3500); // change every 5 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Initial setup
    updateDimensions();
    moveTo(0);
    startAutoScroll();

    // Controls
    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        nextSlide();
        setTimeout(startAutoScroll, 8000); // restart after manual interaction
    });

    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        prevSlide();
        setTimeout(startAutoScroll, 8000);
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

    // Responsive handling
    window.addEventListener('resize', () => {
        updateDimensions();
        moveTo(currentIndex);
    });
});



const titles=[
"Sensors & Process Dynamics",
"Process Modelling",
"Controller Selection & Tuning",
"PLC Automation for Storage & Transport",
"IoT System Design",
"Automation & Control Integration"
];

const details=[
"Study of industrial sensors, calibration, noise, and dynamic response.",
"Process modeling using transfer functions and simulation tools.",
"PID controller tuning with focus on stability and performance.",
"PLC logic for automated storage and transportation systems.",
"IoT architectures for real-time monitoring and dashboards.",
"Complete integration of sensors, PLCs, controllers, and IoT."
];

function openModal(i){
    stopAutoScroll();
  mTitle.innerText=titles[i];
  mDesc.innerText=details[i];
  modal.classList.add("active");  
}

function closeModal(){
    startAutoScroll();
  modal.classList.remove("active");
}

const cards=document.querySelectorAll(".card");
window.addEventListener("scroll",()=>{
  cards.forEach(c=>{
    if(c.getBoundingClientRect().top<window.innerHeight-120)
      c.classList.add("show");
  });
});
