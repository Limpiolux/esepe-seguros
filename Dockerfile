# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación (excepto node_modules) al contenedor
COPY . ./

# Instala las dependencias
RUN npm install

# Compila la aplicación (si es necesario)
RUN npm run build

# Expon el puerto en el que tu aplicación se ejecutará
EXPOSE 8002

# Inicia la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]
