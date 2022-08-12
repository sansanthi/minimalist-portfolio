import data from './data.json'assert { type: 'json' };
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    console.log(data);
    const visibility = nav.getAttribute('data-visible');

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
    // console.log(visibility)
})