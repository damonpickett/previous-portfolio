function showContent(section) {
    const s = document.getElementById(section);
    if (s.style.maxHeight === "510px") {
        s.style.maxHeight = "0";
    } else {
        s.style.maxHeight = "510px";
    }
    const a = document.getElementById(section + "-arrow");
    if (a.style.transform === "rotate(-135deg)") {
        a.style.transform = "rotate(45deg)";
    } else {
        a.style.transform = "rotate(-135deg)";
    }
    
}