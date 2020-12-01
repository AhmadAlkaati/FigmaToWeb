let openIcon = document.getElementById('search-icon');
let closeIcon = document.getElementById('close-icon');
let searchBar= document.getElementById('search-bar');


openIcon.addEventListener('click' , openSearchBar);

function openSearchBar(){
closeIcon.style.opacity = '1';    
closeIcon.style.zIndex = '2';    
openIcon.style.opacity = '0';
searchBar.style.height = '62px'; 
//searchBar.style.opacity = '1';
}

closeIcon.addEventListener('click' , closeSearchBar);

function closeSearchBar(){
    closeIcon.style.opacity = '0';   
    closeIcon.style.zIndex = '0';    
    openIcon.style.opacity = '1'; 
    searchBar.style.height = '0px'; 
}