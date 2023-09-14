// const hidden_forms = document.querySelector(".hidden-forms");
// const btnSearch = document.querySelector(".header__item header__item--right"); 

// btnSearch.addEventListener("click", ()=>{
//     hidden_form__search.classList.toggle("search__open");
// })


// const menu = document.querySelector(".hidden-forms");
// const menuButton = document.querySelector("#btnSearch");

// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("navbar__open");
// });


function ShowS(){
    document.querySelector(".hidden-formS").style.opacity = "1";
    document.querySelector(".hidden-formS").style.transform = "translateX(0)";
    document.querySelector(".hidden-formS").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formL").style.opacity = "0";
    document.querySelector(".hidden-formL").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formL").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formC").style.opacity = "0";
    document.querySelector(".hidden-formC").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formC").style. transition = "var(--smooth)";
}

function ShowL(){
    document.querySelector(".hidden-formL").style.opacity = "1";
    document.querySelector(".hidden-formL").style.transform = "translateX(0)";
    document.querySelector(".hidden-formL").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formC").style.opacity = "0";
    document.querySelector(".hidden-formC").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formC").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formS").style.opacity = "0";
    document.querySelector(".hidden-formS").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formS").style. transition = "var(--smooth)";
}

function ShowC(){
    document.querySelector(".hidden-formC").style.opacity = "1";
    document.querySelector(".hidden-formC").style.transform = "translateX(0)";
    document.querySelector(".hidden-formC").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formL").style.opacity = "0";
    document.querySelector(".hidden-formL").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formL").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formS").style.opacity = "0";
    document.querySelector(".hidden-formS").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formS").style. transition = "var(--smooth)";
}

function CloseF(){
    document.querySelector(".hidden-formL").style.opacity = "0";
    document.querySelector(".hidden-formL").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formL").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formS").style.opacity = "0";
    document.querySelector(".hidden-formS").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formS").style. transition = "var(--smooth)";

    document.querySelector(".hidden-formC").style.opacity = "0";
    document.querySelector(".hidden-formC").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-formC").style. transition = "var(--smooth)";
}