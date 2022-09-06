var form = document.getElementsByTagName('form')[0];
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
const btnCadastrar = document.getElementById('btnCadastrar');
const modalidade = document.getElementById("txtModalidade");
const racing = document.getElementById("racing");
const challenge = document.getElementById("challenge");
const txtConfirmaSenha = document.getElementById('txtConfirmaSenha');
const forms = document.querySelectorAll('.needs-validation')
const formCadastro = document.getElementById('formCadastro');

function VerificaModalidade() {
    if (modalidade.value == "Racing") {
        racing.style.display = "block";
        var required = document.createAttribute("required");
        txtModalidadeRacing.setAttributeNode(required);
        challenge.style.display = "none";
        txtModalidadeChallenge.removeAttribute("required");
    } else {
        challenge.style.display = "block";
        var required = document.createAttribute("required");
        txtModalidadeChallenge.setAttributeNode(required);
        racing.style.display = "none";
        txtModalidadeRacing.removeAttribute("required");
    }
}

function validatePassword() {
    if (txtSenha.value != txtConfirmaSenha.value) {
        txtConfirmaSenha.setCustomValidity("Senhas diferentes!");
        formCadastro.classList.add('was-validated')
    } else {
        txtConfirmaSenha.setCustomValidity('');
        console.log('funcionou')
    }
}
