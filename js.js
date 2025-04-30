document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("credoBtn");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modalOverlay");

  openBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  });

  function closeModal() {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300); // ждем завершения анимации
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});