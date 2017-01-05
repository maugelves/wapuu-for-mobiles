"use strict";

var wapuus = [
    {
        name: "Monk wapuu",
        thumb: "img/monk_wapuu-540x540.png",
        url: "img/monk_wapuu.png"
    },
    {
        name: "Nepuu",
        thumb: "img/nepuu-540x540.png",
        url: "img/nepuu.png"
    },
    {
        name: "Crab wapuu",
        thumb: "img/crab_wapuu-540x540.png",
        url: "img/crab_wapuu.png"
    },
    {
        name: "Wapuubee",
        thumb: "img/bumblebee_wapuu-540x540.png",
        url: "img/bumblebee_wapuu.png"
    },
    {
        name: "Lumberjack wapuu",
        thumb: "img/lumberjack_wapuu-540x540.png",
        url: "img/lumberjack_wapuu.png"
    },
    {
        name: "Gianduu wapuu",
        thumb: "img/gianduu_wapuu-540x540.png",
        url: "img/gianduu_wapuu.png"
    },
    {
        name: "Santa wapuu",
        thumb: "img/santawapuu-540x540.png",
        url: "img/santa_wapuu.png"
    },
    {
        name: "Wapuutah",
        thumb: "img/wapuutah-540x540.png",
        url: "img/wapuutah.png"
    },
    {
        name: "Taekwondo Wapuu",
        thumb: "img/taekwon-red-wapuu-540x540.png",
        url: "img/taekwon-red-wapuu.png"
    },
    {
        name: "Wapuunder",
        thumb: "img/wapuunder-540x540.png",
        url: "img/wapuunder.png"
    },
    {
        name: "Marcel",
        thumb: "img/wapuu-france-540x540.png",
        url: "img/wapuu-france.png"
    },
    {
        name: "Space Wapuu",
        thumb: "img/space_wapuu-540x540.png",
        url: "img/space_wapuu.png"
    },
    {
        name: "Punk Wapuu",
        thumb: "img/punk_wapuu-540x540.png",
        url: "img/punk_wapuu.png"
    },
    {
        name: "Wapuujlo",
        thumb: "img/wapuujlo-540x540.png",
        url: "img/wapuujlo.png"
    },
    {
        name: "Kabuki Wapuu",
        thumb: "img/kabuki_wapuu1-540x540.png",
        url: "img/kabuki_wapuu1.png"
    },
    {
        name: "Okita Wapuu",
        thumb: "img/okita-wapuu-540x540.png",
        url: "img/okita-wapuu.png"
    },
    {
        name: "Jpop Wapuu",
        thumb: "img/jpop_wapuu-540x540.png",
        url: "img/jpop_wapuu.png"
    },
    {
        name: "Vitruvian Wapuu",
        thumb: "img/vitruvian_wapuu-540x540.png",
        url: "img/vitruvian_wapuu.png"
    },
    {
        name: "Ninja Wapuu",
        thumb: "img/ninja_wapuu-540x540.png",
        url: "img/ninja_wapuu.png"
    },
    {
        name: "Mineiro Wapuu",
        thumb: "img/mineiro-wapuu-500x500.png",
        url: "img/mineiro-wapuu.png"
    },
    {
        name: "Swiss Army Wapuu",
        thumb: "img/swiss_wapuu-540x540.png",
        url: "img/swiss_wapuu.png"
    },
    {
        name: "Jedi Wapuu",
        thumb: "img/jedi_wapuu-540x540.png",
        url: "img/jedi_wapuu.png"
    },
    {
        name: "Wapuu on fire",
        thumb: "img/wapuu_on_fire-540x540.png",
        url: "img/wapuu_on_fire.png"
    },
    {
        name: "Edinburgh Wapuu",
        thumb: "img/edinburgh-wapuu-540x540.png",
        url: "img/edinburgh-wapuu.png"
    },
    {
        name: "Mecha Wapuu",
        thumb: "img/mecha_wapuu-540x540.png",
        url: "img/mecha_wapuu.png"
    },
    {
        name: "Original Wapuu",
        thumb: "img/original_wapuu-540x540.png",
        url: "img/original_wapuu.png"
    },
    {
        name: "Winter Wapuu",
        thumb: "img/winter_wapuu1-540x540.png",
        url: "img/winter_wapuu1.png"
    },
    {
        name: "Wapuu World",
        thumb: "img/wapuu_world-540x540.png",
        url: "img/wapuu_world.png"
    },
    {
        name: "Go Kart Wapuu",
        thumb: "img/gokart_wapuu-540x540.png",
        url: "img/gokart_wapuu.png"
    },
    {
        name: "Footbal Wapuu",
        thumb: "img/football_wapuu-540x540.png",
        url: "img/football_wapuu.png"
    },
    {
        name: "Wapuu McFly",
        thumb: "img/wapuu_mcfly-540x540.png",
        url: "img/wapuu_mcfly.png"
    },
    {
        name: "Shingenn Wapuu",
        thumb: "img/wapuda_shingenn-540x540.png",
        url: "img/wapuda_shingenn.png"
    },
    {
        name: "Ghost Busting Wapuu",
        thumb: "img/ghostbuster_wapuu-540x540.png",
        url: "img/ghostbuster_wapuu.png"
    },
    {
        name: "Revolutionary War Wapuu",
        thumb: "img/war_wapuu-540x540.png",
        url: "img/war_wapuu.png"
    },
    {
        name: "Wapuu Der Ber",
        thumb: "img/wapuu-der-ber-540x540.png",
        url: "img/wapuu-der-ber.png"
    }
];
var slider;

