


function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();



let listSection = document.querySelectorAll(".list__section-btn");
let openList = document.querySelector(".open__list")


listSection.forEach(item=>{
	item.addEventListener("click", ()=>{
		item.nextElementSibling.classList.toggle("active__list")
	})
})


let allItemList = document.querySelectorAll(".open__list-item");


allItemList.forEach(item=>{
	item.addEventListener("click", ()=>{
		item.parentElement.classList.remove("active__list")
	})
})