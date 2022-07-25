let saldo = document.querySelectorAll('#saldo')
if(saldo.length > 0){
    for (let i = 0; i < saldo.length; i++) {
        saldo[i].innerHTML = localStorage.getItem('saldo')
    }
}else{
    console.log('Não tem saldo aqui');
}



let preco_element = document.querySelectorAll('#preco')
let descrição_element = document.querySelectorAll('#descrição')
let descrição_lable = document.querySelectorAll('#descriçãoLable')

if(descrição_element.length > 0){
    descrição_element[0].innerHTML = localStorage.getItem('descrição')

    if(localStorage.getItem('descrição') == ''){
        descrição_element[0].style.display = 'none'
        descrição_lable[0].style.display = 'none'
    }
}




if(preco_element.length > 0){
    preco_element[0].innerHTML = localStorage.getItem('preco').replace('.', ',')
}




let labelChave = document.querySelectorAll('#labelChave')
let chave = document.querySelectorAll('#chave')

if(labelChave.length > 0 & chave.length > 0){
        
    labelChave[0].innerHTML = localStorage.getItem('tipoDeChave')
    chave[0].innerHTML = localStorage.getItem('chave')

}

let cpfCnpj = document.querySelectorAll('#cpfCnpj')

if(cpfCnpj.length > 0){

    cpfCnpj[0].innerHTML = localStorage.getItem('cpfTx')

}


let mês = document.querySelectorAll('#mes')

if(mês.length > 0){

    mesNum = new Date().getMonth()+1
    mês[0].innerHTML = '123'

    switch(mesNum){
        case 1:
            mês[0].innerHTML = 'Janeiro'
            break;
        case 2:
            mês[0].innerHTML = 'Fevereiro'
            break
        case 3:
            mês[0].innerHTML = 'Março'
            break;
        case 4:
            mês[0].innerHTML = 'Abril'
            break
        case 5:
            mês[0].innerHTML = 'Maio'
            break;
        case 6:
            mês[0].innerHTML = 'Junho'
            break
        case 7:
            mês[0].innerHTML = 'Julho'
            break;
        case 8:
            mês[0].innerHTML = 'Agosto'
            break
        case 9:
            mês[0].innerHTML = 'Setembro'
            break;
        case 10:
            mês[0].innerHTML = 'Outubro'
            break
        case 11:
            mês[0].innerHTML = 'Novembro'
            break;
        case 12:
            mês[0].innerHTML = 'Dezembro'
            break
    
    }
    
}


let instituicao = document.querySelectorAll('#instituicao')

if(instituicao.length > 0){

    instituicao[0].innerHTML = localStorage.getItem('bancoTx')

}


let nome = document.querySelectorAll('#nome')

if(nome.length > 0){

    nome[0].innerHTML = localStorage.getItem('nameTx')

}

let myNome = document.querySelectorAll('#myNome')

if(myNome.length > 0){

    myNome[0].innerHTML = localStorage.getItem('myName')

}

let myCpf = document.querySelectorAll('#myCpf')

if(myCpf.length > 0){

    myCpf[0].innerHTML = localStorage.getItem('myCpf')

}