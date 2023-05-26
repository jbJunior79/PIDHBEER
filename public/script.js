window.addEventListener('DOMContentLoaded', function() {
  var carouselInner = document.querySelector('.carousel-inner');
  var imageWidth = carouselInner.offsetWidth / 3;
  var currentIndex = 0;

  function rotateCarousel() {
    currentIndex++;
    if (currentIndex === 3) {
      currentIndex = 0;
    }
    carouselInner.style.transform = 'translateX(-' + (currentIndex * imageWidth) + 'px)';
  }

  setInterval(rotateCarousel, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");
});

function fecharPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function redirecionar() {
  window.location.href = "https://www.patatipatata.com.br/";
}

// Função para exibir o produto selecionado
function showProduct(description, price, imageName) {
  var imgContainer = document.getElementById("imgContainer");
  var imgPath = "img/" + imageName;
  
  // Remove imagens existentes
  while (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
  
  // Adiciona nova imagem
  var img = document.createElement("img");
  img.src = imgPath;
  img.alt = description;
  img.width = 500;
  img.height = 500;
  imgContainer.appendChild(img);
  
  // Exibe o valor unitário
  document.getElementById("valor").innerHTML = "Valor unitário: R$" + price.toFixed(2);
  // Armazena o valor unitário como atributo de dados
  document.getElementById("valor").dataset.price = price;
}

// Função para calcular o total da compra
function calculateTotal() {
  var quantity = parseInt(document.getElementById("quantity").value, 10);
  var price = parseFloat(document.getElementById("valor").dataset.price);
  var total = quantity * price;
  
  // Verifica se a quantidade é um número válido
  if (isNaN(total)) {
    document.getElementById("total").innerHTML = "Total: R$0.00";
  } else {
    // Exibe o valor unitário e o total da compra
    document.getElementById("valor").innerHTML = "Valor unitário: R$" + price.toFixed(2);
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);
  }
}

// Exibe a imagem PILSEN600.jpg por padrão ao carregar a página
window.addEventListener("DOMContentLoaded", function() {
  showProduct("600ml", 13.60, "PILSEN600.jpg");
});

function abrirPopup() {
  var largura = 600;
  var altura = 400;
  var esquerda = (screen.width - largura) / 2;
  var topo = (screen.height - altura) / 2;

  var janelaPopup = window.open('formulario.html', 'popup', 'width=' + largura + ', height=' + altura + ', left=' + esquerda + ', top=' + topo + ', resizable=yes, location=no');
}

 /*function openPopup() {
  var quantity = document.getElementById("quantity").value;
  var productName = document.querySelector(".desc_prod h4").innerText;
  var total = document.getElementById("total").innerText;

  var popupContent = "Você está adquirindo " + quantity + " unidades da " + productName + " com o valor total de " + total + ".\n\n";

  
 
  popupContent += "Por favor, preencha o formulário abaixo:\n\n";
  popupContent += "Nome: <input type='text' id='nome'><br>";
  popupContent += "Endereço: <input type='text' id='endereco'><br>";
  popupContent += "Bairro: <input type='text' id='bairro'><br>";
  popupContent += "CEP: <input type='text' id='cep'><br>";
  popupContent += "Cidade: <input type='text' id='cidade'><br>";
  popupContent += "Estado: <input type='text' id='estado'><br>";
  popupContent += "E-mail: <input type='email' id='email'><br>";
  popupContent += "Forma de pagamento: ";
  popupContent += "<select id='formaPagamento' onchange='toggleCardFields()'>";
  popupContent += "<option value='pix'>PIX</option>";
  popupContent += "<option value='cartao'>Cartão de Crédito</option>";
  popupContent += "</select><br>";
  popupContent += "<div id='cardFields' style='display:none;'>";
  popupContent += "Número do Cartão: <input type='text' id='numeroCartao'><br>";
  popupContent += "CPF: <input type='text' id='cpf'><br>";
  popupContent += "Validade: <input type='text' id='validade'><br>";
  popupContent += "CVV: <input type='text' id='cvv'><br>";
  popupContent += "</div><br>";
  popupContent += "<button onclick='confirmPurchase()'>Confirmar Compra</button>";

  var popupWindow = window.open("", "popupWindow", "width=500,height=500");
  popupWindow.document.write("<html><head><link rel='stylesheet' href='caminho-do-seu-arquivo-css'></head><body>");
  popupWindow.document.write("<div class='popup-container'>");
  popupWindow.document.write(popupContent);
  popupWindow.document.write("</div></body></html>");

  popupWindow.onload = function() {
    var popupContainer = popupWindow.document.querySelector('.popup-container');
    var windowHeight = popupWindow.innerHeight;
    var popupHeight = popupContainer.offsetHeight;
    var topOffset = Math.max((windowHeight - popupHeight) / 2, 0);
    popupContainer.style.marginTop = topOffset + 'px';
  };
  */
