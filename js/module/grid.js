
const grid = () =>{

		const firstGrid = document.querySelector(".m-1");

		const itemGrid = document.querySelectorAll(".game-grid-item");

		if(itemGrid.length > 0 ){
			
			itemGrid.forEach(item=>{
				item.style.height = firstGrid.offsetWidth+"px";
				
			})
		}

		
}

export default grid;