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
	document.getElementById(`info${n-i}`).setAttribute('class','disnone');
	document.getElementById(`info${n}`).setAttribute('class','info');
	if (n > 41){
		n = 1;
	}	
	if (n < 1){
		n = 41;
	}
	document.getElementById('photo').src = `img/photos/Фото${n}.jpeg`;	
	document.getElementById('count').innerHTML =`${n}`;
}

