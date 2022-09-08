import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
// import { getUrlImage } from '../../../assets/js/cadastro/storage/index.js';
// import app from "../../../assets/js/firebase/app.js";

import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { btnLogout, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardModalidadeChallenge, cardModalidadeRacing, cardNome, cardNomeEquipe, cardPais, cardTamanhoCamiseta, cardWhatsApp } from '../../../assets/js/ui.js';
const storage = getStorage(app);
let documento = "1234567"
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
    cardModalidadeRacing.innerHTML = item.modalidadeRacing
    cardModalidadeChallenge.innerHTML = item.modalidadeChallenge
    cardNomeEquipe.innerHTML = item.nomeEquipe
    cardTamanhoCamiseta.innerHTML = item.tamanhoCamiseta
    img = item.fotoCard
})

getUrlImage(storage, img, cardFoto)
btnLogout.addEventListener('submit', () => { window.location.href = '../../index.html' })
