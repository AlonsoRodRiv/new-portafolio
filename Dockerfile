# Etapa de compilación
FROM node:16-alpine as build-stage

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine as production-stage

# Copiar archivos compilados desde la etapa de construcción
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]