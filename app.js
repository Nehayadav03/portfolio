// const sections=document.querySelectorAll(".section");
// const sectBtns=document.querySelectorAll(".controlls");
// const sectBtn=document.querySelectorAll(".control");
// const allSections=document.querySelector(".main-content");


// function PageTransitions(){
//     // button click active class
//     for(let i=0;i<sectBtn.length;i++){
//         sectBtn[i].addEventListener("click",function(){
//             let currentBtn=document.querySelectorAll(".active-btn");
//             currentBtn[0].className=currentBtn[0].className.replace("active-btn"," ");
//             this.className += "active-btn";

//         });
//     }
// }
//  PageTransitions();



const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    // Add click event to all control buttons
    sectBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove active-btn class from currently active button
            document.querySelector(".active-btn")?.classList.remove("active-btn");

            // Add active-btn to the clicked one
            this.classList.add("active-btn");
        });
    });


    // Sections Active
    allSections.addEventListener("click",(e)=>{
        const id=e.target.dataset.id;  
        if(id){
            // remove selected from the pther btns
              sectBtns.forEach((btn)=>{
               btn.classList.remove("active")
              })
              e.target.classList.add("active")

            //   hide other sections
            sections.forEach((section)=>{
                 section.classList.remove("active")
            })

            const element=document.getElementById(id);
            element.classList.add("active")
            
        }
    })
    // Toggle theme
    const themeBtn=document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })

}
PageTransitions();