// Primeiro, importamos o axios, que é a biblioteca para fazer requisições HTTP
const axios = require('axios');

// Definimos a URL base da API
const API_URL = 'https://api.thecatapi.com/v1';

// Função para buscar uma lista de gatos (a API não tem esse endpoint, então estou apenas exemplificando)
async function fetchCats() {
    // Fazemos uma requisição GET para a URL base /cats (exemplo fictício)
    const response = await axios.get(`${API_URL}/cats`);
    
    // Retornamos os dados da resposta
    return response.data;
}

// Função para buscar um gato específico pelo ID
async function fetchCatById(id) {
    // Fazemos uma requisição GET passando o ID para a URL
    const response = await axios.get(`${API_URL}/cats/${id}`);
    
    // Retornamos os dados do gato específico
    return response.data;
}

// Função para buscar uma imagem de um gato aleatório
async function fetchRandomCat() {
    // Fazemos uma requisição GET para o endpoint de imagens aleatórias
    const response = await axios.get(`${API_URL}/images/search`);
    
    // A API retorna um array com uma imagem, então pegamos o primeiro item [0]
    return response.data[0];
}

// Exportamos as funções para serem usadas em outros arquivos
module.exports = { fetchCats, fetchCatById, fetchRandomCat };
