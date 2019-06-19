import initMask from './parts/mask';
import initMenu from './parts/initMenu';
import initPopup from './parts/initPopup';
import navLinks from './parts/navLinks';
import initCarousel from './parts/initCarousel';
import initSelector from './parts/initSelector';
import initMap from './parts/initMap';
import initToggler from './parts/initToggler';
import initStarSelector from './parts/initStarSelector';

$(()=>{
	initPopup();
    initMenu();
    initMask();
    navLinks();
    initCarousel();
    initSelector();
    initMap();
    initToggler();
    $('.js-scroll-top').on('click',function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
    initStarSelector();
});
