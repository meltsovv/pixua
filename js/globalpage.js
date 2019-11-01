window.onload = function(){
	let preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length){
		slideIndex = 1
	}
	if (n < 1){
		slideIndex=slides.length
	}
	for (i=0; i < slides.length; i++){
		slides[i].style.display = "none";

	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= "active";

}























// var i=0
// while(i<3){
// 	alert(i);
// 	i+=1
// }
// var i=0;
// do{
// 	alert(i);
// 	i++
// }
// while(i<3);
// var i;
// for (i=0;i<3;i++){
// 	alert(i);
// }
// var arr = ["dzgr","dsfS","sdf"];
// alert(arr[0]);
// arr[2] = "jdsujjdjdf";
// arr[0] = "eeee";
// // alert(arr.length);
// alert(arr[0]);
// alert(arr)
// arr.pop();
// arr.push("kek");
// arr.shift();
// arr.unshift("lol")
// alert(arr)
// var names='Mihsa, Katya, Sasha, Petya'
// var arr = names.split(', ');
// for (var i=0;i<arr.length;i++){
// 	alert('Your messenger'+arr[i])
// }
// var arr = ['srgr', 'zsrg', 'sd'];
//  var str = arr.join(';');
//  alert(str);
//  alert(new Array(4).join('xa'));
// var arr = [1,2];
// var newArr = arr.concat(3,4);
// alert(newArr);








