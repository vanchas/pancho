export default function scrollPage(top) {
  if (window) {
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  }
}
