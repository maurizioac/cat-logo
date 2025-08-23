document.addEventListener("DOMContentLoaded", () => {
  const detalleButtons = document.querySelectorAll(".detalle-btn");

  detalleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const ciudadItem = button.closest(".ciudades-item");
      if (ciudadItem) {
        ciudadItem.classList.toggle("active");
      }
    });
  });
});
