function showContent(section) {
    const s = document.getElementById(section);
    if (s.style.display === "block") {
        s.style.display = "none";
    } else {
        s.style.display = "block";
    }
    const a = document.getElementById(section + "-arrow");
    if (a.style.transform === "rotate(-135deg)") {
        a.style.transform = "rotate(45deg)";
    } else {
        a.style.transform = "rotate(-135deg)";
    }
    
}