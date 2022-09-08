export const txtNome = document.querySelector('#txtNome');
export const txtDocumento = document.querySelector('#txtDocumento');
export const txtEmail = document.querySelector('#txtEmail');
export const txtWhatsApp = document.querySelector('#txtWhatsApp');
export const txtDataNascimento = document.querySelector('#txtDataNascimento');
export const txtPais = document.querySelector('#txtPais');
export const txtCidade = document.querySelector('#txtCidade');
export const txtModalidade = document.querySelector('#txtModalidade');
export const txtModalidadeRacing = document.querySelector('#txtModalidadeRacing');
export const txtModalidadeChallenge = document.querySelector('#txtModalidadeChallenge');
export const txtNomeEquipe = document.querySelector('#txtNomeEquipe');
export const txtTamanhoCamiseta = document.querySelector('#txtTamanhoCamiseta');
export const txtSenha = document.querySelector('#txtSenha');
export const txtFotoCard = document.querySelector('#txtFotoCard');
export const formCadastro = document.querySelector('#formCadastro');
export const btnCadastro = document.querySelector('#btnCadastrar');
export const txtConfirmaSenha = document.querySelector('#txtConfirmaSenha');
export const loginDocumento = document.querySelector('#loginDocumento');
export const loginPais = document.querySelector('#loginPais');
export const loginPassword = document.querySelector('#loginPassword');
export const formLogin = document.querySelector('#formLogin');
export const cardNome = document.querySelector('#cardNome');
export const cardDocumento = document.querySelector('#cardDocumento');
export const cardEmail = document.querySelector('#cardEmail');
export const cardWhatsApp = document.querySelector('#cardWhatsApp');
export const cardDataNascimento = document.querySelector('#cardDataNascimento');
export const cardPais = document.querySelector('#cardPais');
export const cardCidade = document.querySelector('#cardCidade');
export const cardModalidade = document.querySelector('#cardModalidade');
export const cardCategoria = document.querySelector('#cardCategoria');
export const cardNomeEquipe = document.querySelector('#cardNomeEquipe');
export const cardTamanhoCamiseta = document.querySelector('#cardTamanhoCamiseta');
export const cardFoto = document.querySelector('#cardFoto');
export const cardStatus = document.querySelector('#cardStatus');

export const btnLogout = document.querySelector('#btnLogout')
export const btnLogin = document.querySelector('#btnLogin')

export const divAuthState = document.querySelector('#divAuthState')
export const statusLogin = document.querySelector('#statusLogin')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const errorHandler = () => {
    // btnLogin.classList.remove('loading');
    // btnLogin.classList.remove('success');
    // btnLogin.classList.add('error');
    statusLogin.innerHTML = "Error :(";
}
export const successHandler = () => {
    // btnLogin.classList.remove('loading');
    // btnLogin.classList.remove('error');
    // btnLogin.classList.add('success');
    statusLogin.innerHTML = "SUUUUUChEEESSOO";
}
export function limparDados() {
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsApp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtConfirmaSenha.value = ''
    txtFotoCard.value = ''
    formCadastro.classList.remove('was-validated')
}