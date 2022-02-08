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
    x = 0
    $('.next').on('click', function(){
        x = (x <= 100) ? (x + 100) : 0;
        $('figure').css('left', -x+'%')
        console.log(x)
    })

    $('.prev').on('click', function(){
        x = (x >= 100) ? (x - 100) : 0;
        $('figure').css('left', -x+'%')
    })

})