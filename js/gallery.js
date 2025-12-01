//Gallery lehe piltidele klõpsamine
//Kasutatud FsLightbox CDN veebis saadaval olevat otsefaili https://cdn.jsdelivr.net/npm/fslightbox/index.js
//Kood js failis on ise kirjutatud, kuid abiks kasutasin https://fslightbox.com/javascript/documentation ja https://developer.mozilla.org/en-US/docs/Web/API/Document

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