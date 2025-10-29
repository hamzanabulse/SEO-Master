@echo off

REM SEO MASTER HUB - Windows Startup Script
REM This script sets up and launches the SEO MASTER HUB application

echo.
echo 🎯 SEO MASTER HUB - Ultimate SEO Authority Application
echo ==============================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ and try again.
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    
    if errorlevel 1 (
        echo ❌ Failed to install dependencies. Please check your network connection.
        echo 💡 If behind a proxy, configure npm proxy settings:
        echo    npm config set proxy http://proxy-server:port
        echo    npm config set https-proxy http://proxy-server:port
        pause
        exit /b 1
    )
    
    echo ✅ Dependencies installed successfully
    echo.
)

REM Build the application
echo 🏗️  Building the application...
npm run build

if errorlevel 1 (
    echo ❌ Build failed. Starting development server instead...
    echo.
    echo 🚀 Starting SEO MASTER HUB in development mode...
    echo 📱 Mobile-First Design ^| 🎨 Black Box Aesthetic ^| 🔥 Expert-Level Content
    echo.
    echo    Local:    http://localhost:3000
    echo.
    echo 📞 Expert Consultation: https://wa.me/96176578651
    echo 🔗 LinkedIn: https://www.linkedin.com/in/hamzanabulsii/
    echo.
    
    npm run dev
) else (
    echo ✅ Build completed successfully
    echo.
    echo 🚀 Starting SEO MASTER HUB in production mode...
    echo 📱 Mobile-First Design ^| 🎨 Black Box Aesthetic ^| 🔥 Expert-Level Content
    echo.
    echo    Local:    http://localhost:3000
    echo.
    echo 📞 Expert Consultation: https://wa.me/96176578651
    echo 🔗 LinkedIn: https://www.linkedin.com/in/hamzanabulsii/
    echo.
    
    npm start
)