function capturar(){

    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let valor3 = document.getElementById("valor3").value
    let valor4 = document.getElementById("valor4").value
    let valor5 = document.getElementById("valor5").value

    let valorPoduto1 = ""
    let valorProduto2 = ""
    let valorProduto3 = ""
    let valorProduto4 = ""
    let valorProduto5 = ""

    let totalProduto = ""

    valorPoduto1 = valor1 * 6
    valorProduto2 = valor2 * 9
    valorProduto3 = valor3 * 5
    valorProduto4 = valor4 * 4
    valorProduto5 = valor5 * 40

    totalProduto = valorPoduto1 + valorProduto2 + valorProduto3 + valorProduto4 + valorProduto5
    
    
     document.getElementById("valorDigitado").innerHTML = totalProduto  
}
