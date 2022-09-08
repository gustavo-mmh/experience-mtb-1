import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
// import { getUrlImage } from '../../../assets/js/cadastro/storage/index.js';
// import app from "../../../assets/js/firebase/app.js";

import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp } from '../../../assets/js/ui.js';
if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../../index.html'
}
let documento = JSON.parse(localStorage.getItem('documentoLogado'))
const storage = getStorage(app);
let img
console.log(documento)
let docs = await getCollection(documento)
docs.forEach(item => {
    cardNome.innerHTML = item.nome
    cardDocumento.innerHTML = item.documento
    cardEmail.innerHTML = item.email
    cardWhatsApp.innerHTML = item.whatsapp
    cardDataNascimento.innerHTML = item.dataNascimento
    cardPais.innerHTML = item.pais
    cardCidade.innerHTML = item.cidade
    cardModalidade.innerHTML = item.modalidade
    if (item.modalidade == "Racing") {
        cardCategoria.innerHTML = item.modalidadeRacing
    } else {
        cardCategoria.innerHTML = item.modalidadeChallenge
    }
    cardNomeEquipe.innerHTML = item.nomeEquipe
    cardTamanhoCamiseta.innerHTML = item.tamanhoCamiseta
    if (item.status == 'Pendente') {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status
    } else {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
    }
    img = item.fotoCard
})

getUrlImage(storage, img, cardFoto)
btnLogout.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = '../../index.html'
})

