

const resizeWindow = () =>{
	

	function  resizeWindowItem(){

	
	if(window.innerHeight > window.innerWidth){
		document.querySelector(".game-off").classList.add('active');
	}else{
		document.querySelector(".game-off").classList.remove('active');
	}
}




resizeWindowItem();


window.addEventListener("resize", ()=>{
	resizeWindowItem();
})




}

export default resizeWindow;