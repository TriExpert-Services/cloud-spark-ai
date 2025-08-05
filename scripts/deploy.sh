#!/bin/bash

# Deployment script for TriExpert Services AI
# This script builds and deploys the Docker container

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
IMAGE_NAME="triexpert-services-ai"
CONTAINER_NAME="triexpert-web"
PORT=${PORT:-80}
ENV_FILE=${ENV_FILE:-.env.production}

# Check if .env.production exists
if [ ! -f "$ENV_FILE" ]; then
    echo -e "${YELLOW}Warning: $ENV_FILE not found. Creating from .env.docker...${NC}"
    cp .env.docker "$ENV_FILE"
fi

# Build the Docker image
echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t $IMAGE_NAME:latest .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker image built successfully${NC}"
else
    echo -e "${RED}❌ Failed to build Docker image${NC}"
    exit 1
fi

# Stop and remove existing container if it exists
echo -e "${YELLOW}🛑 Stopping existing container...${NC}"
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Run the new container
echo -e "${YELLOW}🚀 Starting new container...${NC}"
docker run -d \
    --name $CONTAINER_NAME \
    --restart unless-stopped \
    -p $PORT:80 \
    --env-file $ENV_FILE \
    --health-cmd="curl -f http://localhost/health || exit 1" \
    --health-interval=30s \
    --health-timeout=10s \
    --health-retries=3 \
    $IMAGE_NAME:latest

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Container started successfully${NC}"
    echo -e "${GREEN}🌐 Application is available at http://localhost:$PORT${NC}"
    
    # Wait for health check
    echo -e "${YELLOW}⏳ Waiting for application to be healthy...${NC}"
    timeout=60
    counter=0
    
    while [ $counter -lt $timeout ]; do
        if docker exec $CONTAINER_NAME curl -f http://localhost/health >/dev/null 2>&1; then
            echo -e "${GREEN}✅ Application is healthy and ready!${NC}"
            break
        fi
        sleep 2
        counter=$((counter + 2))
        echo -n "."
    done
    
    if [ $counter -ge $timeout ]; then
        echo -e "${RED}❌ Application health check timeout${NC}"
        docker logs $CONTAINER_NAME --tail 50
        exit 1
    fi
    
else
    echo -e "${RED}❌ Failed to start container${NC}"
    exit 1
fi

# Clean up old images
echo -e "${YELLOW}🧹 Cleaning up old images...${NC}"
docker image prune -f

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Container status:${NC}"
docker ps | grep $CONTAINER_NAME