var chevron_description = document.getElementsByClassName("list_clic");
var listes = document.getElementsByClassName("liste");
console.log(listes);
console.log(chevron_description);
chevron_description[0].addEventListener("click", function(){
	console.log("clic chevron 1");
	listes[0].classList.remove("hide");
});

chevron_description[1].addEventListener("click", function(){
	console.log("clic chevron 2");
	listes[1].classList.remove("hide");
});