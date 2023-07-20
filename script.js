let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
	navbar.classlist.toggle('active');
}
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
	searchForm.classlist.toggle('active');
}
let cartItem=document.querySelector('.cart-Items-container');
document.querySelector('#cart-btn').onclick=()=>{
	cartItem.classlist.toggle('active');
}
window.onscroll=()=>{
	navbar.classList.remove('active');
		searchForm.classList.remove('active');
	cartItem.classList.remove('active');

}