(() => {
  "use strict";
  const button = document.getElementById("resume-button");
  const lastLink = sessionStorage.getItem("trecia_handoff");
  if (!button || !lastLink) return;
  button.hidden = false;
  button.addEventListener("click", () => window.location.assign(lastLink));
})();
