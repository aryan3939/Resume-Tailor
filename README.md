# 📄 Resume Tailor - AI-Powered Resume Optimization



A powerful web application that uses AI to analyze and optimize your resume for specific job descriptions. Built with React, FastAPI, and powered by OpenRouter AI.

## 🌟 Features

- **Resume Analysis**: Get detailed evaluation of your resume against job descriptions
- **AI-Powered Tailoring**: Receive intelligent suggestions to optimize your resume
- **Real-time Feedback**: Instant scoring and improvement recommendations
- **Easy Export**: Download or copy your tailored resume with one click
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Axios
- Tailwind CSS
- React Hooks

### Backend

- FastAPI
- Python 3.8+
- Uvicorn
- OpenRouter API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package manager)

## 🚀 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aryan3939/resume-tailor-app.git
   cd resume-tailor-app
   ```

2. **Set up the backend**:

   ```bash
   # Navigate to server directory
   cd server

   # Create and activate virtual environment
   python -m venv venv

   # Activate virtual environment
   # Windows CMD:
   venv\Scripts\activate
   # Windows PowerShell:
   .\venv\Scripts\Activate.ps1
   # Linux/Mac:
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt

   # Create .env file
   echo "OPENROUTER_API_KEY=your_api_key_here" > .env
   ```

3. **Set up the frontend**:

   ```bash
   # Navigate to client directory
   cd ../client

   # Install dependencies
   npm install

   # Create .env file
   echo "VITE_API_URL=http://127.0.0.1:8000" > .env
   ```

## 🏃‍♂️ Running the Application

### Option 1: Using the Start Script (Recommended)

1. **Return to the project root**:

   ```bash
   cd ..
   ```

2. **Run the start script**:
   - Windows: Double-click `start-servers.bat`
   - Or run from command line:
     ```bash
     start-servers.bat
     ```

### Option 2: Manual Start

1. **Start the backend server**:

   ```bash
   cd server
   venv\Scripts\activate  # Activate virtual environment
   python main.py
   ```

2. **Start the frontend server** (in a new terminal):

   ```bash
   cd client
   npm run dev
   ```

3. **Access the application**:
   - Frontend: http://127.0.0.1:5173
   - Backend API: http://127.0.0.1:8000

## 📁 Project Structure

```
resume-tailor-app/
├── client/                 # Frontend React application
│   ├── src/               # Source files
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Backend FastAPI application
│   ├── main.py           # Main application file
│   ├── routes/           # API routes
│   └── requirements.txt  # Backend dependencies
└── start-servers.bat     # Windows startup script
```

## 🔑 Environment Variables

### Backend (.env in server directory)

```
OPENROUTER_API_KEY=your_api_key_here
```

### Frontend (.env in client directory)

```
VITE_API_URL=http://127.0.0.1:8000
```

## 🐛 Troubleshooting

### Common Issues

1. **Dependency Installation Issues**:

   - Clear cache and reinstall:

     ```bash
     # For npm
     npm cache clean --force
     rm -rf node_modules
     npm install

     # For pip
     pip cache purge
     pip install -r requirements.txt
     ```

2. **Virtual Environment Issues**:

   - Delete and recreate virtual environment:
     ```bash
     rm -rf venv
     python -m venv venv
     ```

3. **API Connection Issues**:
   - Verify both servers are running
   - Check CORS settings
   - Verify environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Aryan** - [aryan3939](https://github.com/aryan3939)

## 🙏 Acknowledgments

- OpenRouter for providing the AI capabilities
- FastAPI and React communities for their excellent documentation
- All contributors who have helped improve this project
