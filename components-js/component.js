fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {



        document.getElementById("navbar").innerHTML = data;

         const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });

    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", (e) => {

        if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation();

            toggle.closest(".dropdown").classList.toggle("active");
        }

    });

});






        initializeNavbar();

         
        

    });

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;

        lucide.createIcons();
    });

fetch("home-1/home.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("home-content").innerHTML = data;

        lucide.createIcons();

       
        








    });


