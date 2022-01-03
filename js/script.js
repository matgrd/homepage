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

  const changeThemeheader = () => {
    const header = document.querySelectorAll(".js-header");

    header.forEach((header) =>
      header.classList.toggle("section__header--light")
    );
  };

  const changeTheme = () => {
    const body = document.querySelector(".js-body");

    body.classList.toggle("body--light");

    changeThemeheader();
    updateThemeText(body);
  };

  const init = () => {
    const button = document.querySelector(".js-button");

    button.addEventListener("click", changeTheme);

    welcome();
  };

  init();
}
