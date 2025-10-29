#!/bin/bash

# SEO MASTER HUB - Startup Script
# This script sets up and launches the SEO MASTER HUB application

echo "🎯 SEO MASTER HUB - Ultimate SEO Authority Application"
echo "=============================================="
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies. Please check your network connection."
        echo "💡 If behind a proxy, configure npm proxy settings:"
        echo "   npm config set proxy http://proxy-server:port"
        echo "   npm config set https-proxy http://proxy-server:port"
        exit 1
    fi
    
    echo "✅ Dependencies installed successfully"
    echo ""
fi

# Build the application
echo "🏗️  Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Starting development server instead..."
    echo ""
    echo "🚀 Starting SEO MASTER HUB in development mode..."
    echo "📱 Mobile-First Design | 🎨 Black Box Aesthetic | 🔥 Expert-Level Content"
    echo ""
    echo "   Local:    http://localhost:3000"
    echo "   Network:  http://$(hostname -I | awk '{print $1}'):3000"
    echo ""
    echo "📞 Expert Consultation: https://wa.me/96176578651"
    echo "🔗 LinkedIn: https://www.linkedin.com/in/hamzanabulsii/"
    echo ""
    
    npm run dev
else
    echo "✅ Build completed successfully"
    echo ""
    echo "🚀 Starting SEO MASTER HUB in production mode..."
    echo "📱 Mobile-First Design | 🎨 Black Box Aesthetic | 🔥 Expert-Level Content"
    echo ""
    echo "   Local:    http://localhost:3000"
    echo "   Network:  http://$(hostname -I | awk '{print $1}'):3000"
    echo ""
    echo "📞 Expert Consultation: https://wa.me/96176578651"
    echo "🔗 LinkedIn: https://www.linkedin.com/in/hamzanabulsii/"
    echo ""
    
    npm start
fi