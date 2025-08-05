# Docker Deployment Guide

Este documento explica cómo desplegar TriExpert Services AI usando Docker.

## 📋 Prerrequisitos

- Docker Engine 20.10+ instalado
- Docker Compose 2.0+ instalado
- Al menos 2GB de RAM disponible
- Puertos 80 y 443 disponibles

## 🚀 Despliegue Rápido

### Opción 1: Usando Docker Compose (Recomendado)

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd triexpert-services-ai

# 2. Configurar variables de entorno
cp .env.docker .env.production

# 3. Construir y ejecutar
docker-compose up -d

# 4. Verificar que funciona
curl http://localhost/health
```

### Opción 2: Usando el script de despliegue

```bash
# Hacer el script ejecutable
chmod +x scripts/deploy.sh

# Ejecutar el despliegue
./scripts/deploy.sh
```

### Opción 3: Comandos Docker manuales

```bash
# Construir la imagen
docker build -t triexpert-services-ai:latest .

# Ejecutar el contenedor
docker run -d \
  --name triexpert-web \
  --restart unless-stopped \
  -p 80:80 \
  --env-file .env.production \
  triexpert-services-ai:latest
```

## 🌐 Acceder a la Aplicación

Una vez desplegada, la aplicación estará disponible en:
- **HTTP**: http://localhost
- **Health Check**: http://localhost/health

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.production` con las siguientes variables:

```env
# Supabase
VITE_SUPABASE_URL=https://supabase.n8n-tech.cloud
VITE_SUPABASE_ANON_KEY=tu-clave-anonima

# Aplicación
NODE_ENV=production
```

### Configuración Avanzada

#### SSL/HTTPS

Para habilitar HTTPS, monta los certificados SSL:

```yaml
volumes:
  - ./ssl/cert.pem:/etc/nginx/ssl/cert.pem:ro
  - ./ssl/key.pem:/etc/nginx/ssl/key.pem:ro
```

#### Proxy Reverso

Si usas un proxy reverso como Traefik o nginx-proxy:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.triexpert.rule=Host(`tudominio.com`)"
  - "traefik.http.routers.triexpert.entrypoints=websecure"
  - "traefik.http.routers.triexpert.tls.certresolver=letsencrypt"
```

## 📊 Monitoreo y Logs

### Ver logs del contenedor
```bash
docker logs triexpert-web -f
```

### Verificar estado del contenedor
```bash
docker ps
docker stats triexpert-web
```

### Health Check
```bash
docker exec triexpert-web curl -f http://localhost/health
```

## 🛠️ Mantenimiento

### Actualizar la aplicación
```bash
# Detener el contenedor actual
docker stop triexpert-web

# Actualizar el código fuente
git pull

# Reconstruir y ejecutar
docker-compose up -d --build
```

### Backup
```bash
# Backup de logs
docker cp triexpert-web:/var/log/nginx ./backup/logs/

# Backup de configuración
cp .env.production ./backup/
```

### Limpieza
```bash
# Limpiar imágenes no utilizadas
docker image prune -f

# Limpiar todo (cuidado!)
docker system prune -af
```

## 🐛 Solución de Problemas

### El contenedor no arranca
```bash
# Ver logs detallados
docker logs triexpert-web

# Verificar la configuración
docker inspect triexpert-web
```

### Problemas de red
```bash
# Verificar puertos
netstat -tlnp | grep :80

# Verificar conectividad interna
docker exec triexpert-web curl -f http://localhost/health
```

### Problemas de memoria
```bash
# Verificar uso de recursos
docker stats

# Aumentar límites de memoria en docker-compose.yml
deploy:
  resources:
    limits:
      memory: 1G
```

## 🔒 Seguridad

### Mejores Prácticas

1. **No ejecutar como root**: El Dockerfile ya usa un usuario no-root
2. **Variables de entorno**: Nunca commitear archivos .env con datos sensibles
3. **HTTPS**: Usar siempre HTTPS en producción
4. **Firewall**: Configurar firewall para permitir solo los puertos necesarios
5. **Actualizaciones**: Mantener Docker y las imágenes base actualizadas

### Configuración de Firewall (UFW)
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 📈 Optimización de Rendimiento

### Configuración de Nginx

La configuración incluye:
- Compresión gzip
- Cache de archivos estáticos
- Headers de seguridad
- Optimizaciones de red

### Monitoreo de Recursos
```bash
# Uso de CPU y memoria
docker stats triexpert-web

# Conexiones de red
docker exec triexpert-web netstat -an | grep :80
```

## 🌍 Despliegue en Producción

### Usando un VPS/Cloud

1. **Configurar el servidor**
```bash
# Actualizar el sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Instalar Docker Compose
sudo apt install docker-compose-plugin -y
```

2. **Transferir el código**
```bash
# Usando git
git clone <repository-url>

# O usando scp
scp -r ./triexpert-services-ai user@server:/path/to/app
```

3. **Configurar dominio y SSL**
```bash
# Usando Certbot para Let's Encrypt
sudo apt install certbot
sudo certbot certonly --standalone -d tudominio.com
```

4. **Ejecutar en producción**
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📞 Soporte

Si encuentras problemas:

1. Revisa este README
2. Verifica los logs: `docker logs triexpert-web`
3. Consulta la documentación de Docker
4. Contacta al equipo de desarrollo

---

**Nota**: Esta guía asume un conocimiento básico de Docker. Para más información, consulta la [documentación oficial de Docker](https://docs.docker.com/).