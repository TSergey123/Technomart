let lostModal = document.getElementById("get_lost_modal");

let lostBtn = document.getElementById("get_lost_btn");

let close = document.getElementsByClassName("closeModal")[0];

lostBtn.onclick = function () {
	lostModal.style.display = "block";
};

close.onclick = function () {
	lostModal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == lostModal) {
		lostModal.style.display = "none";
	}
};

let name = document.getElementById("name");
let area = document.getElementById("area");
let submit = document.getElementById("lost_submit");

let email = document.getElementById("mail");
let showModal = document.getElementById("show_modal");
let form = document.getElementById("form");

let field = form.querySelectorAll(".field");

// submit.onclick = function () {
// 	// if (document.querySelectorAll(".field").values.length == "") {
// 		if (document.getElementById("name").nodeValue.length){
// 		showModal.classList.add("wibro");
// 		showModal.classList.remove;
// 		// showModal.classList.remove('wibro');
// 	}
// };

submit.onclick = function () {
	if (document.querySelectorAll(".field").values.length == "") {
		showModal.classList.add("wibro");
		showModal.classList.remove;
		// showModal.classList.remove('wibro');
	}
};

// submit.onclick = function () {
// 	if (document.getElementById("name").value.length == "") {
// 		showModal.classList.add("wibro");
// 		showModal.classList.remove("wibro");
// 	} else if (document.getElementById("mail").value.length == "") {
// 		alert("full");
// 		showModal.style = "animation: 0.2s error ease-out;";
// 	}
// };
