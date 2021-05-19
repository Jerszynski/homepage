{
  const welcome = () => {
    console.log(
      "Hello my friend! Stay awhile and listen! And don't forget to Push the Button :) "
    );
  };

  const sectionButtonChanger = document.querySelector(".js__colorSwitch");

  const changeHeaderColorOnClick = () => {
    const changer = document.querySelector(".js-coloredHeader");

    switch (sectionButtonChanger.innerText) {
      case "Zmień kolor nagłówka na czerwony":
        changer.classList.toggle("red__linksHeader");
        sectionButtonChanger.innerText = "Zmień kolor nagłówka na niebieski";
        break;

      case "Zmień kolor nagłówka na niebieski":
        changer.classList.remove("red__linksHeader");
        changer.classList.toggle("blue__linksHeader");
        sectionButtonChanger.innerText = "Zmień kolor nagłówka na zielony";
        break;

      case "Zmień kolor nagłówka na zielony":
        changer.classList.remove("blue__linksHeader");
        changer.classList.toggle("green__linksHeader");
        sectionButtonChanger.innerText = "Zmień kolor nagłówka na żółty";
        break;

      case "Zmień kolor nagłówka na żółty":
        changer.classList.remove("green__linksHeader");
        changer.classList.toggle("yellow__linksHeader");
        sectionButtonChanger.innerText = "Zmień kolor nagłówka na czarny";
        break;

      case "Zmień kolor nagłówka na czarny":
        changer.classList.remove("yellow__linksHeader");
        sectionButtonChanger.innerText = "Zmień kolor nagłówka na czerwony";
        break;

      default:
        sectionButtonChanger.innerText = "Something were wrong!!";
    }
  };

  const sectionButton = document.querySelector(".section__button");

  const changeBackgroundOnClick = () => {
    const bodyNewBGcolor = document.querySelector(".body");

    sectionButton.innerText === "Zmień motyw"
      ? (sectionButton.innerText = "Zmień motyw ponownie") &&
        bodyNewBGcolor.classList.toggle("body__newBGcolor")
      : (sectionButton.innerText = "Zmień motyw") &&
        bodyNewBGcolor.classList.toggle("body__newBGcolor");
  };

  const init = () => {
    sectionButtonChanger.addEventListener("click", changeHeaderColorOnClick);

    sectionButton.addEventListener("click", changeBackgroundOnClick);

    welcome();
  };
  init();
}
