window.onload = function(){
	let preloader = document.getElementById('preloader');
	preloader.style.display = 'none';}
function next(){
	document.getElementById('album1').style.display = 'none';
	document.getElementById('next').style.display = 'none';
	document.getElementById('album2').style.display = 'block';
	document.getElementById('back').style.display = 'block';
}
function back(){
	document.getElementById('album2').style.display = 'none';
	document.getElementById('back').style.display = 'none';
	document.getElementById('album1').style.display = 'block';
	document.getElementById('next').style.display = 'block';
}
function AddPhoto(){
	document.getElementById('btAddPhoto').className ='active';
	document.getElementById('btMyPhoto').className = "noactive";
	document.getElementById('myPhoto').style.display = 'none';
	document.getElementById('addPhoto').style.display = 'block';
}
function MyPhoto(){
	document.getElementById('btAddPhoto').className ='noactive';
	document.getElementById('btMyPhoto').className = "active";
	document.getElementById('myPhoto').style.display = 'block';
	document.getElementById('addPhoto').style.display = 'none';
}

