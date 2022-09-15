import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { file, getImgRef, imgRef, metadata } from "../../../assets/js/cadastro/storage/getImg.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
// import { getUrlImage } from '../../../assets/js/cadastro/storage/index.js';
// import app from "../../../assets/js/firebase/app.js";

import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, divComprovante, divPagamento, formComprovante, txtComprovante } from '../../../assets/js/ui.js';
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
        let inputComprovante = document.createElement('input');
        inputComprovante.type = "file"
        inputComprovante.accept = "image/*"
        inputComprovante.id = "txtComprovante"
        inputComprovante.classList.add("form-control")
        divComprovante.appendChild(inputComprovante)
        let a = document.createElement('a');
        let icon = document.createElement('i');
        icon.classList.add('fa')
        icon.classList.add('fa-cart-plus')
        icon.classList.add('fa-fw')
        let link = document.createTextNode("Efetuar Pagamento");
        a.appendChild(icon);
        a.appendChild(link);
        a.title = " Efetuar Pagamento";
        a.target = "_blank"
        a.href = "https://www.mercadopago.com.br/checkout/v1/payment/redirect/?source=link&preference-id=379326377-71379965-32e5-4d24-b651-a4195dfbad30&router-request-id=7fd022fb-d59b-4d8e-8727-f87b600cb28d";
        a.classList.add('btn')
        a.classList.add('btn-outline-success')
        divPagamento.appendChild(a);
    } else {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
    }
    img = item.fotoCard
})
getUrlImage(storage, img, cardFoto)

getImgRef(txtComprovante)
formUpdate.addEventListener('submit', async (event) => {
    event.preventDefault();
    uploadImagem(file, imgRef, metadata)
})
