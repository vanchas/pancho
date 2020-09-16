export default function scrollPage() {
  if (window) {
    if (window.innerWidth > 768) {
      window.scrollTo({
        top: 500,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 250,
        behavior: "smooth"
      });
    }
  }
}
