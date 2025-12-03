# Stage 1: build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . ./
RUN npm run build --silent

# Stage 2: serve with nginx
FROM nginx:stable-alpine AS runtime

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=builder /app/dist/travel365 /usr/share/nginx/html

# Copy custom nginx config (optional)
# If you have a custom nginx.conf, COPY it here and update CMD.

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
