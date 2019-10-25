document.getElementById('title').style.height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("nav").style.height = "10%";
  } else {
    document.getElementById("nav").style.height = "0";
  }
}
function menu() {
	if (screen.width < 500) {
		document.getElementById('menu').style.width = "80%";	
	} else {
		document.getElementById('menu').style.width = "30%";
	}	
}
function close_menu() {
	document.getElementById('menu').style.width = "0";
}
var y = 0;
function a() {
	if (y == 0) {
		document.getElementById('active').src = "avatar3.jpg";
		document.getElementById('un_active1').src = "avatar2.jpg";
		document.getElementById('un_active2').src = "avatar.jpg";
		document.getElementById('p3').style.height = "300px";
		document.getElementById('p4').style.height = "0";
		document.getElementById('p5').style.height = "0";
		y = 1;
	}
	else if (y == 1) {
		document.getElementById('active').src = "avatar.jpg";
		document.getElementById('un_active1').src = "avatar3.jpg";
		document.getElementById('un_active2').src = "avatar2.jpg";
		document.getElementById('p5').style.height = "300px";
		document.getElementById('p4').style.height = "0";
		document.getElementById('p3').style.height = "0";
		y = 2;
	}
	else if (y == 2) {
		document.getElementById('active').src = "avatar2.jpg";
		document.getElementById('un_active1').src = "avatar.jpg";
		document.getElementById('un_active2').src = "avatar3.jpg";
		document.getElementById('p4').style.height = "300px";
		document.getElementById('p3').style.height = "0";
		document.getElementById('p5').style.height = "0";
		y = 0;
	}
}
function b() {
	if (y == 0) {
		document.getElementById('active').src = "avatar.jpg";
		document.getElementById('un_active1').src = "avatar3.jpg";
		document.getElementById('un_active2').src = "avatar2.jpg";
		document.getElementById('p5').style.height = "300px";
		document.getElementById('p4').style.height = "0";
		document.getElementById('p3').style.height = "0";
		y = 1;
	}
	else if (y == 1) {
		document.getElementById('active').src = "avatar3.jpg";
		document.getElementById('un_active1').src = "avatar2.jpg";
		document.getElementById('un_active2').src = "avatar.jpg";
		document.getElementById('p3').style.height = "300px";
		document.getElementById('p4').style.height = "0";
		document.getElementById('p5').style.height = "0";
		y = 2;
	}
	else if (y == 2) {
		document.getElementById('active').src = "avatar2.jpg";
		document.getElementById('un_active1').src = "avatar.jpg";
		document.getElementById('un_active2').src = "avatar3.jpg";
		document.getElementById('p4').style.height = "300px";
		document.getElementById('p3').style.height = "0";
		document.getElementById('p5').style.height = "0";
		y = 0;
	}
}
var q = 0;
var w = 0;
var e = 0;
function b1() {
	if (q == 0) {
		document.getElementById('plus1').style.display = "none";
		document.getElementById('minus1').style.display = "block";
		document.getElementById('contect1').style.height = "50px";
		q = 1;
	} else if (q == 1) {
		document.getElementById('plus1').style.display = "block";
		document.getElementById('minus1').style.display = "none";
		document.getElementById('contect1').style.height = "0";
		q = 0;
	}
}
function b2() {
	if (w == 0) {
		document.getElementById('plus2').style.display = "none";
		document.getElementById('minus2').style.display = "block";
		document.getElementById('contect2').style.height = "70px";
		w = 1;
	} else if (w == 1) {
		document.getElementById('plus2').style.display = "block";
		document.getElementById('minus2').style.display = "none";
		document.getElementById('contect2').style.height = "0";
		w = 0;
	}
}
function b3() {
	if (e == 0) {
		document.getElementById('plus3').style.display = "none";
		document.getElementById('minus3').style.display = "block";
		document.getElementById('contect3').style.height = "70px";
		e = 1;
	} else if (e == 1) {
		document.getElementById('plus3').style.display = "block";
		document.getElementById('minus3').style.display = "none";
		document.getElementById('contect3').style.height = "0";
		e = 0;
	}
}
function x() {
	document.getElementById('d1').style.height = "300px";
	document.getElementById('d4').style.backgroundColor = "#3399ff";
	document.getElementById('d5').style.backgroundColor = "red";
	document.getElementById('d6').style.backgroundColor = "#00ccff";
}
function z() {
	document.getElementById('d1').style.height = "60px";
	document.getElementById('d4').style.backgroundColor = "rgb(0,0,0,0)";
	document.getElementById('d5').style.backgroundColor = "rgb(0,0,0,0)";
	document.getElementById('d6').style.backgroundColor = "rgb(0,0,0,0)";
}