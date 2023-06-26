//plan selector start

const planToggle = document.querySelector('.toggle-outer');
const plansContainer = document.querySelector('.plansContainer');

planToggle.addEventListener('click', () => {
    let currentPlan = planToggle.getAttribute('plan-selected');
    if (currentPlan == 'monthly') {
        planToggle.setAttribute('plan-selected', 'yearly');
        plansContainer.setAttribute('plan-selected', 'yearly');
    }
    else if (currentPlan == 'yearly') {
        planToggle.setAttribute('plan-selected', 'monthly');
        plansContainer.setAttribute('plan-selected', 'monthly');
    }
});

//plan selector end


const FAquestions = document.querySelectorAll('.FAtoggle');

FAquestions.forEach(FAquestion => {
    FAquestion.addEventListener('click', () => {
        FAquestion.classList.toggle('active');
        console.log('Open,close');
    });
});


const navList = document.querySelector('nav');
const navToggler = document.querySelector('.mobile-nav-toggler');

navToggler.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible')
    if(visibility === "false"){
        navList.setAttribute('data-visible',"true")
        navToggler.setAttribute('area-expanded',"true")
    }
    else if(visibility === "true"){
        navList.setAttribute('data-visible',"false")
        navToggler.setAttribute('area-expanded',"false")
    }
});