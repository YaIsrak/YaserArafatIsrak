function myFunction(a){
    a.classList.toggle("change");
}
function btnFunction(x){
    x.classList.toggle("changed");
}
function openNav(){
    y = document.getElementById("side-nav");
    if(y.className == "side-nav"){
        y.className += " open";
    }else{
        y.className = "side-nav";
    }
}
/*For active*/
    var marker = document.querySelector('#marker');
    var item = document.querySelectorAll('#nav-bar-link a');
    
	function indicator(f){
		marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
	}
	item.forEach(link => {
		link.addEventListener('click', (f)=>{
			indicator(f.target);
		})
	})