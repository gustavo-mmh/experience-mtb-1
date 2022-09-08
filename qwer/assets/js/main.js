import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { btnLogout, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardModalidade, cardModalidadeChallenge, cardModalidadeRacing, cardNome, cardNomeEquipe, cardPais, cardTamanhoCamiseta, cardWhatsApp } from '../../../assets/js/ui.js';
let documento = "1234567"
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
})
btnLogout.addEventListener('submit', () => { window.location.href = '../../index.html' })
