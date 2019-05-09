function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;
    
    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',scrollAppear);








function openSlideMenu(){
         //How far the menu should extend
         document.getElementById('menuAni').style.width = '200px';
         document.getElementById('entireContent').style.marginLeft = '90px';
     }
        
function closeSlideMenu(){
         document.getElementById('menuAni').style.width = '0';
         document.getElementById('entireContent').style.marginLeft = '0';
     }        







//Preloader
$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
 
});
$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
});



//Makes it so that when you click somewhere else the navigation bar closes

 $(document).click(function(e) {
if ( $(e.target).closest('#entireContent').length === 0 ) {
    
$('#entireContent').click(closeSlideMenu());
    
}
});





