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
const txtDocumento = document.getElementById('txtDocumento');
const txtDataNascimento = document.getElementById('txtDataNascimento');
const txtEmail = document.getElementById('txtEmail');
const txtCidade = document.getElementById('txtCidade');
const txtWhatsapp = document.getElementById('txtWhatsapp');
const txtTamanhoCamiseta = document.getElementById('txtTamanhoCamiseta');
const txtModalidade = document.getElementById('txtModalidade');
const txtModalidadeRacing = document.getElementById('txtModalidadeRacing');
const txtModalidadeChallenge = document.getElementById('txtModalidadeChallenge');
const txtNomeEquipe = document.getElementById('txtNomeEquipe');
const txtSenha = document.getElementById('txtSenha');
const txtFotoCard = document.getElementById('txtFotoCard');
const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', async () => {
    const subscription = {
        pais: txtPais.value,
        nome: txtNome.value,
        documento: txtDocumento.value,
        dataNascimento: txtDataNascimento.value,
        email: txtEmail.value,
        cidade: txtCidade.value,
        whatsapp: txtWhatsapp.value,
        tamanhoCamiseta: txtTamanhoCamiseta.value,
        modalidade: txtModalidade.value,
        modalidadeRacing: txtModalidadeRacing.value,
        modalidadeChallenge: txtModalidadeChallenge.value,
        nomeEquipe: txtNomeEquipe.value,
        senha: txtSenha.value,
        fotoCard: txtFotoCard.value,
    }

    const subscriptionId = subscribeToExperienceMtb(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`);
    txtPais.value = ''
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsapp.value = ''
    txtTamanhoCamiseta.value = ''
    txtModalidade.value = ''
    txtModalidadeRacing.value = ''
    txtModalidadeChallenge.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtFotoCard.value = ''


});