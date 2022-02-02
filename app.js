function showContent(section) {
    const s = document.getElementById(section);

    if (section === 'about') {
        if (s.style.maxHeight === "530px") {
            s.style.maxHeight = "0";
        } else {
            s.style.maxHeight = "530px";
        }
    } else if (section === 'projects') {
        if (s.style.maxHeight === "520px") {
            s.style.maxHeight = "0";
        } else {
            s.style.maxHeight = "520px";
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