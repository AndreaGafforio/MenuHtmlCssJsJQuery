let toggleNavStatus = false;

let toogleNav = function(){
	
	let getSideBar = document.querySelector(".nav-sidebar");
	let getSideBarUl = document.querySelector(".nav-sidebar ul");
	let getSideBarTitle = document.querySelector(".nav-sidebar span");
	let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");
	
	if(toggleNavStatus === false){ //open the hamburger menu
		
		getSideBarUl.style.visibility = "visible"; //modify the CSS
		getSideBar.style.width = "272px"; //modify the CSS
		getSideBarTitle.style.opacity = "0.5"; //modify the CSS
		
		
		//look array
		let arrayLength =  getSideBarLinks.length;
		for(let i = 0; i < arrayLength; i++){
			
			getSideBarLinks[i].style.opacity = "1";
		} //end for loop
         	
	    toggleNavStatus = true;
	
	} else if(toggleNavStatus === true){// close the Hamburge menu
		
		getSideBar.style.width = "50px";
		getSideBarTitle.style.opacity = "0";
		
		
		//look array
		let arrayLength =  getSideBarLinks.length;
		for(let i = 0; i < arrayLength; i++){
			
			getSideBarLinks[i].style.opacity = "0";
		}//end else if
		
		getSideBarUl.style.visibility = "hidden";
		
		 toggleNavStatus = false;
	}
		
	
}

