@echo off
echo Starting Resume Tailor Application...

:: Start backend server
echo Starting backend server...
start cmd /k "cd server && venv\Scripts\activate && python main.py"

:: Start frontend server
echo Starting frontend server...
start cmd /k "cd client && npm run dev"

echo.
echo Application is starting up...
echo Backend server will be available at: http://127.0.0.1:8000
echo Frontend server will be available at: http://127.0.0.1:5173
echo.
echo Press any key to close this window...
pause > nul 