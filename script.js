const selectElement = document.getElementById("kitap-turleri")

selectElement.addEventListener("change", optionSecildi)

function optionSecildi() {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const optionValue = selectedOption.value;
    const optionText = selectedOption.text;

    console.log("Seçilen değer:", optionValue);
    console.log("Seçilen metin:", optionText);
}


const kitap_turleri = document.getElementsByClassName("kitap-turleri")[0]
const polisiye = document.getElementsByClassName("polisiye")[0]
const felsefe = document.getElementsByClassName("felsefe")[0]
const bilimkurgu = document.getElementsByClassName("bilimkurgu")[0]
const tarih = document.getElementsByClassName("tarih")[0]
const cizgiroman = document.getElementsByClassName("cizgiroman")[0]

const populer_kitaplar = document.getElementsByClassName("populer-kitaplar")[0]
const tur_baslik = document.getElementsByClassName("tur-baslik")[0]

kitap_turleri.addEventListener("click", populerSelected)

window.addEventListener("DOMContentLoaded", windowReload)

function windowReload() {
    if(tur_baslik.textContent === "POPÜLER KİTAPLAR") {
        populerSelected()
    } else {
        console.log("değil")
    }
}

function populerSelected() {
    populer_kitaplar.style.display = "flex"
    tur_baslik.textContent = "POPÜLER KİTAPLAR"
    console.log("popüler - kitap türleri")
}

polisiye.addEventListener("click", polisiyeSelected)

function polisiyeSelected() {
    kitap_turleri.removeEventListener("click", populerSelected)
    // felsefe.removeEventListener("click", felsefeSelected)
    // bilimkurgu.removeEventListener("click", bilimkurguSelected)
    // cizgiroman.removeEventListener("click", cizgiromanSelected)
    // tarih.removeEventListener("click", tarihSelected)

    populer_kitaplar.style.display = "none"
    tur_baslik.textContent = "Polisiye Kitapları"
    console.log("polisiye")

    // kitap_turleri.addEventListener("click", populerSelected)
    // felsefe.addEventListener("click", felsefeSelected)
    // bilimkurgu.addEventListener("click", bilimkurguSelected)
    // tarih.addEventListener("click", tarihSelected)
    // cizgiroman.addEventListener("click", cizgiromanSelected)
}

felsefe.addEventListener("click", felsefeSelected)

function felsefeSelected() {
    // polisiye.removeEventListener("click", polisiyeSelected)
    // kitap_turleri.removeEventListener("click", populerSelected)
    // bilimkurgu.removeEventListener("click", bilimkurguSelected)
    // cizgiroman.removeEventListener("click", cizgiromanSelected)
    // tarih.removeEventListener("click", tarihSelected)

    populer_kitaplar.style.display = "none"
    tur_baslik.textContent = "Felsefe Kitapları"
    console.log("felsefe")
}

bilimkurgu.addEventListener("click", bilimkurguSelected)

function bilimkurguSelected() {
    // polisiye.removeEventListener("click", polisiyeSelected)
    // kitap_turleri.removeEventListener("click", populerSelected)
    // cizgiroman.removeEventListener("click", cizgiromanSelected)
    // tarih.removeEventListener("click", tarihSelected)
    // felsefe.removeEventListener("click", felsefeSelected)

    console.log("bilimkurgu")
    populer_kitaplar.style.display = "none"
    tur_baslik.textContent = "Bilim Kurgu Kitapları"
}

tarih.addEventListener("click", tarihSelected)

function tarihSelected() {
    // polisiye.removeEventListener("click", polisiyeSelected)
    // kitap_turleri.removeEventListener("click", populerSelected)
    // bilimkurgu.removeEventListener("click", bilimkurguSelected)
    // cizgiroman.removeEventListener("click", cizgiromanSelected)
    // felsefe.removeEventListener("click", felsefeSelected)

    populer_kitaplar.style.display = "none"
    tur_baslik.textContent = "Tarih Kitapları"
    console.log("tarih")
}

cizgiroman.addEventListener("click", cizgiromanSelected)

function cizgiromanSelected() {
    // polisiye.removeEventListener("click", polisiyeSelected)
    // kitap_turleri.removeEventListener("click", populerSelected)
    // bilimkurgu.removeEventListener("click", bilimkurguSelected)
    // tarih.removeEventListener("click", tarihSelected)
    // felsefe.removeEventListener("click", felsefeSelected)

    populer_kitaplar.style.display = "none"
    tur_baslik.textContent = "Çizgi Roman Kitapları"
    console.log("cizgiroman")
}



