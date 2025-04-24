# Resume Tailor App - Frontend Client

This is the frontend client component of the Resume Tailor App, built with React and Vite.

## 🏗️ Architecture

The client is built using:

- React 19 for the UI framework
- Vite for development and building
- Axios for API communication
- Tailwind CSS for styling

## 📁 Directory Structure

```
client/
├── src/                  # Source files
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── components/      # Reusable components
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🔧 Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Environment setup**:
   Create a `.env` file in the client directory:
   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

## 🚀 Running the Client

1. **Development mode**:

   ```bash
   npm run dev
   ```

   The client will start at http://127.0.0.1:5173

2. **Production build**:
   ```bash
   npm run build
   ```
   The build output will be in the `dist` directory

## 🎨 UI Components

### Main Components

1. **App.jsx**

   - Main application component
   - Handles state management
   - Manages API communication

2. **File Upload Component**

   - Handles resume file selection
   - Validates file types
   - Shows upload progress

3. **Job Description Input**

   - Text area for job description
   - Character limit validation
   - Auto-save functionality

4. **Results Display**
   - Shows resume score
   - Displays improvement suggestions
   - Provides tailored resume output

## 🔌 API Integration

The client communicates with the backend through these endpoints:

### Resume Analysis

```javascript
const analyzeResume = async (resumeFile, jobDescription) => {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jd", jobDescription);

  const response = await axios.post(`${API_URL}/upload`, formData);
  return response.data;
};
```

### Resume Tailoring

```javascript
const tailorResume = async (resumeFile, jobDescription) => {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jd", jobDescription);

  const response = await axios.post(`${API_URL}/rewrite`, formData);
  return response.data;
};
```

## 🎯 Features

### Resume Analysis

- File upload with drag-and-drop
- Real-time validation
- Progress indicators
- Error handling

### Job Description Input

- Rich text editor
- Auto-save functionality
- Character count
- Formatting options

### Results Display

- Score visualization
- Suggestion categorization
- Export options
- Copy to clipboard

## 🛠️ Development

### Adding New Components

1. Create a new file in the `src/components` directory
2. Export the component
3. Import and use it in `App.jsx`

Example:

```jsx
// src/components/NewComponent.jsx
import React from "react";

export const NewComponent = () => {
  return <div>New Component</div>;
};
```

### Styling

The application uses Tailwind CSS for styling. To add new styles:

1. Use Tailwind classes directly in components
2. For custom styles, add them to the component file
3. For global styles, modify `index.css`

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Issues**:

   - Verify backend server is running
   - Check CORS settings
   - Verify API URL in environment variables

2. **Build Issues**:

   - Clear node_modules and reinstall
   - Check for version conflicts
   - Verify all dependencies are installed

3. **Performance Issues**:
   - Check for unnecessary re-renders
   - Optimize large file handling
   - Implement proper loading states

## 📚 Dependencies

Key dependencies and their purposes:

- `react`: UI framework
- `vite`: Build tool and dev server
- `axios`: HTTP client
- `tailwindcss`: CSS framework
- `react-dom`: React DOM rendering

## 🔒 Security

- Input validation on client side
- File type validation
- Secure API communication
- Environment variable protection

## 📈 Performance

- Code splitting
- Lazy loading
- Optimized builds
- Efficient state management
