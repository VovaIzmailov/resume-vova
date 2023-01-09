import "./ScrollUp.css";

function ScrollUp(): JSX.Element {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".ScrollUp") as HTMLElement;
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <div className="ScrollUp">
      <a href="#home" className="ScrollUp__link">
        <i className="bx bx-up-arrow-alt Scroll-up__icon"></i>
      </a>
    </div>
  );
}

export default ScrollUp;
