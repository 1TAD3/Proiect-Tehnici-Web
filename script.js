document.addEventListener("DOMContentLoaded", function () {
    // let donationForm = document.getElementById('donationForm');
    // let donationFeedback = document.getElementById('donationFeedback');
    function phoneTabletMenu(){
        let size;
        if(window.innerWidth <= 920){
            menuSvg.classList.remove("display-none");
            menu.classList.add("display-none");
            menu.classList.add("height-0");
            size = 1;
        }
        else{
            menuSvg.classList.add("display-none");
            menu.classList.remove("display-none");
            menu.classList.remove("height-0");
            size = 0;
        }
        window.addEventListener('resize', () =>{
            if(window.innerWidth <= 920 && !size){
                console.log(size);
                menuSvg.classList.remove("display-none");
                menu.classList.add("display-none");
                menu.classList.add("height-0");
                size = 1;
            }
            if(window.innerWidth > 920 && size){
                console.log(size);
                menuSvg.classList.add("display-none");
                menu.classList.remove("display-none");
                menu.classList.remove("height-0"); 
                size = 0;
            }
        });
        let pressed = false,
            timeout = false;
        menuSvg.onclick = () =>{
            console.log(11);
            if(!timeout){
                if(!pressed){
                    menu.classList.remove("display-none");
                    menu.classList.remove("height-0");
                    pressed = true;
                }
                else{
                    menu.classList.add("height-0");
                    setTimeout(() =>{
                        menu.classList.add("display-none"); 
                    },200);
                    pressed = false;
                }
                timeout = true;
                setTimeout(() =>{
                    timeout = false;
                },500);
            }
        }
    }
    phoneTabletMenu();
    let juicetext = document.getElementById('juicetext');

    // // Donation Form Submission
    // donationForm.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     let amount = document.getElementById('amount').value;
    //     if (amount > 0) {
    //         donationFeedback.textContent = `Thank you for your donation of $${amount}!`;
    //         localStorage.setItem('lastDonation', amount);
    //     } else {
    //         donationFeedback.textContent = 'Please enter a valid amount.';
    //     }
    // });

    // // Retrieve Last Donation
    // let lastDonation = localStorage.getItem('lastDonation');
    // if (lastDonation) {
    //     donationFeedback.textContent = `Your last donation was $${lastDonation}. Thank you for your support!`;
    // }

    if(document.URL.includes("albums.html") || document.URL.includes("singles.html")) (function (){
        let elements = document.querySelectorAll('.info');  
        if(elements[0].getBoundingClientRect().top < 500){
            elements[0].classList.add('fade-in');
        }
    })();
    window.addEventListener('scroll', function () {
        let elements = document.querySelectorAll('.info');
        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    });
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    let check = isMobile();
    console.log(check);
    if(check){
        let elements = document.querySelectorAll('.hover');
        elements.forEach((element) => {
            element.classList.remove('hover');
            console.log(element);
            element.addEventListener('touchstart', () => {
                element.classList.add('hover');
            });

            element.addEventListener('touchend', () => {
                console.log("touched");
                setTimeout(() =>{
                    element.classList.remove('hover');
                }, 50);
            });
        });
    }
    let particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 300; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = '#FF4BD6';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particlesContainer.appendChild(particle);

        // Move particles
        particle.style.transition = 'transform 3s linear';
        let moveParticle = () => {
            let x = Math.random() * 50 - 1; 
            let y = Math.random() * 50 - 1;
            particle.style.transform = `translate(${x}px, ${y}px)`;
        };
        setInterval(moveParticle, 3000); 
    }
    let style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.5s ease-in, transform 0.5s ease-in;
        }
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
        }
        .particle {
            opacity: 0.5;
        }
    `;
    document.head.appendChild(style);
    function countDownFunction() {
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "11/22/",
            birthday = dayMonth + yyyy;
      
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
      
        let countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                document.getElementById("headline").innerText = "Listen to the album!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
          }, 0);
    };
    if(document.URL.includes("index.html")) countDownFunction();
    (function (){
        let hidden = false;
        socialsArr.onclick = () => {
            if(hidden){
                hidden = false;
                socialsArrSvg.style.transform = "rotate(180deg)";
                sideSocials.style.right = "-2px";
            }
            else{
                hidden = true;
                socialsArrSvg.style.transform = "rotate(0deg)";
                sideSocials.style.right = "-52px";
            }

        }
    })();
    let albums = ["",
            {
                background: "https://open.spotify.com/embed/album/6tkjU4Umpo79wwkgPMV3nZ?utm_source=generator",
                id: "slide1",
                bttn_bottom_id: "mainSliderBttn1",
                details: {
                    text: "1. Goodbye & Good Riddance",
                    title: "9.583.993.523 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#00335A",
                    button_link: "https://youtube.com/playlist?list=PLau9bkm0iK9twhgsxr-bFTEchn_T9O0qW&si=M03yCzFvFiXBT8Du"
                }
            },
            {
                background: "https://open.spotify.com/embed/album/6n9DKpOxwifT5hOXtgLZSL?utm_source=generator",
                id: "slide2",
                bttn_bottom_id: "mainSliderBttn2",
                details: {
                    text: "2. Legends Never Die",
                    title: "6.611.259.363 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#60001A",
                    button_link: "https://youtube.com/playlist?list=PLau9bkm0iK9t470JP18A4a_mI6G_5ffDt&si=mHcut1X4jycQemFb"
                }
            },
            {
                background: "https://open.spotify.com/embed/album/1btu0SV2DOI5HoFsvUd78F?utm_source=generator",
                id: "slide3",
                bttn_bottom_id: "mainSliderBttn3",
                details: {
                    text: "3. Death Race For Love",
                    title: "6.151.685.244 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#54005C",
                    button_link: "https://youtube.com/playlist?list=OLAK5uy_nLOIXxxxLZncjq1gSIW-GvhboblseCpZg&si=VatvZq-vCY68AcVp"
                }
            },
            {
                background: "https://open.spotify.com/embed/album/1typPCwqyXMfFpvDZAyKew?utm_source=generator",
                id: "slide4",
                bttn_bottom_id: "mainSliderBttn4",
                details: {
                    text: "4. Fighting Demons",
                    title: "2.897.692.917 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#2D343B",
                    button_link: "https://youtube.com/playlist?list=OLAK5uy_kZ2MLSNGjLRXP7OfUMs23Qv57SBRTIZIk&si=QXBP3lzTbwSBOfjK"
                }
            },
            {
                background: "https://open.spotify.com/embed/album/6P9PZjWXoCRF5b66BafPKY?utm_source=generator",
                id: "slide5",
                bttn_bottom_id: "mainSliderBttn5",
                details: {
                    text: "5. WRLD ON DRUGS with Future",
                    title: "1.449.364.295 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#570008",
                    button_link: "https://youtube.com/playlist?list=OLAK5uy_kBiZlNm_vcQ5ervdG3U6RmFmLMlJ1Xv-U&si=QLcJW8ds8Oa5dLxc"
                }
            }
        ],
        singles = ["",
            {
                background: "https://open.spotify.com/embed/track/285pBltuF7vW8TeWk8hdRR?utm_source=generator",
                id: "slide1",
                bttn_bottom_id: "mainSliderBttn1",
                details: {
                    text: "1. Lucid Dreams",
                    title: "2.670.920.039 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#00335A",
                    button_link: "https://youtu.be/mzB1VGEGcSU?si=e89NGQm7OFbpgglk"

                }
            },
            {
                background: "https://open.spotify.com/embed/track/4VXIryQMWpIdGgYR4TrjT1?utm_source=generator",
                id: "slide2",
                bttn_bottom_id: "mainSliderBttn2",
                details: {
                    text: "2. All Girls Are The Same",
                    title: "1.735.078.351 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#00335A",
                    button_link: "https://youtu.be/h3EJICKwITw?si=T_hsD9-2voUH9UE4"
                }
            },
            {
                background: "https://open.spotify.com/embed/track/7FIWs0pqAYbP91WWM0vlTQ?utm_source=generator",
                id: "slide3",
                bttn_bottom_id: "mainSliderBttn3",
                details: {
                    text: "3. Godzilla (feat. Juice WRLD)",
                    title: "1.566.003.201 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#501125",
                    button_link: "https://youtu.be/r_0JjYUe5jo?si=DJrE7TYUawYZgihJ"
                }
            },
            {
                background: "https://open.spotify.com/embed/track/6iaSML1PIYq936g62BDtBq?utm_source=generator",
                id: "slide4",
                bttn_bottom_id: "mainSliderBttn4",
                details: {
                    text: "4. Robbery",
                    title: "1.363.750.341 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#3C005C",
                    button_link: "https://youtu.be/iI34LYmJ1Fs?si=tnih3GIJt1Y6dHfU"
                }
            },
            {
                background: "https://open.spotify.com/embed/track/2Y0wPrPQBrGhoLn14xRYCG?utm_source=generator",
                id: "slide5",
                bttn_bottom_id: "mainSliderBttn5",
                details: {
                    text: "5. Come & Go (with Marshmello)",
                    title: "1.001.816.168 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#B22D43",
                    button_link: "https://youtu.be/5Di20x6vVVU?si=FBPDLGUVerq5GSVw"
                }
            }
        ],
        donation_slides = ["",
            {
                background: "https://livefree999.org/wp-content/uploads/2022/04/markus-spiske-DXOMQLn_Xqw-unsplash-scaled.jpg",
                id: "slide1",
                bttn_bottom_id: "mainSliderBttn1",
                details: {
                    text: "Vision",
                    title: "We support programs that help people struggling with anxiety, depression, and substance dependency.",
                    button_text: "Donate now",
                    bg_color: "rgba(0, 59, 83, 0.7)",
                    button_link: "https://livefree999.clothing/"

                }
            },
            {
                background: "https://open.spotify.com/embed/track/4VXIryQMWpIdGgYR4TrjT1?utm_source=generator",
                id: "slide2",
                bttn_bottom_id: "mainSliderBttn2",
                details: {
                    text: "2. All Girls Are The Same",
                    title: "1.735.078.351 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#00335A",
                    button_link: "https://youtu.be/h3EJICKwITw?si=T_hsD9-2voUH9UE4"
                }
            },
            {
                background: "https://open.spotify.com/embed/track/7FIWs0pqAYbP91WWM0vlTQ?utm_source=generator",
                id: "slide3",
                bttn_bottom_id: "mainSliderBttn3",
                details: {
                    text: "3. Godzilla (feat. Juice WRLD)",
                    title: "1.566.003.201 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#501125",
                    button_link: "https://youtu.be/r_0JjYUe5jo?si=DJrE7TYUawYZgihJ"
                }
            },
            {
                background: "https://open.spotify.com/embed/track/6iaSML1PIYq936g62BDtBq?utm_source=generator",
                id: "slide4",
                bttn_bottom_id: "mainSliderBttn4",
                details: {
                    text: "4. Robbery",
                    title: "1.363.750.341 streams",
                    button_text: "Listen on YouTube",
                    bg_color: "#3C005C",
                    button_link: "https://youtu.be/iI34LYmJ1Fs?si=tnih3GIJt1Y6dHfU"
                }
            }
        ];
    function slider(slider, sliderId, slider_width, slider_height, buttons, slider_interval, slides, bottom_buttons, slides_type){
        let slider_index = 1,
            bttn_bottom_cooldown = true;
        sliderId.style.width = slider_width;
        sliderId.style.height = slider_height;
        bttn_left = document.createElement("div");
        bttn_left.classList.add("slider-button-left");
        bttn_left.innerHTML = `<svg width="10px" height="6px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>`;
        sliderId.appendChild(bttn_left);
        bttn_right = document.createElement("div");
        bttn_right.classList.add("slider-button-right");
        bttn_right.innerHTML = `<svg width="10px" height="6px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>`;
        sliderId.appendChild(bttn_right);
        slides.firstElementChild.src = slider[slider.length - 1].background;
        sliderFootnote(slider.length - 1, slides.children[0], false);
        for(let i = 1; i < slides.children.length; ++i){
            slides.children[i].src = slider[i].background;
            sliderFootnote(i, slides.children[i], false);
        }
        function sliderButtons(){
            for(let i = 1; i <= slider.length - 1; i++){
                let bttn = document.createElement("div");
                bttn.classList.add("slider-bottom-button-padding");
                bottom_buttons.appendChild(bttn);
                let bttn_interior = document.createElement("div");
                bttn_interior.classList.add("slider-bottom-button");
                bttn_interior.setAttribute("id", slider[i].bttn_bottom_id);
                bttn.appendChild(bttn_interior);
                bttn.onclick = () =>{
                    if(bttn_bottom_cooldown){
                        bttn_bottom_cooldown = false;
                        setTimeout(()=>{
                            bttn_bottom_cooldown = true;
                        }, 500);
                        if(i > slider_index){
                            if(i == slider_index + 1){
                                slideRight();
                            }
                            else{
                                slides.style.transition = "all 0.25s";
                                document.getElementById(slider[i].bttn_bottom_id).classList.add("slider-bottom-button-active");
                                previousBttn.classList.remove("slider-bottom-button-active");
                                previousBttn = document.getElementById(slider[i].bttn_bottom_id);
                                let slider_index_l = slider_index,
                                    slider_index_r = slider_index;
                                if (slider_index == slider.length - 1) {
                                    slider_index_l = slider.length - 2;
                                    slider_index_r = 1;
                                }
                                else{
                                    if (slider_index == 1) {
                                        slider_index_l = slider.length - 1;
                                    }
                                    else{
                                        slider_index_l--;
                                    }
                                    slider_index_r ++;
                                }
                                let i_l = i,
                                    i_r = i;
                                if (i == slider.length - 1) {
                                    i_l = slider.length - 2;
                                    i_r = 1;
                                }
                                else{
                                    if (i == 1) {
                                        i_l = slider.length - 1;
                                    }
                                    else{
                                        i_l--;
                                    }
                                    i_r++;
                                }
                                document.getElementById(slider[slider_index_l].id).style.width = "0";
                                document.getElementById(slider[slider_index].id).style.width = "0";
                                document.getElementById(slider[slider_index_r].id).style.width = "0";
                                setTimeout(() =>{
                                    document.getElementById(slider[slider_index_l].id).remove();
                                    document.getElementById(slider[slider_index].id).remove();
                                    document.getElementById(slider[slider_index_r].id).remove();
                                    let new_slide_r = document.createElement(slides_type);
                                    new_slide_r.setAttribute("id",slider[i_r].id);
                                    new_slide_r.classList.add("slide");
                                    new_slide_r.src = slider[i_r].background;
                                    slides.appendChild(new_slide_r);
                                    let new_slide_l = document.createElement(slides_type);
                                    new_slide_l.setAttribute("id",slider[i_l].id);
                                    new_slide_l.classList.add("slide");
                                    new_slide_l.src = slider[i_l].background;
                                    slides.appendChild(new_slide_l);
                                    let new_slide = document.createElement(slides_type);
                                    new_slide.setAttribute("id",slider[i].id);
                                    new_slide.classList.add("slide");
                                    new_slide.src = slider[i].background;
                                    slides.appendChild(new_slide);
                                    setTimeout(() =>{
                                        new_slide_r.style.width = "0px";
                                        setTimeout(() =>{
                                            new_slide_r.remove();
                                            new_slide_r.style.width = "calc(100% / 3 + 0.02px)";
                                            slides.appendChild(new_slide_r);
                                            slides.style.transition = "all 0.5s";
                                        },  200);
                                    },  4);
                                    if(slider_interval){
                                        clearInterval(slide_animation_right);
                                        slide_animation_right = setInterval (slideRight, 6000);
                                    }
                                    slider_index = i;
                                },  300);
                            }
                        }
                        if(i < slider_index){
                            if(i == slider_index - 1){
                                slideLeft();
                            }
                            else{
                                slides.style.transition = "all 0.1s";
                                document.getElementById(slider[i].bttn_bottom_id).classList.add("slider-bottom-button-active");
                                previousBttn.classList.remove("slider-bottom-button-active");
                                previousBttn = document.getElementById(slider[i].bttn_bottom_id);
                                let slider_index_l = slider_index,
                                    slider_index_r = slider_index;
                                if (slider_index == slider.length - 1) {
                                    slider_index_l = slider.length - 2;
                                    slider_index_r = 1;
                                }
                                else{
                                    if (slider_index == 1) {
                                        slider_index_l = slider.length - 1;
                                    }
                                    else{
                                        slider_index_l--;
                                    }
                                    slider_index_r ++;
                                }
                                let i_l = i,
                                    i_r = i;
                                if (i == slider.length - 1) {
                                    i_l = slider.length - 2;
                                    i_r = 1;
                                }
                                else{
                                    if (i == 1) {
                                        i_l = slider.length - 1;
                                    }
                                    else{
                                        i_l--;
                                    }
                                    i_r++;
                                }
                                document.getElementById(slider[slider_index_r].id).remove();
                                let new_slide_r = document.createElement(slides_type);
                                new_slide_r.setAttribute("id",slider[i_r].id);
                                new_slide_r.classList.add("slide");
                                new_slide_r.style.width = "0px";
                                new_slide_r.src = slider[i_r].background;
                                slides.insertBefore(new_slide_r, slides.firstElementChild);
                                setTimeout(() =>{
                                    new_slide_r.style.width = "calc(100% / 3 + 0.02px)";
                                },  5);
                                setTimeout(() =>{
                                    document.getElementById(slider[slider_index].id).remove();
                                    let new_slide = document.createElement(slides_type);
                                    new_slide.setAttribute("id",slider[i].id);
                                    new_slide.classList.add("slide");
                                    new_slide.style.width = "0px";
                                    new_slide.src = slider[i].background;
                                    slides.insertBefore(new_slide, slides.firstElementChild);
                                    setTimeout(() =>{
                                        new_slide.style.width = "calc(100% / 3 + 0.02px)";
                                    },  5);
                                    setTimeout(() =>{
                                        slides.style.transition = "all 0.3s";
                                        document.getElementById(slider[slider_index_l].id).remove();
                                        let new_slide_l = document.createElement(slides_type);
                                        new_slide_l.setAttribute("id",slider[i_l].id);
                                        new_slide_l.classList.add("slide");
                                        new_slide_l.style.width = "0px";
                                        new_slide_l.src = slider[i_l].background;
                                        slides.insertBefore(new_slide_l, slides.firstElementChild);
                                        setTimeout(() =>{
                                            new_slide_l.style.width = "calc(100% / 3 + 0.02px)";
                                        },  5);
                                        if(slider_interval){
                                            clearInterval(slide_animation_right);
                                            slide_animation_right = setInterval (slideRight, 6000);
                                        }
                                        slider_index = i;
                                        setTimeout(() =>{
                                            slides.style.transition = "all 0.5s";
                                        },  300);
                                    },  105);
                                },  105);
                            }
                        }
                    }
                }
            }
            document.getElementById(slider[1].bttn_bottom_id).classList.add("slider-bottom-button-active");
        }
        let previousBttn
        if (buttons) {
            sliderButtons();
            previousBttn = document.getElementById(slider[1].bttn_bottom_id);
        }
        function slideLeft(){
            let slider_index_r = slider_index,
                slider_index_l = slider_index;
            if (slider_index == 1) {
                slider_index_l = slider.length - 2;
                slider_index_r = 2;
                slider_index = slider.length - 1;
            }
            else{
                if (slider_index == slider.length - 1) {
                    slider_index_r = 1;
                }
                else{
                    slider_index_r++;
                }
                slider_index--;
                if (slider_index == 1){
                    slider_index_l = slider.length - 1;
                }
                else{
                    slider_index_l -= 2;
                }
            }
            if (buttons){
                document.getElementById(slider[slider_index].bttn_bottom_id).classList.add("slider-bottom-button-active");
                previousBttn.classList.remove("slider-bottom-button-active");
                previousBttn = document.getElementById(slider[slider_index].bttn_bottom_id);
            }
            document.getElementById(slider[slider_index_r].id).remove();
            let new_slide = document.createElement(slides_type);
            new_slide.setAttribute("id", slider[slider_index_l].id);
            new_slide.classList.add("slide");
            new_slide.style.width = "0px";
            new_slide.src = slider[slider_index_l].background;
            slides.insertBefore(new_slide, slides.firstElementChild);
            sliderFootnote(slider_index_l, new_slide, true);
            setTimeout(() =>{
                document.getElementById(slider[slider_index_l].id).style.width = "calc(100% / 3 + 0.02px)";
            },  1);
        }
        bttn_left.onclick = function(){
            if(!this.disabled){
                this.disabled = true;
                if(slider_interval){
                    clearInterval(slide_animation_right);
                }
                setTimeout(() =>{
                    this.disabled = false;
                    if(slider_interval){slide_animation_right = setInterval (slideRight, 6000);}
                },  500);
                slideLeft();
            }
        } 
        function slideRight(){
            let slider_index_l = slider_index,
                slider_index_r = slider_index;
            if (slider_index == slider.length - 1) {
                slider_index_l = slider.length - 2;
                slider_index_r = 2;
                slider_index = 1;
            }
            else{
                if (slider_index == 1) {
                    slider_index_l = slider.length - 1;
                }
                else{
                    slider_index_l--;
                }
                slider_index++;
                if (slider_index == slider.length - 1){
                    slider_index_r = 1;
                }
                else{
                    slider_index_r += 2;
                }
            }
            if(buttons){
                document.getElementById(slider[slider_index].bttn_bottom_id).classList.add("slider-bottom-button-active");
                previousBttn.classList.remove("slider-bottom-button-active");
                previousBttn = document.getElementById(slider[slider_index].bttn_bottom_id);
            }
            console.log(slider[slider_index_l].id);
            document.getElementById(slider[slider_index_l].id).style.width = "0";
            setTimeout(() =>{
                document.getElementById(slider[slider_index_l].id).remove();
                let new_slide = document.createElement(slides_type);
                new_slide.setAttribute("id", slider[slider_index_r].id);
                new_slide.classList.add("slide");
                new_slide.src = slider[slider_index_r].background;
                slides.appendChild(new_slide);
                sliderFootnote(slider_index_r, new_slide, false);
            },  500);
        }
        bttn_right.onclick = function(){
            if(!this.disabled){
                this.disabled = true;
                if(slider_interval){
                    clearInterval(slide_animation_right);
                }
                setTimeout(() =>{
                    this.disabled = false;
                    if(slider_interval){slide_animation_right = setInterval(slideRight, 6000);}
                },  500);
                slideRight();
            }
        } 
        function sliderFootnote(index, new_slide, left){
            if(slider[index].details){
                console.log(new_slide);
                let div = document.createElement("div");
                div.setAttribute("id", new_slide.id);
                new_slide.setAttribute("id", "");
                div.classList.add("slide");
                if (left){
                    div.style.width = "0px";
                }
                new_slide.style.width = "100%";
                slides.insertBefore(div, new_slide);
                div.appendChild(new_slide);
                let new_footnote = document.createElement("div");
                new_footnote.classList.add("slider-footnote");
                new_footnote.style.background = slider[index].details.bg_color;
                div.appendChild(new_footnote);
                let new_footnote_details = document.createElement("div");
                new_footnote_details.classList.add("slider-footnote-details");
                new_footnote.appendChild(new_footnote_details);
                let new_footnote_text = document.createElement("div");
                new_footnote_text.classList.add("slider-footnote-text");
                new_footnote_text.innerText = slider[index].details.text;
                new_footnote_details.appendChild(new_footnote_text);
                let new_footnote_title = document.createElement("div");
                new_footnote_title.classList.add("slider-footnote-title");
                new_footnote_title.innerText = slider[index].details.title;
                new_footnote_details.appendChild(new_footnote_title);
                let link_button = document.createElement("a");     
                link_button.target = "_blank";               
                link_button.href = slider[index].details.button_link;
                link_button.classList.add("slider-footnote-link-button");
                link_button.innerText = slider[index].details.button_text;
                new_footnote.appendChild(link_button);
                let link_button_replacement = document.createElement("a");
                link_button_replacement.target = "_blank";               
                link_button_replacement.href = slider[index].details.button_link;
                link_button_replacement.style.display = "none";
                link_button_replacement.classList.add("slider-footnote-link-button-replacement");
                link_button_replacement.innerHTML = '<svg viewBox="1 1 14 14" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"></path><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"></path></g></svg>';
                new_footnote.appendChild(link_button_replacement);
            }
        }
        let slide_animation_right;
        if(slider_interval){slide_animation_right = setInterval(slideRight, 6000);}
    }
    console.log(location.href.split("/").slice(-1)[0]);
    if(location.href.split("/").slice(-1)[0] == "albums.html") slider(albums, mainSlider, "calc(100% - 100px)", "600px", false, false, mainSlides, undefined, "iframe");
    if(location.href.split("/").slice(-1)[0] == "singles.html") slider(singles, mainSlider, "calc(100% - 100px)", "550px", false, false, mainSlides, undefined, "iframe");
    if(location.href.split("/").slice(-1)[0] == "donation.html") slider(donation_slides, mainSlider, "calc(100% - 100px)", "80%", false, true, mainSlides, undefined, "img");
    let slider_products =[
        {
            button: "Outerwear",
            products: [
                {
                    img: "https://999club.com/cdn/shop/files/novanity-zip_740x.png?v=1720816161",
                    description:"NO VANITY ZIP HOODIE - BLACK",
                    old_price: "2399.00 lei/bucata",
                    new_price: ["89", ".99", " $"],
                    link: "https://999club.com/collections/outerwear/products/no-vanity-zip-hoodie-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/WHTHOODIE_360x.png?v=1683250749",
                    description:"999 Mystery Hoodie",
                    old_price: "679.00 lei/bucata",
                    new_price: ["129", ".99", " $"],
                    link: "https://999club.com/collections/outerwear/products/999-mystery-hoodie"
                },
                {
                    img: "https://999club.com/cdn/shop/files/LND-hoody_740x.png?v=1720816128",
                    description:"999 LND HOODIE",
                    old_price: "2099.00 lei/bucata",    
                    new_price: ["89", ".99", " $"],
                    link: "https://999club.com/collections/outerwear/products/999-lnd-hoodie"    
                },  
                {
                    img: "https://999club.com/cdn/shop/files/999-ZIP-THRU-KASH-HOODIE-FADED-BLACK-1_740x.jpg?v=1705523540",
                    description:"999 ZIP THRU KASH HOODIE FADED BLACK",
                    old_price: "2799.00 lei/bucata",
                    new_price: ["240", ".00", " $"],
                    link: "https://999club.com/collections/outerwear/products/999-zip-thru-kash-hoodie-faded-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/THIRTEENSTUDIOShoodieNAVYBACK_740x.png?v=1703202031",
                    description:"THIRTEEN STUDIOS HOODIE NAVY",
                    old_price: "2599.00 $",
                    new_price: ["199", ".00", " $"],
                    link: "https://999club.com/collections/outerwear/products/thirteen-studios-hoodie-navy"
                },
                {
                    img: "https://999club.com/cdn/shop/files/999-KOLLAGE-JACKET-FADED-BLACK-1_740x.jpg?v=1705523202",
                    description:"999 KOLLEGE JACKET - FADED BLACK",
                    old_price: "340.00 $",
                    new_price: ["450", ".00", " $"],
                    link: "https://999club.com/collections/outerwear/products/skribed-king-jacket"
                },
                {
                    img: "https://999club.com/cdn/shop/files/CLASSIC-JACKET-999-BLACK-WAX-1_740x.jpg?v=1705525015",
                    description:"CLASSIC JACKET 999 BLACK WAX",
                    old_price: "249.00 $",
                    new_price: ["280", ".00", " $"],
                    link: "https://999club.com/collections/outerwear/products/classic-jacket-999-black-wax"
                },
                {
                    img: "https://999club.com/cdn/shop/files/THIRTEENSTUDIOShoodieAshBACK_740x.png?v=1703201414",
                    description:"THIRTEEN STUDIOS HOODIE ASH",
                    old_price: "1798.99 $",
                    new_price: ["199", ".00", " $"],
                    link: "https://999club.com/collections/outerwear/products/thirteen-studios-hoodie-ash"
                }
            ]
        },
        {
            button: "Tops",
            products: [
                {
                    img: "https://999club.com/cdn/shop/files/WHTTEEMYSTERY_360x.png?v=1683250769",
                    description:"999 Mystery Tee",
                    old_price: "49.90 lei/m2",
                    new_price: ["49", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/999-mystery-tee"
                },
                {
                    img: "https://999club.com/cdn/shop/files/juice-wrld-free-tee-fre-white_740x.png?v=1703096054",
                    description:"JWD 2023 OFFICIAL TEE",
                    old_price: "64.90 lei/m2",
                    new_price: ["19", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/free-tee-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/whitelongsleevefront_740x.png?v=1703095245",
                    description:"EYEBALL LONGSLEEVE WHITE",
                    old_price: " 129.00 lei/m2",
                    new_price: ["64", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/eyeball-longsleeve-white"
                },
                {
                    img: "https://999club.com/cdn/shop/files/RADIOLOGY-KASH-SS-TEE-BLACK-1_740x.jpg?v=1705527028",
                    description:"RADIOLOGY KASH SS TEE - BLACK",
                    old_price: "59.90 lei/m2",
                    new_price: ["120", ".00", " $"],
                    link: "https://999club.com/collections/tops/products/radiology-kash-ss-tee-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/GBGR-LD-TEE-02_740x.png?v=1716510190",
                    description:"LUCID TEE GBGR - BLACK",
                    old_price: "49.90 lei/m2",
                    new_price: ["39", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/lucid-tee-gbgr-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/lace-it-tee-white_740x.png?v=1706209562",
                    description:"LACE IT COVER TEE - WHITE",
                    old_price: "64.90 lei/m2",
                    new_price: ["45", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/lace-it-cover-tee-white"
                },
                {
                    img: "https://999club.com/cdn/shop/files/LND-TEE-BLACK_740x.png?v=1720816287",
                    description:"LND COLOR TEE - BLACK",
                    old_price: " 129.00 lei/m2",
                    new_price: ["39", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/lnd-color-tee-black"
                },
                {
                    img: "https://999club.com/cdn/shop/files/LILAC-TEE-FRONT_740x.png?v=1703094501",
                    description:"EDEN TEE",
                    old_price: "59.90 lei/m2",
                    new_price: ["39", ".99", " $"],
                    link: "https://999club.com/collections/tops/products/eden-tee"
                },
            ]
        },
        {
            button: "Bottoms",
            products: [
                {
                    img: "https://999club.com/cdn/shop/files/BLUE99SHORTSFRONT_740x.png?v=1684880251",
                    description:"999 TERRY SHORT BLUE",
                    old_price: "750.00 lei/bucata",
                    new_price: ["49", ".99", " $"],
                    link: "https://999club.com/collections/bottoms/products/999-terry-short-blue"
                },
                {
                    img: "https://999club.com/cdn/shop/files/No_vanity-Reflective_740x.png?v=1720815920",
                    description:"REFLECTIVE NO VANITY SHORTS",
                    old_price: "889.00 lei/bucata",
                    new_price: ["60", ".00", " $"],
                    link: "https://999club.com/collections/bottoms/products/reflective-no-vanity-shorts"
                },
                {
                    img: "https://999club.com/cdn/shop/files/MAXX-OPERATOR-PANT-K9-STONED-1_740x.jpg?v=1705525782",
                    description:"MAXX OPERATOR JEANS K9 - STONED BLUE DENIM",
                    old_price: "5260.00 lei/bucata",
                    new_price: ["240", ".00", " $"],
                    link: "https://999club.com/collections/bottoms/products/maxx-operator-k9-stoned-jeans"
                },
                {
                    img: "https://999club.com/cdn/shop/files/CHITCH-TRASHED-DEVIL-1_740x.jpg?v=1705524553",
                    description:"CHITCH TRASHED DEVIL JEANS",
                    old_price: "2190.00 lei/bucata",
                    new_price: ["240", ".00", " $"],
                    link: "https://999club.com/collections/bottoms/products/chitch-trashed-devil-jeans"
                }
            ]
        },
        {
            button: "Accessories",
            products: [
                {
                    img: "https://999club.com/cdn/shop/files/Layer10_740x.jpg?v=1684857181",
                    description:"NP RECORDS FOR JUICE WRLD GREATEST MATCH-HITS (GOODBYE AND GOOD RIDDANCE COLLECTION)",
                    old_price: "548.99 lei/bucata",
                    new_price: ["24", ".99", " $"],
                    link: "https://999club.com/collections/accessories/products/np-records-for-juice-wrld-greatest-match-hits-goodbye-and-good-riddance-collection"
                },
                {
                    img: "https://999club.com/cdn/shop/products/OJMain_740x.jpg?v=1671236359",
                    description:'Jimbo Phillips x Juice WRLD "Orange Juice" Print',
                    old_price: "99.00 lei/bucata",
                    new_price: ["49", ".99", " $"],
                    link: "https://999club.com/collections/accessories/products/jimbo-phillips-x-juice-wrld-orange-juice-print"
                },
                {
                    img: "https://999club.com/cdn/shop/files/LND-SKATEDECK_740x.png?v=1720815959",
                    description:"LND SKATE DECK",
                    old_price: "99.90 lei/bucata",
                    new_price: ["74", ".99", " $"],
                    link: "https://999club.com/collections/accessories/products/lnd-skate-deck"
                },
                {
                    img: "https://999club.com/cdn/shop/files/lnd-snapback_740x.png?v=1720815734",
                    description:"LEGENDS NEVER DIE SNAPBACK",
                    old_price: "449.00 lei/bucata",
                    new_price: ["34", ".99", " $"],
                    link: "https://999club.com/collections/accessories/products/legends-never-die-snapback"
                }
            ]
        }
    ];
    function sliderProduse(slider, sliderId, title_text, nr){
        function scrollTIV(tag){
            if(tag.tagName){
                tag.scrollIntoView({
                    behavior: `smooth`,
                    block: `nearest`,
                    inline: `start`
                });
            }
            else{
                console.log(`"Tag" nu este eticheta html.`);
            }
        }
        function create(x){
            return document.createElement(x);
        }
        let buttons;
        slider[0].button ? buttons = true : buttons = false;
        let index_p = 1,
            index_c = 1,
            p_on_display = 4,
            slider_bttns,
            title = create("div"),
            slider_of_hidden = create("div"),
            arr_bttn_l = create("div"),
            arr_bttn_r = create("div"),
            slider_p = create("div");
        sliderId.classList.add("column", "slider-with-title")
        title.classList.add("slider-title");
        title.classList.add("white-glow");
        title.classList.add("neon");
        title.innerText = title_text;
        sliderId.appendChild(title);
        if(window.innerWidth <= 1320){
            p_on_display = 3;
        }
        if(window.innerWidth <= 920){
            p_on_display = 2;
        }
        console.log(p_on_display);
        if(buttons){
            slider_bttns = create("div");
            slider_bttns.classList.add("slider-buttons");
            sliderId.appendChild(slider_bttns);
        }
        slider_of_hidden.classList.add("slider-products-overflow-hidden");
        sliderId.appendChild(slider_of_hidden);
        arr_bttn_l = create("div");
        arr_bttn_l.classList.add("slider-button-left");
        arr_bttn_l.innerHTML = `<svg width="10px" height="6px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>`;
        slider_of_hidden.appendChild(arr_bttn_l);
        arr_bttn_r = create("div");
        arr_bttn_r.classList.add("slider-button-right");
        arr_bttn_r.innerHTML = `<svg width="10px" height="6px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>`;
        slider_of_hidden.appendChild(arr_bttn_r);
        slider_p.classList.add("slider-products")
        slider_of_hidden.appendChild(slider_p);
        let nr_of_products = 0;
        for(let i = 0; i < slider.length; i++){
            for(let j = 0; j < slider[i].products.length; j++){
                nr_of_products++;
            }
        }
        slider_p.style.minWidth = `calc(100% / ${p_on_display} * ${nr_of_products})`;
        let product_index = 1;
        for(let i = 0; i < slider.length; i++){
            for(let j = 0; j < slider[i].products.length; j++){
                let product = create("a"),
                    label = create("div"),
                    fav = create("div"),
                    a_img = create("a"),
                    img = create("img"),
                    reviews = create("img"),
                    text = create("div"),
                    cut_price = create("div"),
                    price = create("div"),
                    cart_bttn = create("a");
                product.classList.add("product");
                product.target = "_blank";
                product.href = slider[i].products[j].link;
                product.setAttribute("id", `s${nr}_product${i + 1}_${product_index++}`);
                product.style.maxWidth = `calc(100% / ${nr_of_products} - 10px)`;
                product.style.minWidth = `calc(100% / ${nr_of_products} - 10px)`;
                product.style.margin = `0px 5px`;
                slider_p.appendChild(product);
                label.classList.add("label");
                label.innerText = "999 club";
                product.appendChild(label);
                a_img.classList.add("product-img");
                product.appendChild(a_img);
                img.src = slider[i].products[j].img;
                a_img.appendChild(img);
                text.classList.add("product-text");
                text.innerText = slider[i].products[j].description;
                product.appendChild(text);
                price.classList.add("price");
                price.innerHTML = `<b>${slider[i].products[j].new_price[0]}</b><div class="small-price"><b>${slider[i].products[j].new_price[1]}</b>${slider[i].products[j].new_price[2]}</div>`;
                product.appendChild(price);
                cart_bttn.classList.add("add-to-cart");
                cart_bttn.target = "_blank";
                cart_bttn.href = slider[i].products[j].link;
                let cart_bttn_text = window.innerWidth > 1320 ? "See product" : "Buy";
                cart_bttn.innerHTML = `<div class="blue-button">${cart_bttn_text}</div><div class="cart-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR4nO3WsQpBURjA8VsmKwNG5Q1MJoOFlFmKJ7BY5QHkJZTJG9ydYrPZhZXBoA                                                h/XX1ic45z7pH4z1/n11nOdzzvJwPGPFoA1U/AQScg4wS/BwxuNHQ8lwEVgaeu4SiwB85AwjXuy60bruEm4TR6BadDglcqt56HAPdV4F4IcE0FzltGL0BSBY4AG4vw7CX6hA8twl0duG4RLujAMVkYpu2DF1EZFnxiAfa1UIHbFuDWO3AK2BmgWyCuDQueC9YkcNQAD/LByL6F/m5AGVgHGwYomc4pJwfdW5rOfQVckkOXQNF07p/nqit4etkTHpfOQQAAAABJRU5ErkJggg=="></div>`;
                product.appendChild(cart_bttn);
                if(j == 0 && buttons){
                    let slider_bttn = create("div");
                    if (i == 0) {
                        slider_bttn.classList.add("slider-button-active");
                    }
                    slider_bttn.innerText = slider[i].button;
                    slider_bttns.appendChild(slider_bttn);
                    slider_bttn.onclick = () => {
                        if (parseInt(product.id.substr(12,3)) != index_p){
                            slide(product, "check");
                        }
                    }
                }
            }
        }
        slider_p.style.marginLeft = `calc(100% / ${p_on_display} * -${Math.floor((nr_of_products - p_on_display) / 2)})`;

        while(Math.floor((slider_p.children.length - p_on_display) / 2) != Array.from(slider_p.children).indexOf(document.getElementById(`s${nr}_product1_1`))){
            if(Math.floor((slider_p.children.length - p_on_display) / 2) > Array.from(slider_p.children).indexOf(document.getElementById(`s${nr}_product1_1`))){
                slider_p.insertBefore(slider_p.lastElementChild, slider_p.firstElementChild);
            } 
            else{
                slider_p.appendChild(slider_p.firstElementChild);
            }
        }
        let arr_bttn_l_cooldown = true;
        arr_bttn_l.onclick = ()=>{
            if (arr_bttn_l_cooldown){
                slide(slider_p.children[Math.floor((slider_p.children.length - p_on_display) / 2) - p_on_display]);
                arr_bttn_l_cooldown = false;
                setTimeout(()=>{
                    arr_bttn_l_cooldown = true;
                }, 600);
            }
        }
        let arr_bttn_r_cooldown = true;
        arr_bttn_r.onclick = ()=>{
            if (arr_bttn_r_cooldown){
                slide(slider_p.children[Math.floor((slider_p.children.length - p_on_display) / 2) + p_on_display]);
                arr_bttn_r_cooldown = false;
                setTimeout(()=>{
                    arr_bttn_r_cooldown = true;
                }, 600);
            }
        }

        // let old_offset_left = slider_p.offsetLeft
        // window.onscroll = ()=>{
        //     if(slider_p.offsetLeft != old_offset_left){
        //      old_offset_left = slider_p.offsetLeft
        //      let doc = document.body,
        //          left = window.pageXOffset || doc.scrollLeft,
        //          top = window.pageYOffset || doc.scrollTop;
        //      slider_p.children[(slider_p.children.length - p_on_display) / 2].scrollIntoView({
        //          block: `nearest`,
        //          inline: `start`
        //      })
        //      window.scrollTo(left, top,{
        //          behavior: "instant"
        //      });
        //     }
        // } //works for only one slider per page

        function resolutionAdjustments(x){
            console.log(x);
            p_on_display = x;
            slider_p.style.minWidth = `calc(100% / ${p_on_display} * ${nr_of_products})`;
            slider_p.style.maxWidth = `calc(100% / ${p_on_display} * ${nr_of_products})`;
            for(let i = 0; i < slider_p.children.length; i++){
                let p = slider_p.children[i];
                p.style.maxWidth = `calc(100% / ${nr_of_products} - 10px)`;
                p.style.minWidth = `calc(100% / ${nr_of_products} - 10px)`;
            }
            slider_p.style.marginLeft = `calc(100% / ${p_on_display} * -${Math.floor((nr_of_products - p_on_display) / 2)})`;
        }

        function handleDeviceChange(a, x, y) {
            if (a.matches) {
                resolutionAdjustments(x);
                for(let i = 0; i < slider_p.children.length; i++){
                    let add_to_cart = slider_p.children[i].getElementsByClassName("blue-button")[0];
                    add_to_cart.innerText = "Buy";
                }
            }
            else{
                resolutionAdjustments(y);
                for(let i = 0; i < slider_p.children.length; i++){
                    let add_to_cart = slider_p.children[i].getElementsByClassName("blue-button")[0];
                    if(a.media == "(max-width: 1320px)") add_to_cart.innerText = "See product";
                }
            } 
        }
        const tablet = window.matchMedia("(max-width: 1320px)");

        tablet.addListener(handleTablet);

        function handleTablet(){
            handleDeviceChange(tablet, 3, 4);
        }

        const phone = window.matchMedia("(max-width: 920px)");

        phone.addListener(handlePhone);

        function handlePhone(){
            handleDeviceChange(phone, 2, 3);
        }
        window.onresize = () => {
            let original_scroll = window.pageYOffset;
            slide(slider_p.children[Math.floor((slider_p.children.length - p_on_display) / 2)]);
            scrollTo(0, original_scroll);
        }

        function slide(product, check = null){
            // document.querySelector("body").style.overflowY = "hidden";
            // setTimeout(()=>{
            //  document.querySelector("body").style.overflowY = "scroll";
            // },600);
            slider_p.style.marginLeft = "0";
            let previous_product = document.getElementById(`s${nr}_product${index_c}_${index_p}`);
            previous_product.scrollIntoView({
                inline: "start",
                block: "nearest"
            });
            if(check == "check"){
                let change = null,
                    end;
                if((parseInt(product.id.substr(12,3)) > index_p) && (Array.from(slider_p.children).indexOf(document.getElementById(`s${nr}_product${parseInt(product.id.substr(10,1))}_${parseInt(product.id.substr(12,3)) + p_on_display - 1}`)) < Array.from(slider_p.children).indexOf(previous_product))){
                    change = "under";
                    end = Array.from(slider_p.children).indexOf(document.getElementById(`s${nr}_product${parseInt(product.id.substr(10,1))}_${parseInt(product.id.substr(12,3)) + p_on_display - 1}`));
                }
                if((parseInt(product.id.substr(12,3)) < index_p) && (Array.from(slider_p.children).indexOf(product) > Array.from(slider_p.children).indexOf(previous_product))){
                    change = "over";
                    end = Array.from(slider_p.children).indexOf(product);
                }
                if(change){
                    let i = 0,
                        k = 1,
                        found = true;
                    if (change == "over"){
                        i = slider_p.children.length - 1;
                        k = -1;
                    }
                    while (found){
                        if (change == "under"){
                            slider_p.appendChild(slider_p.firstElementChild);
                        }
                        else{
                            slider_p.insertBefore(slider_p.lastElementChild, slider_p.firstElementChild)
                        }
                        if(end == i){
                            found = false;
                        }
                        i += k;
                    }
                }
            }
            index_p = parseInt(product.id.substr(12,3));
            if(index_c != parseInt(product.id.substr(10,1))){
                if (buttons){
                    slider_bttns.children[index_c - 1].classList.remove("slider-button-active");
                    slider_bttns.children[parseInt(product.id.substr(10,1)) - 1].classList.add("slider-button-active");
                }
                index_c = parseInt(product.id.substr(10,1));
            }
            scrollTIV(product);
            setTimeout(()=>{
                let x = 0;
                while(Math.floor((slider_p.children.length - p_on_display) / 2) != Array.from(slider_p.children).indexOf(product)){
                    if(Math.floor((slider_p.children.length - p_on_display) / 2) > Array.from(slider_p.children).indexOf(product)){
                        slider_p.insertBefore(slider_p.lastElementChild, slider_p.firstElementChild);
                        x--;
                    } 
                    else{
                        slider_p.appendChild(slider_p.firstElementChild);
                        x++;
                    }
                }
                // console.log((100 * nr_of_products / p_on_display - 100) / 2);
                if(100 / p_on_display * x < (100 * nr_of_products / p_on_display - 100) / 2) slider_p.style.marginLeft = `calc((100% / ${p_on_display} * ${x} + 5px)`;
                else slider_p.style.marginLeft = `calc((100% / ${p_on_display} * ${x})`;
            }, 1);
        }
    }
    if(location.href.split("/").slice(-1)[0] == "merch.html") sliderProduse(slider_products, sliderProduse1, "Recommended products", 1);

    // function scrollTop(){
    //     document.getElementById("scrollTop").onclick = ()=>{
    //         document.getElementsByClassName("header")[0].scrollIntoView({
    //             behavior: "smooth"
    //         });
    //     }
    // }
    // scrollTop();
    let categorii = ["",
        {
            img: "https://999club.com/cdn/shop/files/LND-hoody-BACK_360x.png?v=1720816128",
            title: "Outwear",
            text: "16 products",
            link: "https://999club.com/collections/outerwear"
        },
        {
            img: "https://999club.com/cdn/shop/files/LEGENDS-LIVE-FOREVER-BACK_360x.png?v=1720816573",
            title: "Tops",
            text: "36 products",
            link: "https://999club.com/collections/tops"
        },
        {
            img: "https://999club.com/cdn/shop/files/GBGR-LD-SHORTS-02_312b6d88-be5b-43b5-8471-5df1bf5e7dbc_360x.png?v=1716572524",
            title: "Bottoms",
            text: "13 products",
            link: "https://999club.com/collections/bottoms"
        },
        {
            img: "https://999club.com/cdn/shop/products/ScreenShot2022-11-25at1.30.43AM_360x.png?v=1679340061",
            title: "Footwear",
            text: "3 products",
            link: "https://999club.com/collections/footwear"
        },
        {
            img: "https://999club.com/cdn/shop/files/lnd-snapback_360x.png?v=1720815734",
            title: "Accessories",
            text: "16 products",
            link: "https://999club.com/collections/accessories"
        },
        {
            img: "https://999club.com/cdn/shop/products/output-onlinepngtools_360x.png?v=1679524938",
            title: "Collections",
            text: "90 products",
            link: "https://999club.com/collections/new-arrivals"
        },
        {
            img: "https://999club.com/cdn/shop/files/QUILTED-LS-SHIRT-K9-STONED-2_360x.jpg?v=1705526568",
            title: "KSUBI x 999 2.0",
            text: "14 products",
            link: "https://999club.com/collections/ksubi-x-juice-wrld"
        },
        {
            img: "https://999club.com/cdn/shop/products/JW_FD-vinyl-back_360x.png?v=1647901122",
            title: "Fighting Demons",
            text: "3 products",
            link: "https://999club.com/collections/fighting-demons"
        },
        {
            img: "https://999club.com/cdn/shop/files/Layer28_360x.jpg?v=1684857181",
            title: "Goodbye & Good Riddance",
            text: "5 products",
            link: "https://999club.com/collections/goodbye-good-riddance"
        },
        {
            img: "https://999club.com/cdn/shop/files/whitelongsleeveback_360x.png?v=1703095241",
            title: "Juice WRLD day",
            text: "10 products",
            link: "https://999club.com/collections/jwd-2023"
        }
    ];
    function Categorii(){
        for(let i = 1; i < categorii.length; i++){
            let cat = document.createElement("a"),
                img = document.createElement("img"),
                cat_text = document.createElement("div"),
                title = document.createElement("div"),
                arr = document.createElement("span"),
                p = document.createElement("p");
            cat.classList.add("categorie");
            cat.target = "_blank";
            cat.href = categorii[i].link;
            catContainer.appendChild(cat);
            img.src = categorii[i].img;
            cat.appendChild(img);
            cat_text.classList.add("categorie-text");
            cat.appendChild(cat_text);
            title.innerText = categorii[i].title;
            arr.innerText = " ›";
            title.appendChild(arr);
            cat_text.appendChild(title);
            p.innerText = categorii[i].text;
            cat_text.appendChild(p);
        }
    }
    if(location.href.split("/").slice(-1)[0] == "merch.html") Categorii();
    let neonElements = document.querySelectorAll('.neon');
    setInterval(()=>{
        neonElements.forEach(element => {
            element.style.opacity ='0.8'
            element.style.color = '#FF4BD6';
            element.style.textShadow = '0 0 5px #FF4BD6, 0 0 10px#FF4BD6, 0 0 15px #FF4BD6, 0 0 20px #0099ff';
            setTimeout(()=>{
                element.style.opacity ='1'
                element.style.color = 'white'; 
                element.style.textShadow = 'white 0px 0px 5px';
                setTimeout(()=>{
                    element.style.opacity ='0.8'
                    element.style.color = '#FF4BD6';
                    element.style.textShadow = '0 0 5px #FF4BD6, 0 0 10px#FF4BD6, 0 0 15px #FF4BD6, 0 0 20px #0099ff';
                    setTimeout(()=>{
                        element.style.opacity ='1'
                        element.style.color = 'white'; 
                        element.style.textShadow = 'white 0px 0px 5px';
                        setTimeout(()=>{
                            element.style.opacity ='0.8'
                            element.style.color = '#FF4BD6';
                            element.style.textShadow = '0 0 5px #FF4BD6, 0 0 10px#FF4BD6';
                            setTimeout(()=>{
                                element.style.opacity ='1'
                                element.style.color = 'white'; 
                                element.style.textShadow = 'white 0px 0px 5px';
                            }, 1000);
                        },200);
                    }, 100);
                },300);
            }, 100);
        });
    }, 5000);
});
