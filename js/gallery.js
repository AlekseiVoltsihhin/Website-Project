//gallery.js gallery.html-i jaoks
//Põhimõte: Gallery lehe piltidele klõpsamine, et neid suurendada ja nende vahel liikuda
//Selle töötamiseks on gallery.html failis kasutatud FsLightbox CDN veebis saadaval olevat otsefaili https://cdn.jsdelivr.net/npm/fslightbox/index.js
//Koodi autor: Reelika Möller, abiks kasutasin https://fslightbox.com/javascript/documentation ja https://developer.mozilla.org/en-US/docs/Web/API/Document

//peab ootama, kuni HTML on täielikult laetud
document.addEventListener("DOMContentLoaded", () => {

    //kõik galerii pildid, millel on .img-box a
    const pildid = document.querySelectorAll(".img-box a");

    //Läbi iga pildi lisab klikkamise sündmuse
    pildid.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); //peatab lingi vaikimisi laadimise

            //Avab lightboxi vastava pildi indeksiga
            fsLightbox.open(index);

        });
    });
});