let lista = []


let img = ["frango_assado_delicia.jpg","rosca.jpg","prato.jpg"]
let descricao = ["Comida saborosa de bolo","feijoada deliciosa","strogonoff"]
let preco = ["100","230","300"]
let totalGeral = 0
let totalItem = 0
function incluirLista() {
    let adicionar = document.querySelectorAll(".botan");

    adicionar.forEach((elemento, index) => {
        elemento.addEventListener("click", function() {
            let descricaoItem = descricao[index];
            let precoItem = preco[index];
            let imagemItem = img[index];
            // console.log(descricao,precoItem,imagemItem)
           let qtdElement = document.querySelector(`.numero-${index}`);
       let qtd = parseInt(qtdElement.textContent)
            lista.push({ descricao: descricaoItem, preco: precoItem, img: imagemItem, qtd: qtd });
            console.log(lista)

            // Atualizar o total do valor da compra
            totalGeral += calcularTotal(qtd, precoItem);
            let result = document.getElementById("total");
            result.textContent = "R$ " + totalGeral.toFixed(2).replace('.', ',');

            // Atualizar a quantidade de itens na cesta
            document.querySelector(".show").classList.add("mostrar");
            let totalQtd = lista.reduce((acumulador, item) => acumulador + item.qtd, 0);
            const qtd_item = document.getElementById("qtd-item");
            qtd_item.innerHTML = totalQtd;
          


           

        
            result.textContent = "R$ " + totalGeral.toFixed(2).replace('.', ',');
         
        });
    });
}


function calcularTotal(qtd, preco) {
    return qtd * preco;
}


function acresentar(index) {
    let numeroElement = document.querySelector(`.numero-${index}`);
    if (numeroElement) {
        let quantidadeAtual = parseInt(numeroElement.textContent);
        quantidadeAtual += 1;
        numeroElement.textContent = quantidadeAtual;

       
        return quantidadeAtual;
    }
   
  
   

    
}

function diminuir(index) {
    let numeroElement = document.querySelector(`.numero-${index}`);
    if (numeroElement) {
        let quantidadeAtual = parseInt(numeroElement.textContent);
        if (quantidadeAtual > 0) {
            quantidadeAtual -= 1;
            numeroElement.textContent = quantidadeAtual;
        }
        return quantidadeAtual;
    }
    return 0;
}




function imprimir(){
for(let i = 0 ; i < img.length; i++){
    let card = `  <div class="card-box">
    <div>
        <img src="imgs/${img[i]}" alt="">
    </div>
    <div class="box-content">
            <div>
                <p>${descricao[i]}</p>
            </div>

            <div>
               <p class="price">R$ ${preco[i]}</p>
            </div>

            <div class="box-a">

                    <div>
                        <a class="botan" ="#">Adicionar</a>
                    </div>

                    <div class="box-b">

                            <div class="diminuir"  onclick = "diminuir(${i})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 22" fill="none">
                                    <ellipse cx="14.5" cy="11" rx="14.5" ry="11" fill="#00FF47"/>
                                    <rect x="7" y="10" width="15" height="2" fill="white"/>
                                  </svg>
                            </div>

                            <div>
                                <p class="numero-${i}" >0</p>
                            </div>

                            <div class="acresentar"  onclick = "acresentar(${i})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 22" fill="none">
                                    <ellipse cx="14.5" cy="11" rx="14.5" ry="11" fill="#00FF47"/>
                                    <rect x="7" y="10" width="15" height="2" fill="white"/>
                                    <rect x="13" y="5" width="2" height="12" fill="white"/>
                                  </svg>
                            </div>
                            
                    </div>
            </div>
    </div>
</div>`

let secao = document.querySelector("#grid-section")
secao.innerHTML += card

}
}


document.getElementById("pedido").addEventListener("click",adicionarPedido)
function adicionarPedido() {
    document.querySelector(".container-aside").classList.add("mostrar");
    
    let pedidoSection = document.getElementById('pedido-section');
    pedidoSection.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 0; i < lista.length; i++) {
        let pedidoCard = `


        
            <div class="pedido-card">
                <img class="pedido-imagem" src="imgs/${lista[i].img}" alt="">
                <div class="pedido-info">
                    <p class="pedido-descricao">${lista[i].descricao}</p>
                    <p class="pedido-preco">R$ ${lista[i].preco}</p>
                    <p class="pedido-quantidade">Quantidade: ${lista[i].qtd}</p>
                </div>
            </div>
            
            
            
            
            
            `;
        pedidoSection.innerHTML += pedidoCard;

      
    }
}

function sair(){
    document.querySelector(".container-aside").classList.remove("mostrar")
}   



imprimir()
diminuir()
incluirLista()

