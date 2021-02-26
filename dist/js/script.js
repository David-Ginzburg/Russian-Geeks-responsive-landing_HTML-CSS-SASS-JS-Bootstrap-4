/* parallax */

let promoIphone = document.querySelector('.promo__wrapper');
let developmentPic = document.querySelector('.development__pic');
let servicestPics = document.querySelectorAll('.services-block__pic');
let stepsPics = document.querySelectorAll('.steps-item__pic');
let interactionPic = document.querySelector('.interaction__pic');
let aassignmentPics = document.querySelectorAll('.assignment-item__pic');

window.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight

    let target = `translate(-${x * 50}px, -${y * 50}px)`
    promoIphone.style.transform = target
    developmentPic.style.transform = target
    servicestPics.forEach(item => item.style.transform = target)
    stepsPics.forEach(item => item.style.transform = target)
    interactionPic.style.transform = target
    aassignmentPics.forEach(item => item.style.transform = target)
});

new WOW().init();