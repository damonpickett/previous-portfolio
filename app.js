function showContent(section) {
    const s = document.getElementById(section);

    if (section === 'about') {
        if (s.style.maxHeight === "530px") {
            s.style.maxHeight = "0";
        } else {
            s.style.maxHeight = "530px";
        }
    } else if (section === 'projects') {
        if (s.style.maxHeight === "530px") {
            s.style.maxHeight = "0";
        } else {
            s.style.maxHeight = "530px";
        }
    } else { 
        if (s.style.maxHeight === "500px") {
            s.style.maxHeight = "0";
        } else {
            s.style.maxHeight = "500px";
        }
    }
    const a = document.getElementById(section + "-arrow");
    if (a.style.transform === "rotate(-135deg)") {
        a.style.transform = "rotate(45deg)";
    } else {
        a.style.transform = "rotate(-135deg)";
    }
}

// JQUERY SLIDER

$(document).ready(function(){
    $('.next').on('click', function(){
        let currentImg = $('.active')
        let nextImg = currentImg.next()

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10)
            nextImg.addClass('active').css('z-index', 10)
        }
    })

    $('.prev').on('click', function(){
        let currentImg = $('.active')
        let prevImg = currentImg.prev()

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10)
            prevImg.addClass('active').css('z-index', 10)
        }
    })

})