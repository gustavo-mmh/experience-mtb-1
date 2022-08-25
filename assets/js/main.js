import { subscribeToExperienceMtb } from './firebase/experience-mtb.js';
function bloqueio() {
    if (document.getElementById("modalidade").value == "Racing") {
        document.getElementById("racing").style.display = "block";
        var modalidadeRacing = document.getElementById('modalidadeRacing');
        var att = document.createAttribute("required");
        modalidadeRacing.setAttributeNode(att);
        document.getElementById("challange").style.display = "none";
        var modalidadeChallenge = document.getElementById('modalidadeChallenge');
        modalidadeChallenge.removeAttribute("required");
    } else {
        document.getElementById("challange").style.display = "block";
        var modalidadeChallenge = document.getElementById('modalidadeChallenge');
        var att = document.createAttribute("required");
        modalidadeChallenge.setAttributeNode(att);
        document.getElementById("racing").style.display = "none";
        var modalidadeRacing = document.getElementById('modalidadeRacing');
        modalidadeRacing.removeAttribute("required");
    }
}
const txtPais = document.getElementById('txtPais');
const txtNome = document.getElementById('txtNome');
const txtdocumento = document.getElementById('txtDocumento');
const txtDataNascimento = document.getElementById('txtDataNascimento');
const txtemail = document.getElementById('txtemail');
const txtcidade = document.getElementById('txtcidade');
const txtwhatsapp = document.getElementById('txtwhatsapp');
const txttamanhoCamiseta = document.getElementById('txttamanhoCamiseta');
const txtmodalidade = document.getElementById('txtmodalidade');
const txtmodalidadeRacing = document.getElementById('txtmodalidadeRacing');
const txtmodalidadeChallenge = document.getElementById('txtmodalidadeChallenge');
const txtnomeEquipe = document.getElementById('txtnomeEquipe');
const txtfotoCard = document.getElementById('txtfotoCard');
const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', async () => {
    const subscription = {
        pais: txtPais.value,
        nome: txtNome.value,
        documento: txtdocumento.value,
        dataNascimento: txtDataNascimento.value,
        email: txtemail.value,
        cidade: txtcidade.value,
        whatsapp: txtwhatsapp.value,
        tamanhoCamiseta: txttamanhoCamiseta.value,
        modalidade: txtmodalidade.value,
        modalidadeRacing: txtmodalidadeRacing.value,
        modalidadeChallenge: txtmodalidadeChallenge.value,
        nomeEquipe: txtnomeEquipe.value,
        fotoCard: txtfotoCard.value,
    }

    const subscriptionId = subscribeToExperienceMtb(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);
    txtPais.value = ''
    txtNome.value = ''
    txtdocumento.value = ''
    txtDataNascimento.value = ''
    txtemail.value = ''
    txtcidade.value = ''
    txtwhatsapp.value = ''
    txttamanhoCamiseta.value = ''
    txtmodalidade.value = ''
    txtmodalidadeRacing.value = ''
    txtmodalidadeChallenge.value = ''
    txtnomeEquipe.value = ''
    txtfotoCard.value = ''
    alert('foi')


});