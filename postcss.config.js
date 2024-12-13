module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // Valor base para calcular o rem (1rem = 16px por padrão)
      propList: ["*"], // Propriedades para aplicar a conversão
    },
  },
}
