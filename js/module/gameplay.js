const gamePlay = () =>{
	

	const firstGrid = document.querySelector(".m-1");

	const GAMEPLAY = document.querySelector(".gameplay");


	GAMEPLAY.style.width = firstGrid.offsetWidth *0.8+'px';

	GAMEPLAY.style.height = firstGrid.offsetHeight *0.8+'px';

	GAMEPLAY.style.margin = firstGrid.offsetHeight *0.1+'px';




	console.log(firstGrid.offsetWidth);


}

export default gamePlay;