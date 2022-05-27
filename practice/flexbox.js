let menuList = document.getElementById('menu-list')

menuIcon().style.maxHeight = '0px'

function menuIcon(){
    if (menuList.style.maxHeight === '0px'){
        menuList.style.maxHeight = '220px'
    }
    else{
        menuList.style.maxHeight = '0px'
    }
}