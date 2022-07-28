


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



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".close__burger");

burgerClose.addEventListener("click", ()=>{
	burger.classList.remove("burger__open-active");
})



btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
});



btnBurger.addEventListener("click", ()=>{
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});



window.addEventListener("scroll", ()=>{
	if(scrollY>30){
		document.querySelector("header").classList.add("headerScroll");
	}else{
		document.querySelector("header").classList.remove("headerScroll");
	}
})