(() => {


	var icons = document.querySelector('.image-wrapper');




	function logMyId() {
	console.log(this.id);

	}

	icons.addEventListener("click", logMyId);

	allthebadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyId));

	

	
})();