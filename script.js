function parseNumero(valor){
 if (valor === null || valor === undefined) return 0;
 const s = String(valor).trim().replace(/\./g,'').replace(/,/g,'.');
 const n = parseFloat(s);
 return isNaN(n) ? 0 : n;
}

function formatMoney(n){
 return 'R$ ' + n.toFixed(2);
}

function adicionar() {
 const nome = document.getElementById('nome').value || '';
 const salario = parseNumero(document.getElementById('salário').value);
 const beneficios = parseNumero(document.getElementById('benefícios').value);
 const horasExtras = parseNumero(document.getElementById('horasExtras').value);
 const descontos = parseNumero(document.getElementById('descontos').value);
 const liquido = salario + beneficios + horasExtras - descontos;
 const tabela = document.getElementById('lista');
 const linha = document.createElement('tr');
 linha.innerHTML = `
 <td>${nome}</td>
 <td>${formatMoney(salario)}</td>
 <td>${formatMoney(beneficios)}</td>
 <td>${formatMoney(horasExtras)}</td>
 <td>${formatMoney(descontos)}</td>
 <td>${formatMoney(liquido)}</td>
 `;
 tabela.appendChild(linha);
 // limpa campos
 document.getElementById('nome').value = '';
 document.getElementById('salário').value = '';
 document.getElementById('benefícios').value = '0';
 document.getElementById('horasExtras').value = '0';
 document.getElementById('descontos').value = '0';
}

