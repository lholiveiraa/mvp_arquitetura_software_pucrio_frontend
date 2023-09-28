# Use uma imagem base que inclua o ambiente Node.js, por exemplo:
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do seu aplicativo React para o contêiner
COPY . .

# Instale as dependências do Node.js
RUN npm install

# Construa seu aplicativo React
RUN npm run build

# Exponha a porta em que seu aplicativo estará em execução (porta padrão 3000)
EXPOSE 3000

# Comando para iniciar seu aplicativo React quando o contêiner for iniciado
CMD ["npm", "start"]
