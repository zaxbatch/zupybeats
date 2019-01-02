function playSound(e) {
const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!sound) return;
sound.currentTime = 0; //rewind 

sound.play();
key.classList.add('playing');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip if not transform
	this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)