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
    window.location.href = 'https://corporate-event-planner.netlify.com/login';
});

