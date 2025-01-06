const searchInput = document.getElementById("search-input");
const itemList = document.getElementById("item-list").getElementsByTagName("li");

searchInput.addEventListener("input", function(){

        const searchText = searchInput.value.toLocaleLowerCase();

        for(let i = 0; i < itemList.length; i++){

            const itemName = itemList[i].textContent.toLowerCase();
            if(itemName.includes(searchText)){
                itemList[i].style.display = 'block';
            }else{
                itemList[i].style.display = 'none';
            }
        }
});
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});