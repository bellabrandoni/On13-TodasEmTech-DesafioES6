const nomeGitHub = document.getElementById("nome-usuario");
const imgPerfil = document.getElementById("img-usuario");
const nomeP = document.getElementById("apelido-usuario");
const biografia = document.getElementById("bio-usuario");
const form = document.getElementById("formulario");
const input = document.getElementById("search");
const seguidores =document.getElementById("cards-seguidores");
const imgSegui =document.getElementById("img-seguidores");
const numeroDeSeguidores =document.getElementById("seguidores-usuario");
const imdRepositorio =document.getElementById("repositorio-img");
const numeroDeUsuarios =document.getElementById("repositorio-usuario");
const UsuariaNaoEncontrada = document.getElementById("img-nao-encontrada")
const divContainer = document.querySelector(".usuaria-nao-encontrada")

const baseURL = "https://api.github.com/users"

 const eventoFormulario = async (evento) => {
    evento.preventDefault();
    let meuGit = input.value.trim().toLowerCase();

    const hubFetch = await fetch(`${baseURL}/${meuGit}`)
        .then(response => response.json())
        .then(dados => dados)
        .catch(err => {
            console.log(".......", err.status)
            meuErro()
        })

        pegaUsuarioGitHub( hubFetch)
        validarInput();
       
 }

 const  pegaUsuarioGitHub = (giti) => {
    nomeGitHub.textContent= giti.name;
    nomeP.textContent = giti.login;
    imgPerfil.setAttribute("src", giti.avatar_url);
    
   
    
 }    

 

const validarInput = () => {
    input.value = ""
}

const meuErro = () => {
    const divErro = document.createElement("div");
    const textoErro = document.createElement("p")
    divErro.appendChild(textoErro)
    textoErro.textContent = "Página não encontrada"
    divContainer.appendChild(divErro) 
    document.body.appendChild(divErro);

    
}


/*const UsuariaNaoEncontrada = async () => {
    letrespostaDaUsuaria = await fetch(`${baseURL}/${meuGit}`)
    .then(response => response.json())
    .then(dados => dados)
    .catch(err => meuErro())
     const erro = document.createElement 
    
    pegaUsuarioGitHub( hubFetch)
    validarInput();
}*/


form.addEventListener("submit", eventoFormulario)
//console.log(eventoFormulario)

 
 
        