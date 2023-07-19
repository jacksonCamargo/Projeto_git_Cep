
const cepInput = document.getElementById('Cep');
const addressInput = document.getElementById('logradouro');
const neighborhoodInput = document.getElementById('bairro');
const cityInput = document.getElementById('localidade');
const stateInput = document.getElementById('uf');

cepInput.addEventListener('blur', async () => {
  const cep = cepInput.value.replace(/\D/g, '');

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    addressInput.value = data.logradouro;
    neighborhoodInput.value = data.bairro;
    cityInput.value = data.localidade;
    stateInput.value = data.uf;
    
  } catch (error) {
    console.log('Ocorreu um erro:', error);
  }
});
console.log(cep);