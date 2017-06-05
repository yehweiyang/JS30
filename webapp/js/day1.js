
window.addEventListener('keydown',function(e){

	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
	const key = document.querySelector(`div[data-key='${e.keyCode}']`);
	if(!audio)return;
	audio.play();
	audio.currentTime=0;
	key.classList.add("button");


const keys = document.querySelectorAll(".key");

//console.log(keys);

keys.forEach(function(element,index){

setTimeout(function(){
element.classList.remove('button')
 }, 400);

	
})

keys.forEach(key=>addEventListener('transitionend',function(e){
console.log(e)
}))


});

// window.addEventListener("animationend", function(e){
// 	console.log(e)
// 	console.log('test');
// });