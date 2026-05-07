var gay = document.querySelector(".area__calendario")

const data = new Date();
const mes = data.getMonth();
const ano = data.getFullYear();


function getDiasNoMes(mes, ano) {
  // O mês no JS vai de 0-11, então 11 é dezembro
    lista_mes = [];
    for(let m = 0; m <=11; m++) {
        lista_mes.push(new Date(ano, m + 1, 0).getDate());
        
    }
    console.log(lista_mes)
}


var gay3 = getDiasNoMes(ano, mes)
var primeirodia = null

//retorna integer de 0 a 6, 0 sendo segunda e 6 sendo domingo (tem 7 numeros ai)
function tremdomes(){
    lista_blank = [];
    for(let m = 0; m <=11; m++) {
        lista_blank.push(new Date(ano, m, 1).getDay());
        }
    console.log(primeirodia)
    console.log(lista_blank)
}

function colocarblanknosmespranaoconfundirdepois(){
    m = 1
    lista_blank.forEach(num_blank => {
        let pai = document.getElementById(m);
        pai.innerHTML = "<div>DOM</div><div>SEG</div><div>TER</div><div>QUA</div><div>QUI</div><div>SEX</div><div>SAB</div>"
        for(let i = 1; i <= num_blank; i++){
            let diablank = document.createElement('div');
            diablank.textContent = "  ";
            pai.appendChild(diablank);
        }
        m++
        console.log("oi")
    });
}

//cca sugbfuca criar calendario auitomic!!!!!!!!!!!!!!!!! AAAAAAAHh!!!
function cca() {
    m = 1
    lista_mes.forEach(num_mes => {
        let pai = document.getElementById(m);
        for(let i = 1; i <= num_mes; i++){
            let novaDiv = document.createElement('div');
            novaDiv.classList.add("dia__mes");
            novaDiv.textContent = i;
            pai.appendChild(novaDiv);
        }
        m++
        console.log(m)
    });
    
}



console.log(ano)


console.log(mes + 1)