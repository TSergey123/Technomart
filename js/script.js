var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

let add = document.getElementById("basket_add");
		let value = document.getElementById("basket_value");
			let i = 11;
			add.onclick = function(){
				value.innerHTML = i++;
			}


btn.onclick = function () {
	modal.style.display = "block";
};

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};


function minRangeOut(val) {
    document.getElementById("min_price_input").value = val;
}

function maxRangeOut(val) {
    document.getElementById("max_price_input").value = val;
}   
