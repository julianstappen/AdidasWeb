// Mengambil tombol hamburger.
const hamburger = document.querySelector(".hamburger");

// Mengambil navigation menu.
const navbarNav = document.querySelector(".navbar-nav");

// Mengambil semua link yang berada di dalam navigation menu.
const navLinks = document.querySelectorAll(".navbar-nav a");

// Menjalankan kode ketika hamburger diklik.
hamburger.addEventListener("click", function () {
  // Menampilkan atau menyembunyikan navigation menu.
  navbarNav.classList.toggle("active");

  // Mengubah hamburger menjadi X atau kembali menjadi hamburger.
  hamburger.classList.toggle("active");
});

// Melakukan loop pada setiap navigation link.
navLinks.forEach(function (link) {
  // Menjalankan kode ketika link diklik.
  link.addEventListener("click", function () {
    // Menutup navigation menu.
    navbarNav.classList.remove("active");

    // Mengembalikan X menjadi hamburger.
    hamburger.classList.remove("active");
  });
});
