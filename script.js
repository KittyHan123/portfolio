(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  function closeDialog(dialog) {
    if (dialog && dialog.open) dialog.close();
  }

  document.querySelectorAll("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-open");
      var d = id && document.getElementById(id);
      if (d && typeof d.showModal === "function") d.showModal();
    });
  });

  document.querySelectorAll(".story-dialog").forEach(function (dialog) {
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) closeDialog(dialog);
    });

    dialog.querySelectorAll("[data-close]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeDialog(dialog);
      });
    });
  });
})();

