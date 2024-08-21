const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Função de conversão de temperaturas
const convertTemperature = (type, temperature) => {
  switch (type.toUpperCase()) {
    case 'C':
      return (temperature * 9/5) + 32; // Celsius para Fahrenheit
    case 'F':
      return (temperature - 32) * 5/9; // Fahrenheit para Celsius
    default:
      throw new Error('Tipo de conversão inválido. Use "C" para Celsius ou "F" para Fahrenheit.');
  }
};

// Rota para a conversão de temperatura
app.post('/convert', (req, res) => {
  const { type, temperature } = req.body;

  if (typeof type !== 'string' || typeof temperature !== 'number') {
    return res.status(400).json({ error: 'Entrada inválida. Forneça "type" como string e "temperatura" como número.' });
  }

  try {
    const result = convertTemperature(type, temperature);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
