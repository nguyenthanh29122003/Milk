// const hidden_forms = document.querySelector(".hidden-form__search");
// const btnSearch = document.querySelector(".header__item header__item--right"); 

// btnSearch.addEventListener("click", ()=>{
//     hidden_form__search.classList.toggle("search__open");
// })


// const menu = document.querySelector(".hidden-forma");
// const menuButton = document.querySelector("#btnSearch");

// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("navbar__open");
// });


function ShowS(){
    document.querySelector(".hidden-form__search").style.opacity = "1";
    document.querySelector(".hidden-form__search").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__login").style.opacity = "0";
    document.querySelector(".hidden-form__login").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__signup").style.opacity = "0";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__recovery").style.opacity = "0";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__cart").style.opacity = "0";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";
}

function ShowL(){
    document.querySelector(".hidden-form__login").style.opacity = "1";
    document.querySelector(".hidden-form__login").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__signup").style.opacity = "0";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__search").style.opacity = "0";
    document.querySelector(".hidden-form__search").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__cart").style.opacity = "0";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__recovery").style.opacity = "0";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";
}

function ShowC(){
    document.querySelector(".hidden-form__cart").style.opacity = "1";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__login").style.opacity = "0";
    document.querySelector(".hidden-form__login").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__search").style.opacity = "0";
    document.querySelector(".hidden-form__search").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__signup").style.opacity = "0";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__recovery").style.opacity = "0";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";
}

function CloseF(){
    document.querySelector(".hidden-form__login").style.opacity = "0";
    document.querySelector(".hidden-form__login").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__login").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__search").style.opacity = "0";
    document.querySelector(".hidden-form__search").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__search").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__signup").style.opacity = "0";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__cart").style.opacity = "0";
    document.querySelector(".hidden-form__cart").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__cart").style. transition = "var(--smooth)";

    document.querySelector(".hidden-form__recovery").style.opacity = "0";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(-100%)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";
}

function ShowR(){
    document.querySelector(".hidden-form__signup").style.opacity = "1";
    document.querySelector(".hidden-form__signup").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__signup").style. transition = "var(--smooth)";
}

function ShowReP(){
    document.querySelector(".hidden-form__recovery").style.opacity = "1";
    document.querySelector(".hidden-form__recovery").style.transform = "translateX(0)";
    document.querySelector(".hidden-form__recovery").style. transition = "var(--smooth)";
}