# Gunakan node image dari Docker Hub
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Port yang akan di-Expose
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["npm", "start"]
