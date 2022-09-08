import { getExperienceMtbdocsID, subscribeToExperienceMtb } from "../firebase/experience-mtb.js";
import { formCadastro, limparDados, txtCidade, txtDataNascimento, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../ui.js';
import { file, getimg, newName, metadata, storageRef, uploadImagem } from "./storage/index.js";

export async function Cadastrar() {
    getimg
    formCadastro.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formCadastro.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            formCadastro.classList.add('was-validated')
        }
        else {
            const ID = txtPais.value + txtDocumento.value
            // Previne a submissão do formulário:
            const docsID = await getExperienceMtbdocsID()
            if (docsID.includes(ID) == true) {
                alert("Esse Documento já existe")
                txtDocumento.focus();
            }
            else {
                if (txtModalidade.value == "Racing") {
                    uploadImagem(storageRef, file, metadata)
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
                        fotoCard: newName,
                        comprovante: '',
                        tipoPagmento: '',
                        comprovantePagamento: '',
                        status: 'Pendente',
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
                        comprovante: '',
                        tipoPagmento: '',
                        comprovantePagamento: '',
                        status: 'Pendente',
                    }
                    subscribeToExperienceMtb(subscription, ID);
                    alert("Cadastro Feito com Sucesso!!!")
                    limparDados()
                }
            }

        }
    }, false)
}