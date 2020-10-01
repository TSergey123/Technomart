let addBookmark = document.getElementById("bookmark_add");
// let addBookmark = document.querySelectorAll("#bookmark_add");
let valueBookmark = document.getElementById("bookmark_value");
			let j = 1;
			addBookmark.onclick = function(){
				valueBookmark.innerHTML = "Закладки: " + j++;
}
