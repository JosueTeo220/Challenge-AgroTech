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

entradaImagem1.addEventListener('mouseenter', ()=>{
    tituloImage1.innerHTML = 'Titulo alguma coisa'
})
entradaImagem1.addEventListener('mouseleave', ()=>{
    tituloImage1.innerHTML = 'Titulo 1'
})