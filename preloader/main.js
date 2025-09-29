window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main      = document.getElementById("main-content");
  const welcome   = document.querySelector(".welcome");

  const preloaderDelay = 1500; // show glass for 1.5s
  const preloaderFade  = 700;  // fade out duration
  const welcomeHold    = 2500; // visible time after zoom-in
  const fadeDuration   = 1200; // fade-out duration

  // 1) wait then fade out preloader
  setTimeout(() => {
    preloader.style.transition = `opacity ${preloaderFade}ms ease`;
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
      main.style.display = "flex";

      // 2) zoom in welcome text
      void welcome.offsetWidth; // force reflow
      welcome.classList.add("zoom-in");

      // 3) hold, then fade out and redirect
      setTimeout(() => {
        welcome.classList.add("fade-out");

        setTimeout(() => {
          window.location.href =
            "https://kudosinichi488.lovestoblog.com/index.php";
        }, fadeDuration);
      }, welcomeHold);
    }, preloaderFade);
  }, preloaderDelay);
});