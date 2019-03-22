var chevron_description = document.getElementsByClassName("list_clic");
var listes = document.getElementsByClassName("liste");
var click_liste1 = 0;
var click_liste2 = 0;


console.log(listes);
console.log(chevron_description);
chevron_description[0].addEventListener("click", function(){
	console.log("clic chevron 1");
	if(click_liste1 == 0 ){
		listes[0].classList.remove("hide");
		click_liste1 ++
	}else{
		listes[0].classList.add("hide");
		click_liste1 --
	}
});

chevron_description[1].addEventListener("click", function(){
	console.log("clic chevron 2");
	if(click_liste2 == 0 ){
		listes[1].classList.remove("hide");
		click_liste2 ++
	}else{
		listes[1].classList.add("hide");
		click_liste2 --
	}
});