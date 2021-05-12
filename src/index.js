t1 = new TimelineMax({ paused:true });

t1.to(".component-header__nav-container", 1, {
  left: 0,
  ease: Expo.easeInOut
});

t1.staggerFrom(".component-header__menu-item", .8, {
  y: 100, opacity: 0, ease: Expo.easeInOut
}, "0.1", "-=0.4");

t1.staggerFrom(".component-header__socials span", .8, {
  y: 100, opacity: 0, ease: Expo.easeInOut
}, "0.4", "-=0.6");

t1.reverse();

const menuOpen = document.querySelector('.component-header__menu-open');
const menuClose = document.querySelector('.component-header__menu-close');

menuOpen.addEventListener('click', ()=> {
  t1.reversed(!t1.reversed());
})

menuClose.addEventListener('click', ()=> {
  t1.reversed(!t1.reversed());
})