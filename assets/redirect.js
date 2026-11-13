(() => {
  "use strict";

  const BACKEND_ORIGIN = "https://trecia-human-evaluation.dayena.chatgpt.site";
  const role = document.currentScript?.dataset.role === "admin" ? "admin" : "evaluate";
  const message = document.getElementById("handoff-message");
  const token = window.location.hash.slice(1).trim();

  if (!/^[A-Za-z0-9_-]{32,128}$/.test(token)) {
    message.textContent = "유효한 개인 링크가 아닙니다. 평가를 요청한 연구자에게 새 링크를 받아 주세요.";
    document.body.classList.add("handoff-error");
    return;
  }

  history.replaceState(null, "", window.location.pathname);
  window.location.replace(`${BACKEND_ORIGIN}/${role}/${encodeURIComponent(token)}`);
})();
