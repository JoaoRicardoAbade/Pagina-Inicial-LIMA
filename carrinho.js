// Função para atualizar o preço total de cada produto baseado na quantidade (horário)
function atualizarPrecoTotal(produtoLinha) {
    const horario = produtoLinha.querySelector('.horario').value;
    const precoUnitario = parseFloat(produtoLinha.querySelector('.preco-unitario').innerText.replace('R$', '').replace(',', '.').replace('OO', '00'));
    const precoTotal = horario * precoUnitario;

    // Atualiza o valor total do produto na linha
    produtoLinha.querySelector('.preco-total').innerText = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

// Função para calcular o total final do carrinho baseado nos itens restantes
function calcularTotalFinal() {
    let totalFinal = 0;
    const produtosRestantes = document.querySelectorAll('tbody tr');

    produtosRestantes.forEach(produtoLinha => {
        const precoUnitario = parseFloat(produtoLinha.querySelector('.preco-unitario').innerText.replace('R$', '').replace(',', '.').replace('OO', '00'));
        totalFinal += precoUnitario;
    });

    // Atualiza o valor total final no HTML
    document.getElementById('total-final').innerText = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
}

// Função para remover um produto do carrinho
function removerProduto(produtoLinha) {
    produtoLinha.remove();
    calcularTotalFinal(); // Recalcula o total final após remoção
}

// Adiciona eventos para remover produtos
const botoesRemoverProduto = document.querySelectorAll('.remover-produto');

botoesRemoverProduto.forEach(botao => {
    botao.addEventListener('click', function() {
        const produtoLinha = this.closest('tr'); // Seleciona a linha correspondente
        removerProduto(produtoLinha); // Remove o produto
    });
});

// Calcula o total inicial ao carregar a página
calcularTotalFinal();
