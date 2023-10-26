var slideIndex = 1;
            showSlide(slideIndex);

        function nextslide(n){
            showSlide(slideIndex += n);
        }

        function dotslide(n){
            showSlide(slideIndex = n);
        }

        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName("imgslide");
            var dot = document.getElementsByClassName("dot");
            
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                
                slides[i].style.display = "none";
            }

            for (i = 0; i < slides.length; i++) {
                
                dot[i].className = dot[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";

            dot[slideIndex - 1].className += " active";
            


        }
        let products = [
            {
                name: "Trumpet",
                imageSrc: "Trumpet.png",
                description: "Trumpet Yamaha",
                price: "Rp 1.500.000"
            },
            {
                name: "Baritone",
                imageSrc: "baritone.png",
                description: "Baritone Merk Yamaha",
                price: "Rp 2.500.000"
            },
            {
                name: "Mellophone",
                imageSrc: "mellophone.png",
                description: "Mellophone Merk Yamaha",
                price: "Rp 2.000.000"
            },
            {
                name: "Euphonium",
                imageSrc: "euphonium.png",
                description: "Euphonium Merk Yamaha",
                price: "Rp 4.000.000"
            }
            
        
        
        ];
        
        for (let i = 0; i < products.length; i++) {
            document.write('<div class="card">');
            document.write('<img src="' + products[i].imageSrc + '" alt="' + products[i].name + '" />');
            document.write('<h2>' + products[i].name + '</h2>');
            document.write('<p>' + products[i].description + '</p>');
            document.write('<p class="harga">' + products[i].price + '</p>');
            document.write('<a href="#">Selengkapnya</a>');
            document.write('</div>');
        }