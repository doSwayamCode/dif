const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    page: 'dashboard',
    title: 'Admin Dashboard'
  });
});

app.get('/social-media', (req, res) => {
  res.render('index', { 
    page: 'social-media',
    title: 'Social Media'
  });
});

app.get('/photos', (req, res) => {
  res.render('index', { 
    page: 'photo-gallery',
    title: 'Photo Gallery'
  });
});

app.get('/videos', (req, res) => {
  res.render('index', { 
    page: 'video-gallery',
    title: 'Video Gallery'
  });
});

app.get('/users', (req, res) => {
  res.render('index', { 
    page: 'user-management',
    title: 'User Management'
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
