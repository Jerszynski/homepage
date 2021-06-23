{
  const welcome = () => {
    console.log(
      "Hello my friend! Stay awhile and listen! And don't forget to Push the Button :) "
    );
  };

  const headerColorChangeButton = document.querySelector(".js-colorSwitch");

  const changeHeaderColorOnClick = () => {
    const coloredHeader = document.querySelector(".js-coloredHeader");

    switch (headerColorChangeButton.innerText) {
      case "Zmień kolor nagłówka na czerwony":
        coloredHeader.classList.toggle("red__linksHeader");
        headerColorChangeButton.innerText = "Zmień kolor nagłówka na niebieski";
        break;

      case "Zmień kolor nagłówka na niebieski":
        coloredHeader.classList.remove("red__linksHeader");
        coloredHeader.classList.toggle("blue__linksHeader");
        headerColorChangeButton.innerText = "Zmień kolor nagłówka na zielony";
        break;

      case "Zmień kolor nagłówka na zielony":
        coloredHeader.classList.remove("blue__linksHeader");
        coloredHeader.classList.toggle("green__linksHeader");
        headerColorChangeButton.innerText = "Zmień kolor nagłówka na żółty";
        break;

      case "Zmień kolor nagłówka na żółty":
        coloredHeader.classList.remove("green__linksHeader");
        coloredHeader.classList.toggle("yellow__linksHeader");
        headerColorChangeButton.innerText = "Zmień kolor nagłówka na czarny";
        break;

      case "Zmień kolor nagłówka na czarny":
        coloredHeader.classList.remove("yellow__linksHeader");
        headerColorChangeButton.innerText = "Zmień kolor nagłówka na czerwony";
        break;

      default:
        headerColorChangeButton.innerText = "Something were wrong!!";
    }
  };

  const backgroundColorChangeButton = document.querySelector(
    ".js-changeBackground"
  );

  const changeBackgroundOnClick = () => {
    const bodyNewBackgroundColor = document.querySelector(".body");

    backgroundColorChangeButton.innerText === "Zmień kolor tła"
      ? (backgroundColorChangeButton.innerText = "Zmień kolor tła ponownie") &&
        bodyNewBackgroundColor.classList.toggle("body__newBackgroundColor")
      : (backgroundColorChangeButton.innerText = "Zmień kolor tła") &&
        bodyNewBackgroundColor.classList.toggle("body__newBackgroundColor");
  };

  const init = () => {
    headerColorChangeButton.addEventListener("click", changeHeaderColorOnClick);

    backgroundColorChangeButton.addEventListener(
      "click",
      changeBackgroundOnClick
    );

    welcome();
  };
  init();
}
