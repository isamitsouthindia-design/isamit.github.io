
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
  mTitle.innerText=titles[i];
  mDesc.innerText=details[i];
  modal.classList.add("active");
}
function closeModal(){
  modal.classList.remove("active");
}

const cards=document.querySelectorAll(".card");
window.addEventListener("scroll",()=>{
  cards.forEach(c=>{
    if(c.getBoundingClientRect().top<window.innerHeight-120)
      c.classList.add("show");
  });
});