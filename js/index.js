let links = document.querySelectorAll('.card-content a');
  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank')
}

let overEvent = document.querySelectorAll('li a');
overEvent.forEach((items) => {
    items.addEventListener('mouseover', (event) => {
        event.target.style.color = '#ffeee2';
        setTimeout((items) => {
            event.target.style.color = '';
        }, 500);
    });
});


let cta = document.querySelector('.cta-button h3');
cta.addEventListener('click', function() {
    window.location.href = 'https://corporate-event-planner.netlify.com/';
});

let special = document.querySelector('.first-column .about-content');
window.addEventListener('load', (sp) => {
   special.style.border = '3px solid purple';
});

let social_media = {
    andre: 'https://github.com/',
    priyanka: 'https://github.com/'
}
let member1 = document.querySelector('.fa-github-square');
member1.addEventListener('click', () => {
     window.location.href = `${social_media.andre('AwDesign71')}`;
});

let convert = Array.from(member1);
console.log(convert);