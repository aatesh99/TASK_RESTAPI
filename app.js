// app.js

// 1. Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

// 2. Import required modules
const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/task.routes'); // We'll create this later
const errorHandler = require('./middlewares/errorHandler'); // We'll create this later

// 3. Create the Express app
const app = express();

// 4. Middleware to parse JSON requests
app.use(express.json());

// 5. Middleware to log incoming requests
app.use(morgan('dev'));

// 6. Mount all /tasks endpoints
app.use('/tasks', taskRoutes);

// 7. Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 8. Central error handler
app.use(errorHandler);

// 9. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});