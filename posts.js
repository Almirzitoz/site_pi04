var textoComentario = document.getElementById("comentario");
var btnAdd = document.getElementById("adcionar");
var area = document.getElementById('coment')
class comentario {
    constructor(comentario){
        this.comentario =comentario;
    }

    comentar(){
       const divComent = document.createElement("div");
       const conteudo = document.createElement('p')
        conteudo.innerHTML = this.comentario;

        divComent.appendChild(conteudo);
        return(divComent);
    }
}

function addComentario(){
    const texto = textoComentario.value;
    var comentt = new comentario(texto);
    area.appendChild(comentt.comentar());
    textoComentario.value = ' ';

};
btnAdd.addEventListener('click',addComentario)