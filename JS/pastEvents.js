
const titles=[
"Automation and Control",
"Controller Selection and Tuning",
"Embedded Challenge",
"LabView Challenge",
"Process Modelling Challenge",
"Robotics challenge",
"Simulink challenge"
];

const details=[
"In this challenge, participants are required to configure a controller using PLC programming by selecting appropriate input ,output and functional blocks. The programmed control logic must then be simulated and analyzed based on the given problem statement to achieve the desired automated outcome.",
"In this challenge, a process model will be provided, and participants are required to identify the suitable controller and determine its optimal tuning parameters. The evaluation focuses on system stability, response time, and control performance based on the selected controller.",
`This challenge focuses on the design and implementation of embedded hardware-software solutions for real world applications. Participants will work with microcontrollers, sensors, and various modules to develop efficient, reliable, and optimized systems according to the given problem statement and conditions.`,
"The LabVIEW Challenge tests participants’ ability to develop graphical programming solutions for data acquisition, signal processing, and control applications. Participants will design intuitive virtual instruments, analyze real time data, and implement control logic using LabVIEW, emphasizing system visualization, accuracy, and efficiency",
"This challenge requires participants to derive the appropriate transfer function of the provided system by analyzing its behavior. The focus is on accurate mathematical modeling, system understanding, and right representation of process dynamics.",
"This challenge enables participants to design and control robotic systems capable of performing specified tasks. The teams will work on sensor integration, control strategies, and autonomous decision-making with algorithms to develop effective robotic solutions in accordance with the given problem statement.",
"The Simulink Challenge evaluates participants’ ability to model, simulate, and analyze the given systems using MATLAB Simulink. Teams will create system models, implement control logic, and optimize performance through simulation in the MATLAB software, demonstrating their understanding of system dynamics and control."
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