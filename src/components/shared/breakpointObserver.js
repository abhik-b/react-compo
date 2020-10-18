function matchMediaQuery(breakPoints, setBreakpoint) {
  console.log(Object.keys(breakPoints));
  for (var key of Object.keys(breakPoints)) {
    console.log(key, "-->", breakPoints[key]);
    if (window.matchMedia(`${breakPoints[key]}`).matches) {
      setBreakpoint(key);
    }
  }
}

export default function breakPointObserver(breakPoints, setBreakpoint) {
  matchMediaQuery(breakPoints, setBreakpoint);

  window.addEventListener("resize", () => {
    matchMediaQuery(breakPoints, setBreakpoint);
  });
}
