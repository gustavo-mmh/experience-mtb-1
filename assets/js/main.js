import { getExperienceMtbdocs, subscribeToExperienceMtb } from './firebase/experience-mtb.js';
const txtPais = document.getElementById('txtPais');
const txtNome = document.getElementById('txtNome');
const txtDocumento = document.getElementById('txtDocumento');
const txtDataNascimento = document.getElementById('txtDataNascimento');
const txtEmail = document.getElementById('txtEmail');
const txtCidade = document.getElementById('txtCidade');
const txtWhatsApp = document.getElementById('txtWhatsApp');
const txtTamanhoCamiseta = document.getElementById('txtTamanhoCamiseta');
const txtModalidade = document.getElementById('txtModalidade');
const txtModalidadeRacing = document.getElementById('txtModalidadeRacing');
const txtModalidadeChallenge = document.getElementById('txtModalidadeChallenge');
const txtNomeEquipe = document.getElementById('txtNomeEquipe');
const txtSenha = document.getElementById('txtSenha');
const txtFotoCard = document.getElementById('txtFotoCard');
const formCadstro = document.getElementById('formCadstro');
const btnCadastrar = document.getElementById('btnCadastrar');
const error = document.querySelector('.error');
function limparDados() {
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsApp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtFotoCard.value = ''
}
formCadstro.addEventListener('submit', async (event) => {
    // Previne a submissão do formulário:
    event.preventDefault();
    const docsID = await getExperienceMtbdocs()
    const ID = txtPais.value + txtDocumento.value
    if (docsID.includes(ID) == true) {
        alert("Esse Documento já existe")
        txtDocumento.focus();
    } else {
        if (txtModalidade.value == "Racing") {
            const subscription = {
                pais: txtPais.value,
                nome: txtNome.value,
                documento: txtDocumento.value,
                dataNascimento: txtDataNascimento.value,
                email: txtEmail.value,
                cidade: txtCidade.value,
                whatsapp: txtWhatsApp.value,
                tamanhoCamiseta: txtTamanhoCamiseta.value,
                modalidade: txtModalidade.value,
                modalidadeRacing: txtModalidadeRacing.value,
                nomeEquipe: txtNomeEquipe.value,
                senha: txtSenha.value,
                fotoCard: txtFotoCard.value,
            }
            subscribeToExperienceMtb(subscription, ID);
            alert("Cadastro Feito com Sucesso!!!")
            limparDados()
        } else {
            const subscription = {
                pais: txtPais.value,
                nome: txtNome.value,
                documento: txtDocumento.value,
                dataNascimento: txtDataNascimento.value,
                email: txtEmail.value,
                cidade: txtCidade.value,
                whatsapp: txtWhatsApp.value,
                tamanhoCamiseta: txtTamanhoCamiseta.value,
                modalidade: txtModalidade.value,
                modalidadeChallenge: txtModalidadeChallenge.value,
                nomeEquipe: txtNomeEquipe.value,
                senha: txtSenha.value,
                fotoCard: txtFotoCard.value,
            }
            subscribeToExperienceMtb(subscription, ID);
            alert("Cadastro Feito com Sucesso!!!")
            limparDados()
        }
    }
});
