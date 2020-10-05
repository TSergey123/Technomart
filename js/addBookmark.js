// let addBookmark = document.getElementById("bookmark_add");
// // let addBookmark = document.querySelectorAll("#bookmark_add");
// let valueBookmark = document.getElementById("bookmark_value");
// 			let j = 1;
// 			addBookmark.onclick = function(){
// 				valueBookmark.innerHTML = "Закладки: " + j++;
// }

let btnBookmark = document.querySelectorAll("#bookmark_add");
let valueBookmark = document.getElementById("bookmark_value");
let bookmarksBlock = document.getElementById("bookmarksBlock");

let countBookmark = +/\d+/.exec(valueBookmark.textContent);
for (let i = 0; i < btnBookmark.length; i++) {
	btnBookmark[i].addEventListener("click", function (evt) {
		console.log(evt);
		countBookmark++;

		valueBookmark.textContent = "Закладки: " + countBookmark;
		bookmarksBlock.style.background = "#EE3643";
	});
}
