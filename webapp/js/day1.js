console.log(66666666666666666)

window.addEventListener('keydown',function(e){
	console.log(document.querySelector('.btn'));
    if(e.keyCode!=65||e.keyCode!=83||e.keyCode!=68||e.keyCode!=70)return
	console.log(e.keyCode);
})