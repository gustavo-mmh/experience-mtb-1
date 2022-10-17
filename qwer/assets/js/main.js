import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { BtnComIcone, btnCopiar, btnDowload, btnDowloadUpd, btnEditar, btnFechaModal, btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, copiarTexto, cutName, dataHoje, dataLimiteLote, dataLote, divDownloadCard, divEditarInsc, download, fechaModal, formatDate, formComprovante, lineBroken, linkDownload, linkDownloadUpd, loading, nomeLote, precoLoteBr, precoLoteUy, txtComprovante, txtDesconto, txtFormadePagamento } from '../../../assets/js/ui.js';
import { BotoesPorNacionalidade, VerificaFormaPagamento, VerificaFormaPagamento2 } from "../../../assets/js/validaForm.js";
import { Canvas } from "./canvas.js";
import { createComprovante, updateComprovante } from "./participante-upd.js";
if (sessionStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'
}
btnLogout.addEventListener('click', () => {
    sessionStorage.clear()
    window.location.href = '../index.html'
})
btnFechaModal.addEventListener('click', () => {
    fechaModal("#modalCard")
});
loading.hidden = false
setTimeout(function () {
    loading.hidden = true
}, 2000);
let documento = JSON.parse(sessionStorage.getItem('documentoLogado'))
let pais = JSON.parse(sessionStorage.getItem('paislogado'))
const storage = getStorage(app);
let dataInscricao
let dataFimEditar
let img
let doc
let itemPais
let docs = await getCollection(documento, pais)
docs.forEach(item => {
    doc = item.documento
    itemPais = item.pais
    cardNome.innerHTML = item.nome
    cardDocumento.innerHTML = doc
    cardEmail.innerHTML = item.email
    cardWhatsApp.innerHTML = item.whatsapp
    let data_brasileira = item.dataNascimento.split('-').reverse().join('/');
    cardDataNascimento.innerHTML = data_brasileira
    cardPais.innerHTML = itemPais
    cardCidade.innerHTML = item.cidade
    cardModalidade.innerHTML = item.modalidade
    if (item.modalidade == "Racing") {
        cardCategoria.innerHTML = item.modalidadeRacing
    } else if (item.modalidade == "Challenge") {
        cardCategoria.innerHTML = item.modalidadeChallenge
    }
    cardNomeEquipe.innerHTML = item.nomeEquipe
    cardTamanhoCamiseta.innerHTML = item.tamanhoCamiseta
    img = item.fotoCard
    dataInscricao = item.dataInscricao
    dataFimEditar = item.dataFimEdit

    // ------------------------------------------------
    if (item.status == 'Confirmado') {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
        document.querySelector("#txtMsgComprovante").style.display = "none";
        txtComprovante.classList.add('disabled')
        if (item.fotoCard != null) {
            cardFoto.addEventListener('load', () => {
                let fotoModalidade, x, y
                let nomeCategoria
                let corCategoria
                if (item.modalidade == "Racing") {
                    fotoModalidade = 'assets/images/3.png'
                    if (item.modalidadeRacing == "Dama Promocional") {
                        nomeCategoria = "DAMAS PROMO"
                    } else {
                        nomeCategoria = item.modalidadeRacing.toUpperCase()
                    }
                    corCategoria = "white"
                    x = 365
                    y = 81
                } else if (item.modalidade == "Challenge") {
                    fotoModalidade = 'assets/images/4.png'
                    if (item.modalidadeChallenge == "Soft") corCategoria = "#86d76d"
                    else if (item.modalidadeChallenge == "Light") corCategoria = "#5ab9eb"
                    else if (item.modalidadeChallenge == "Hard") corCategoria = "#f31c19"
                    nomeCategoria = item.modalidadeChallenge.toUpperCase()
                    x = 405
                    y = 82
                }

                let nome = item.nome.toUpperCase()
                while (nome.length > 20) nome = cutName(nome)
                let pais = item.pais.toUpperCase()
                let cidade = item.cidade.toUpperCase()
                let equipe = item.nomeEquipe.toUpperCase()
                let equipe2 = ''
                let nomeEquipe = lineBroken(equipe, equipe2)
                while (equipe.length > 40) equipe = nomeEquipe.text, equipe2 = nomeEquipe.text2
                let foto = cardFoto.getAttribute("src")
                let cardMTB = {
                    fotoParticipante: foto,
                    fotoModalidade: fotoModalidade,
                    Categoria: {
                        nomeCategoria: nomeCategoria,
                        corCategoria: corCategoria,
                        eixoX: x,
                        eixoY: y,
                    },
                    nomeParticipante: nome,
                    pais: pais,
                    cidade: cidade,
                    equipe: equipe,
                    equipe2: equipe2,
                }
                divDownloadCard.hidden = false
                Canvas(cardMTB)
                btnDowload.addEventListener('click', () => {
                    download(linkDownload)
                })
                btnDowloadUpd.addEventListener('click', () => {
                    download(linkDownloadUpd)
                })
            })
        }
    }

    else if (item.status == 'Em Analise') {
        cardStatus.classList.add('text-warning');
        cardStatus.innerHTML = item.status
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            if (dataHoje > dataLimiteLote) {
                txtDesconto.innerHTML = `<b>Lote Sprint </b> (de 07.10 à 31.10) R$135,00`
            } else {
                txtDesconto.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteBr}`
            }
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            // let btnUy = document.querySelector("#btnPagamentoUy")
            btnLinkPagamento.hidden = true
            // btnUy.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnPix, p)
            })
        } else if (itemPais == 'Uruguai') {
            if (dataHoje > dataLimiteLote) {
                txtDesconto.innerHTML = `<b>Lote Sprint </b> (de 07.10 à 21.10) $1350,00`
            } else {
                txtDesconto.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteUy}`
            }
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            // let btnBr = document.querySelector("#btnPagamentoBr")
            btnLinkPagamento.hidden = true
            // btnBr.hidden = true
            let btnMidinero = document.querySelector("#BtnMidinero")
            btnMidinero.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnMidinero.addEventListener('click', () => {
                $("#modalMidinero").modal("show");
            });
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnMidinero, p)
            })

        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            // let btnBr = document.querySelector("#btnPagamentoBr")
            // let btnUy = document.querySelector("#btnPagamentoUy")
            // btnBr.hidden = true
            // btnUy.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLinkPagamento)
            })
        }
        let ID = itemPais + doc
        let img2 = item.comprovantePagamento;
        updateComprovante(ID, img2)
    }
    else {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status;
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            if (dataHoje < dataLimiteLote) {
                txtDesconto.innerHTML = `<b>Lote Sprint </b> (de 07.10 à 21.10) R$135,00`
            } else {
                txtDesconto.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteBr}`
            }
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnPix, p)
            })
        } else if (itemPais == 'Uruguai') {
            if (dataHoje < dataLimiteLote) {
                txtDesconto.innerHTML = `<b>Lote Sprint </b> (de 07.10 à 21.10) $1350,00`
            } else {
                txtDesconto.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteUy}`
            }
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            let btnMidinero = document.querySelector("#BtnMidinero")
            btnMidinero.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnMidinero.addEventListener('click', () => {
                $("#modalMidinero").modal("show");
            });
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnMidinero, p)
            })
        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLinkPagamento)
            })
        }
        let ID = itemPais + doc
        createComprovante(ID)
    }
})
var partesData = dataFimEditar.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
var dataLimite = new Date(("2022, 11, 15"));
let dataMaior
if (data > dataLimite) {
    dataMaior = dataFimEditar
} else {
    dataMaior = formatDate(dataLimite, 'dd/mm/aaaa')
}
document.querySelector("#txtDataLimite").innerHTML = `Você tem até ${dataMaior} <br/> para editar as informações`


if (new Date() > dataMaior) {

    console.log(partesData)
    divEditarInsc.style = 'display:none !important'
    btnEditar.classList.add('disabled')
    // if (data > dataLimite && data >= new Date()) {
    //     console.log('aqui2')
    //     document.querySelector("#txtDataLimite").innerHTML = `Você tem até ${dataMaior} <br/> para editar as informações`
    //     divEditarInsc.style = 'display:block'
    //     btnEditar.classList.remove('disabled')

    // }
}
if (img != "") {
    getUrlImage(storage, img, cardFoto)
} else {
    cardFoto.src = './assets/images/fotocard.png'
}
