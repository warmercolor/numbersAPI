const tagBtn = document.querySelector('.btn')
const tagInput = document.querySelector('.numero')
const tagP = document.querySelector('.resposta')

tagBtn.addEventListener("click", function () {
    let valorDaPesquisa = tagInput.value
    tagInput.setAttribute('id', `${valorDaPesquisa}`)
    link(valorDaPesquisa)
    
})

async function link(id){
    
    const responseAPI = await fetch(`http://numbersapi.com/${id}`)

    .then(response => response.text())
    .then(data =>
        {
            tagP.innerText = data
        })
    }