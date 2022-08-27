import { subscribeToExperienceMtb } from './firebase/experience-mtb.js';
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
    const ID = txtPais.value + txtDocumento.value
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
    };

    const subscriptionID = subscribeToExperienceMtb(subscription, ID);
    console.log(subscriptionID);
    alert("Cadastro Feito com Sucesso!!!")
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsapp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtFotoCard.value = ''

});