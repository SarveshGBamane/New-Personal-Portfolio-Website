let cvBtn = document.getElementById("cvBtn");


let internshipBtn1 = document.getElementById("internshipBtn1");
let internshipBtn2 = document.getElementById("internshipBtn2");
let internshipBtn3 = document.getElementById("internshipBtn3");
let internshipBtn4 = document.getElementById("internshipBtn4");




cvBtn.addEventListener("click", function(){
   alert("Download Succesfully")
   window.open('https://drive.google.com/file/d/1kvm5AVO4sz7t2ILJtNXT5FgjKJ0QQc3f/view?usp=sharing', '_blank');
})



internshipBtn1.addEventListener("click", function(){
   alert("Download Succesfully")
   window.open('https://drive.google.com/file/d/1vng_VABT-IgJ5jEZR6xSYSpRVTCpTVP3/view?usp=drive_link', '_blank');
})

internshipBtn2.addEventListener("click", function(){
   alert("Download Succesfully")
   window.open('https://drive.google.com/file/d/1IeASFbex_YBaHMa1dOBywqIFkKIrQqri/view?usp=drive_link', '_blank');
})

internshipBtn3.addEventListener("click", function(){
   alert("Download Succesfully")
   window.open('https://drive.google.com/file/d/11kkXhxQGr9CfDubRGpOPfF9clTEpiteF/view?usp=drive_link', '_blank');
})

internshipBtn4.addEventListener("click", function(){
   alert("Download Succesfully")
   window.open('https://drive.google.com/file/d/1WlU4ustA_5PBrwPjZ_NqpLs4Qc_2bg-s/view?usp=sharing', '_blank');
})



  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });