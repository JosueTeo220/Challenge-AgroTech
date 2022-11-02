console.log('testScript')
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
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
entradaImagem1.addEventListener('mouseenter', ()=>{
    mouseenterImage1()
})
entradaImagem1.addEventListener('mouseleave', ()=>{
    mouseleaveImage1()
})
function searchButtonClick()
{
    var buttonSearch = document.getElementById('searchInput')
    buttonSearch.value = ''
    console.log("testInput")
}
function mouseenterImage1()
{
    boxImage1.style.transitionDuration = '1s'
    boxImage1.style.boxShadow = '2px 2px 10px 1px rgba(0, 0, 0, 0.780)'
    boxImage1.style.backgroundColor = 'rgba(0, 0, 0, 0.780)'
}
function mouseleaveImage1()
{
    boxImage1.style.boxShadow = ''
    boxImage1.style.animationName = ''
    boxImage1.style.backgroundColor = 'rgba(0, 0, 0, 0.350)'
}