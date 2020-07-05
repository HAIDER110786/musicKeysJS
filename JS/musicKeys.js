document.addEventListener('keyup',(e)=>{
    if(document.querySelector(`audio[data-key="${e.keyCode}"]`)){
        let animalAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        let animalDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        animalAudio.currentTime=0;
        animalAudio.play();
        animalDiv.classList.add('pressed');
        animalDiv.addEventListener('transitionend',(e)=>{
            e.target.classList.remove('pressed');
        })
    }
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('key')){
        console.log(e.target.getAttribute('data-key'));
        let animalDiv = e.target;
        let animalAudio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
        animalAudio.currentTime=0;
        animalAudio.play();
        animalDiv.classList.add('pressed');
        animalDiv.addEventListener('transitionend',(e)=>{
            e.target.classList.remove('pressed');
        })
    }
})