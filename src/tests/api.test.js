// Importamos as funções que criamos no arquivo api.js
const { fetchCats, fetchCatById, fetchRandomCat } = require('../api');

// Teste para verificar se a função fetchCats busca uma lista de gatos
test('fetches all cats from API', async () => {
    // Chamamos a função que busca todos os gatos
    const cats = await fetchCats();
    
    // Verificamos se o resultado é um array (lista)
    expect(Array.isArray(cats)).toBe(true);
    
    // Verificamos se o array contém pelo menos 1 gato
    expect(cats.length).toBeGreaterThan(0);
});

// Teste para verificar se a função fetchCatById busca um gato específico
test('fetches a single cat by ID', async () => {
    // Chamamos a função que busca um gato específico pelo ID
    const cat = await fetchCatById(1); // Use um ID válido
    
    // Verificamos se o gato retornado tem o ID 1
    expect(cat.id).toBe(1);
});

// Teste para verificar se a função fetchRandomCat busca um gato aleatório
test('fetches a random cat image', async () => {
    // Chamamos a função que busca uma imagem de gato aleatória
    const randomCat = await fetchRandomCat();
    
    // Verificamos se o objeto retornado tem uma propriedade 'id'
    expect(randomCat).toHaveProperty('id');
    
    // Verificamos se o objeto retornado tem uma propriedade 'url', que é a URL da imagem
    expect(randomCat).toHaveProperty('url');
});
