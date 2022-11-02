console.log('testScript')
var entradaImagem = document.getElementById('imageEntry')
var boxImage = document.getElementById('imgStyle')
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
entradaImagem.addEventListener('mouseenter', ()=>{
    mouseenterImage();
})
entradaImagem.addEventListener('mouseleave', ()=>{
    mouseleaveImage();
})
function searchButtonClick()
{
    var buttonSearch = document.getElementById('searchInput')
    buttonSearch.value = ''
    console.log("testInput")
}
function mouseenterImage()
{
    boxImage.style.transitionDuration = '1s'
    boxImage.style.boxShadow = '2px 2px 10px 1px rgba(0, 0, 0, 0.780)'
    boxImage.style.backgroundColor = 'rgba(0, 0, 0, 0.780)'
}
function mouseleaveImage()
{
    boxImage.style.boxShadow = ''
    boxImage.style.animationName = ''
    boxImage.style.backgroundColor = 'rgba(0, 0, 0, 0.350)'
}