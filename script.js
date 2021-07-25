var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
	settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");

	if(Localstorage.getItem("theme") == "light"){
		LocalStorage.setItem("theme", "dark");
	}
	else{
		LocalStorage.setItem("theme", "light");
	}
}

if(Localstorage.getItem("theme") == "light"){
	darkBtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
}
else if(Localstorage.getItem("theme") == "dark"){
	darkBtn.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");
}
else{
	LocalStorage.setItem("theme", "light");
}