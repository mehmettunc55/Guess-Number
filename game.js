

let rasgeleSayi = Math.ceil(Math.random()*20)


let mesaj  = document.querySelector('.msg')
let skor = 10
let enYuksekSkor = 0

document.querySelector('check').addEventListener('click', () => {
    const tahmin = document.querySelector('.guess').value

if (!tahmin) {
    mesaj.textContent = 'Lütfen Bir Sayi Giriniz'
} else if (tahmin === rasgeleSayi){
    mesaj.textContent = 'Tebrikler Bildiniz...👌'
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').textContent = rasgeleSayi
} else {

if (skor>1) {
    skor--;
    document.querySelector('.score').textContent = skor
    tahmin<rasgeleSayi ? mesaj.textContent = 'Artir' : 
} else {
    
}

}

})

