# Zentrox Recruitment Consultancy Website

A complete, modern, and responsive website for Zentrox - a leading recruitment consultancy connecting top talent with peak opportunities.

## 📋 Features

### Pages
- **Home** - Landing page with hero section, services overview, and statistics
- **About** - Company mission, vision, values, and team information
- **Services** - Detailed descriptions of all recruitment services and industries served
- **Jobs** - Job listings with advanced filtering and search functionality
- **Blog** - Recruitment insights, career tips, and industry trends
- **Contact** - Contact form, business information, and location map

### Key Features
- ✨ Modern dark theme with cyan accent color
- 📱 Fully responsive design (works on all devices)
- 🎨 Smooth animations and transitions
- 🔍 Search and filter functionality for job listings
- 📧 Contact forms with validation
- ♿ Accessibility optimized
- ⚡ Fast loading and optimized performance
- 🔗 Navigation breadcrumbs and internal linking

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Interactive features and functionality
- **Font Awesome** - Icons
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
zentrox.github.io/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── jobs.html               # Jobs page
├── blog.html               # Blog page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/zentroxhr/zentrox.github.io.git
```

2. Navigate to the project directory:
```bash
cd zentrox.github.io
```

3. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
npx http-server
```

4. Visit `http://localhost:8000` in your browser

### Deployment

This website is hosted on GitHub Pages. Changes pushed to the main branch will automatically deploy.

## 📝 Content Management

### Adding a New Job Listing

1. Open `jobs.html`
2. Find the `.jobs-list` section
3. Copy an existing `.job-card` and modify the content:

```html
<div class="job-card" data-location="City" data-category="Category">
    <div class="job-header">
        <h3>Job Title</h3>
        <span class="job-type">Employment Type</span>
    </div>
    <p class="job-company">Company Name</p>
    <div class="job-details">
        <span><i class="fas fa-map-marker-alt"></i> Location</span>
        <span><i class="fas fa-briefcase"></i> Category</span>
        <span><i class="fas fa-rupee-sign"></i> Salary Range</span>
    </div>
    <p class="job-description">Job description here...</p>
    <a href="#" class="btn-apply">Apply Now</a>
</div>
```

### Adding a Blog Post

1. Open `blog.html`
2. Find the `.blog-posts` section
3. Copy an existing `.blog-post` and modify the content

## 🎨 Customization

### Color Scheme

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00e5ff;        /* Cyan accent */
    --secondary-color: #121826;      /* Dark card background */
    --dark-bg: #0b0f19;              /* Main background */
    --text-light: #cbd5e1;           /* Primary text */
    --text-lighter: #94a3b8;         /* Secondary text */
    --border-color: #1f2937;         /* Border color */
}
```

### Fonts

The website uses the "Poppins" font family from Google Fonts. To change fonts, update the link in the HTML head and the CSS font-family property.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

**Zentrox Recruitment Consultancy**
- Email: info@zentrox.com
- Phone: +91 86100 27046
- Location: Chennai, Tamil Nadu, India

## 📄 License

All content and code is proprietary to Zentrox Recruitment Consultancy.

## 🤝 Contributing

For suggestions or issues, please contact the team directly.

## 📊 Analytics

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add this code before the closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🔒 SEO Optimization

The website includes:
- Meta tags and descriptions
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Proper heading hierarchy

---

**Version**: 1.0.0  
**Last Updated**: June 2026  
**Status**: Active
