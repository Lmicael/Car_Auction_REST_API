const request = require('supertest');
const app = require('../api/Server');

describe('Testes de Integração para Endpoints', () => {

  it('Deve obter informações de um carro por ID', async () => {
    const response = await request(app).get('/api/list/65d7579f0a0db64fe1e2c0e8');
    expect(response.status).toBe(200);
  });

  it('Deve registrar um usuário', async () => {
    const userData = {
      "name": "Mariana Cristiane de Paula",
      "birth_date": "17/01/1985",
      "email": "mariana_cristiane_depaula@outershoes.com.br",
      "telephone": "(98) 99911-1556",
      "document_number": "632.650.980-79"
    };
    const response = await request(app).post('/api/register/user').send(userData);
    expect(response.status).toBe(201);
  });

  it('Deve registrar um lance', async () => {
    const auctionData = {
      "user": "Harry Potter",
      "document_number": "987.654.321-00",
      "value": 99525,
      "car_id": "65d5f72c104e680c9598a498"
    };
    const response = await request(app).post('/api/register/auction').send(auctionData);
    expect(response.status).toBe(201);
  });

  it('Deve registrar um carro', async () => {
    const carData = {
      "model": "MITSUBISHI L200 TRITON",
      "year": 2023,
      "color": "Prata",
      "initial_value": 145000,
      "description": "2.4 16V TURBO DIESEL SPORT HPE CD 4P 4X4 AUTOMÁTICO",
      "KM": "75.761",
      "Combustivel": "Diesel",
      "Carroceria": "Picape",
      "Cambio": "Automática",
      "image_url": "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240211/mitsubishi-l200-triton-2.4-16v-turbo-diesel-sport-hpe-cd-4p-4x4-automatico-wmimagem01335257040.jpg?s=fill&w=1920&h=1440&q=75",
      "status": true
    };
    const response = await request(app).post('/api/register/car').send(carData);
    expect(response.status).toBe(201);
  });

  it('Deve atualizar informações de um carro por ID', async () => {
    const response = await request(app).put('/api/end/65d5f72c104e680c9598a498');
    expect(response.status).toBe(200);
  });
});
