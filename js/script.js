console.log('ola mundo')
var tituloImage1 = document.getElementById('imageTitle1')
var textoImage1 = document.getElementById('imageLabel1')
var tituloImage2 = document.getElementById('imageTitle2')
var textoImage2 = document.getElementById('imageLabel2')
var tituloImage3 = document.getElementById('imageTitle3')
var textoImage3 = document.getElementById('imageLabel3')
var entradaImagem1 = document.getElementById('imageEntry1')
var entradaImagem2 = document.getElementById('imageEntry2')
var entradaImagem3 = document.getElementById('imageEntry3')
var boxImage1 = document.getElementById('imgStyle1')

entradaImagem1.addEventListener('mouseenter', ()=>{
    tituloImage1.innerHTML = "Lorem Lorem Lorem Lorem"
    boxImage1.style.boxShadow = '2px 2px 2px 2px rgba(0, 0, 0, 0.370)'
    boxImage1.style.backgroundColor = 'rgba(0, 0, 0, 0.750)'
})
entradaImagem1.addEventListener('mouseleave', ()=>{
    tituloImage1.innerHTML = "Titulo 2"
    boxImage1.style.boxShadow = ''
    boxImage1.style.backgroundColor = 'rgba(0, 0, 0, 0.400)'
})