var wpmobile = {
    addEventListeners: function(){

        // Selector de Móviles
        var ddl_mobile = document.querySelector('.resolution__select');
        ddl_mobile.addEventListener('change', function(){
            wpmobile.select_mobile(this);
        });


        // Download button click
        var button = document.querySelector('.btn');
        button.addEventListener('click', wpmobile.download_canvas);


        // Colors
        var colors = document.querySelectorAll('.color');
        colors.forEach(color => {
            color.addEventListener('click', wpmobile.click_color);
        });
    },
    changeWappuOnSlideChange: function(index){
        var img = document.querySelector('.owl-item.active.center');

        // Update the result image
        var result_img = document.querySelector('.result__img');
        result_img.setAttribute('src', wapuus[index].url);

    },
    click_color: function(){

        // Remove all the active clases from the colors
        var colors = document.querySelectorAll('.color');
        colors.forEach(color => {color.classList.remove('active');});

        // Add the active class
        this.classList.toggle('active');

        // Update the result image
        var result = document.querySelector('.result');
        result.style.backgroundColor = this.innerHTML;

    },
    download_canvas: function(){

        var result = document.querySelector('.result');

        html2canvas(
            result, {
            onrendered: function(canvas) {
                //theCanvas = canvas;
                document.body.appendChild(canvas);
                // Convert and download as image
                Canvas2Image.saveAsJPEG(canvas);
                // Clean up
                //document.body.removeChild(canvas);
            }
        });

    },
    init: function(){

        // Add Event Listeners
        wpmobile.addEventListeners();

        // Get the wapuus elements
        wpmobile.load_wapuus(function(){
            wpmobile.load_slider();
        });
    },
    load_wapuus: function(callback){
        var wpslist = document.querySelector('.wapuus');

        wapuus.forEach( function(wapuu){
            wpslist.innerHTML += `<img class="wapuu" src="${wapuu.thumb}" alt="${wapuu.name}">`;
        });

        callback();
    },
    load_slider: function(){
        slider = $(".wapuus").owlCarousel({
            center: true,
            dots: false,
            nav: false,
            items: 1,
            margin: 30,
            responsive: {
                1024 : {
                    items: 3
                }
            }
        });

        slider.on('changed.owl.carousel', function(event) {
            wpmobile.changeWappuOnSlideChange(event.item.index);
        });
    },
    select_mobile: function(mobile){
        // Add the size to the Result div
        var result_div = document.querySelector('.result');
        var width = mobile.options[mobile.selectedIndex].getAttribute("data-phs-width");
        var height = mobile.options[mobile.selectedIndex].getAttribute("data-phs-height");
        result_div.style.width = width + "px";
        result_div.style.height = height + "px";
        result_div.style.minWidth = width + "px";
    }
};

window.onload = function(){
    wpmobile.init();
};


