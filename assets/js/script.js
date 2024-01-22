document.addEventListener("DOMContentLoaded", function () {
  const tombolRadio = document.querySelectorAll(".daftar input");
  const labelTombol = document.querySelectorAll(".tombol label");
  const garisBawah = document.querySelector(".garis_bawah");

  tombolRadio.forEach((radio, index) => {
    radio.addEventListener("click", function () {
      labelTombol.forEach((label) => label.classList.remove("centang"));

      labelTombol[index].classList.add("centang");

      const lebarLabel = labelTombol[index].offsetWidth;
      const posisiLabelKiri = labelTombol[index].offsetLeft;
      garisBawah.style.width = `${lebarLabel}px`;
      garisBawah.style.transform = `translateX(${posisiLabelKiri}px)`;
    });
  });
});
