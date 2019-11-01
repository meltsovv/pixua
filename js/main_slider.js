window.onload = function(){
	let preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
}
function showSlide(n) {

	document.getElementById("slider").style.display = "block";
	document.getElementById('first').style.filter = "blur(5px)";
	document.getElementById('photo').src = `img/photos/Фото${n}.jpeg`;
	document.getElementById('count').innerHTML =`${n}`;
	for (let i = 1 ; i <= 41; i++) {
		document.getElementById(`info${i}`).setAttribute('class','disnone');
	};
	document.getElementById(`info${n}`).setAttribute('class','info');

	

}

function plusSlides(i){
	var n = Number(document.getElementById('count').innerText);
	// document.getElementById(`info${n}`).style.display = "none";	
	n += i; 
	if (n > 41){
		n = 1;
		document.getElementById(`info${41}`).setAttribute('class','disnone');
	}	
	else if (n < 1){
		n = 41;
		document.getElementById(`info${1}`).setAttribute('class','disnone');
	}
	else{
		document.getElementById(`info${n-i}`).setAttribute('class','disnone');
	}
	document.getElementById(`info${n}`).setAttribute('class','info');
	
	document.getElementById('photo').src = `img/photos/Фото${n}.jpeg`;	
	document.getElementById('count').innerHTML =`${n}`;
}

