{
  const welcome = () => {
    console.log("Welcome to everyone together \nand to each individual!");
  };

  const updateThemeText = (body) => {
    const themeName = document.querySelector(".js-themeName");

    themeName.innerText = body.classList.contains("body--light")
      ? "Ciemny motyw"
      : "Jasny motyw";
  };

  const changeThemeHeaders = () => {
    const headers = document.querySelectorAll(".js-header");

    headers.forEach((headers) =>
      headers.classList.toggle("section__header--light")
    );
  };

  const changeTheme = () => {
    const body = document.querySelector(".js-body");

    body.classList.toggle("body--light");

    changeThemeHeaders();
    updateThemeText(body);
  };

  const init = () => {
    const button = document.querySelector(".js-button");

    button.addEventListener("click", changeTheme);

    welcome();
  };

  init();
}

// console.log("Witam wszystkich razem i każdego z osobna!");

// let button = document.querySelector(".js-button");
// let body = document.querySelector(".js-body");
// let allHeaders = document.querySelectorAll(".js-header");
// let themeName = document.querySelector(".js-themeName");

// button.addEventListener("click", () => {
//   body.classList.toggle("body--light");
//   allHeaders.forEach((allHeaders) =>
//     allHeaders.classList.toggle("section__header--light")
//   );
//   themeName.innerText = body.classList.contains("body--light")
//     ? "Ciemny"
//     : "Jasny";
// });
