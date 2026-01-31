const quirksEnabled = true;

function codexxQuirk(text) {
    return text
        .replace(/o/g, "0")
        .replace(/e/g, "3")
        .replace(/s/g, "2")
        .replace(/i/g, "1")
        .replace(/x/g, "xx");
}

document.addEventListener("DOMContentLoaded", () => {
    if (!quirksEnabled) return;

    const codexLines = document.querySelectorAll(".dialogue.codexx");

    codexLines.forEach(line => {
        line.textContent = codexxQuirk(line.textContent);
    });
});


