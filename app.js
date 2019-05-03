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
         document.getElementById('entireContent').style.marginRight = '250px';
     }
        
function closeSlideMenu(){
         document.getElementById('menuAni').style.width = '0';
         document.getElementById('entireContent').style.marginRight = '0';
     }        




