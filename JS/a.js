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

        window.startAutoScroll = startAutoScroll;
window.stopAutoScroll = stopAutoScroll;

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
"Industrial Automation Laboratory",
"Process Control Laboratory",
"Flow Laboratory",
"Transducers Laboratory",
"Embedded Systems Laboratory",
"Control Systems Laboratory",
"Electronics Laboratory"
];

const details=[
"Introduces PLCs, SCADA, and automation networks for industrial environments. Students design ladder logic and implement automated control for manufacturing and process industries.",
"Covers monitoring and regulation of industrial processes like temperature, pressure, and level. Emphasis is placed on PID tuning, system response, and maintaining efficiency and safety.",
"Explores principles of fluid mechanics and flow measurement techniques. Students work with various flow meters to analyze characteristics, calibration, and performance under different conditions.",
"Studies sensors that convert physical quantities into electrical signals. Includes calibration, signal conditioning, and understanding performance characteristics such as sensitivity and hysteresis.",
"Centers on microcontrollers, real-time programming, and hardware interfacing. Learners develop compact, efficient systems integrating sensors, communication modules, and control logic.",
"Focuses on modeling and analyzing dynamic systems using feedback principles. Students design and tune controllers to achieve stability, accuracy, and optimal performance in real-time applications.",
"Provides hands-on experience with analog and digital circuit design. Students test components, analyze waveforms, and build functional electronic systems for practical applications."
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
