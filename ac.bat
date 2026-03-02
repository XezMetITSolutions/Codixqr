@echo off
cd /d "%~dp0"
echo CodiXQR sitesi baslatiliyor...
echo Tarayicida aciliyor: http://localhost:8000
echo.
echo Durdurmak icin bu pencereyi kapatin (X) veya Ctrl+C basin.
echo.
start http://localhost:8000
python -m http.server 8000
pause
