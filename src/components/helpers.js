export default function scrollIt(destination) {
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;
  const destinationOffset = destination.offsetTop;
  const destinationOffsetToScroll = Math.round(
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset
  );

  function scroll() {
    window.scroll({
      top: destinationOffsetToScroll,
      left: destinationOffsetToScroll,
      behavior: "smooth",
    });
  }

  scroll();
}

export function timeout(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
