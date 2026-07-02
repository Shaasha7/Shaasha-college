document.addEventListener("DOMContentLoaded", async function () {

    // Load Header
    const headerResponse = await fetch("header.html");
    const headerData = await headerResponse.text();
    document.getElementById("header").innerHTML = headerData;

    // Load Footer
    const footerResponse = await fetch("footer.html");
    const footerData = await footerResponse.text();
    document.getElementById("footer").innerHTML = footerData;

    

});