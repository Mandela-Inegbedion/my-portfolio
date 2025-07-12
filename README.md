# Vanilla Portfolio Website

A professional, responsive portfolio website built with pure HTML, CSS, and JavaScript. No frameworks or libraries required - just clean, modern web development.

## Features

✨ **Modern Design**
- Clean, professional layout
- Responsive design for all devices
- Smooth animations and transitions
- Interactive elements with hover effects

🌙 **Dark Mode**
- Toggle between light and dark themes
- Persistent theme preference in localStorage
- Smooth color transitions

📱 **Mobile-First Responsive**
- Fully responsive across all screen sizes
- Touch-friendly navigation
- Optimized for mobile performance

🎨 **Interactive Elements**
- Typing animation in hero section
- Project showcase with modal details
- Contact form with validation
- Smooth scroll navigation
- Back-to-top button

⚡ **Performance Optimized**
- Vanilla JavaScript for fast loading
- Optimized images and assets
- Throttled scroll events
- Efficient animations using CSS transforms

🔧 **Easy to Customize**
- Well-organized code structure
- CSS custom properties for theming
- Data-driven content (easily editable)
- Comprehensive comments

## Quick Start

1. **Download the files**
   - `index.html` - Main HTML structure
   - `styles.css` - All styling and animations
   - `script.js` - JavaScript functionality

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **Customize your content**
   - Edit personal information in `script.js`
   - Update colors and styling in `styles.css`
   - Modify content in `index.html`

## File Structure

```
vanilla-portfolio/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization Guide

### 1. Personal Information

Edit the data arrays in `script.js`:

```javascript
// Update your skills
const skills = [
    { name: "Your Skill", icon: "fab fa-icon", color: "blue" },
    // Add your skills here
];

// Update your projects
const projects = [
    {
        title: "Your Project",
        description: "Project description",
        // Add your projects here
    }
];

// Update your experience
const experiences = [
    {
        title: "Your Job Title",
        company: "Company Name",
        // Add your experience here
    }
];
```

### 2. Colors and Styling

Customize the color scheme in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;      /* Main brand color */
    --background-color: #ffffff;   /* Light background */
    --foreground-color: #0f172a;   /* Text color */
    /* Modify these colors to match your brand */
}

[data-theme="dark"] {
    --background-color: #0f172a;   /* Dark background */
    --foreground-color: #f8fafc;   /* Light text */
    /* Dark mode colors */
}
```

### 3. Content Sections

Update the HTML content in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">
    Hi, I'm <span class="text-primary">Your Name</span>
</h1>

<!-- About Section -->
<img src="your-photo.jpg" alt="Your Name" class="profile-image">
<p class="about-text">Your personal bio...</p>

<!-- Update all sections with your information -->
```

### 4. Images

Replace placeholder images with your own:

- **Profile photo**: Update the `src` attribute in the about section
- **Project screenshots**: Update image URLs in the projects data
- **Optimize images**: Use WebP format for better performance

### 5. Contact Information

Update contact details in `script.js`:

```javascript
const contactInfo = [
    {
        icon: "fas fa-envelope",
        title: "Email",
        value: "your-email@example.com"
    },
    // Update with your contact info
];
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- **Lazy loading**: Images load when needed
- **Smooth scrolling**: CSS scroll-behavior
- **Throttled events**: Optimized scroll listeners
- **Efficient animations**: Hardware-accelerated CSS
- **Minimal JavaScript**: No external dependencies

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Screen reader support
- **Keyboard navigation**: Full keyboard accessibility
- **Focus management**: Visible focus indicators
- **Color contrast**: WCAG compliant colors

## SEO Optimization

- **Meta tags**: Title, description, and Open Graph
- **Structured data**: Proper HTML semantics
- **Performance**: Fast loading for better rankings
- **Mobile-friendly**: Responsive design
- **Clean URLs**: Simple navigation structure

## Deployment Options

### 1. GitHub Pages
1. Upload files to a GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Your site will be live at `username.github.io/repository`

### 2. Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly
3. Custom domain support available

### 3. Vercel
1. Connect your GitHub repository
2. Automatic deployments on push
3. Fast global CDN

### 4. Traditional Web Hosting
1. Upload files via FTP
2. Point domain to the folder
3. Works with any web server

## Development Tips

### Local Development
```bash
# Use a simple HTTP server for local testing
python -m http.server 8000
# or
npx serve .
```

### Image Optimization
- Use WebP format for better compression
- Compress images before uploading
- Use appropriate image sizes
- Consider lazy loading for better performance

### Performance Testing
- Use Google PageSpeed Insights
- Test on different devices
- Monitor loading times
- Optimize based on results

## Common Customizations

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation in both desktop and mobile menus
4. Add scroll behavior if needed

### Changing Animations
- Modify CSS animations in `styles.css`
- Update JavaScript intersection observer
- Test across different browsers
- Consider reduced motion preferences

### Adding New Features
- Contact form backend integration
- Blog section
- Testimonials carousel
- Skills progress bars
- Interactive timeline

## Troubleshooting

### Common Issues

**Images not loading**
- Check file paths are correct
- Ensure images are in the same directory
- Verify image file formats are supported

**Animations not working**
- Check browser support for CSS animations
- Verify JavaScript is enabled
- Test intersection observer functionality

**Dark mode not saving**
- Check localStorage is supported
- Verify JavaScript is running
- Test in private/incognito mode

**Mobile layout issues**
- Test on actual devices
- Check viewport meta tag
- Verify responsive breakpoints

## Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

## License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**

Built with ❤️ using vanilla HTML, CSS, and JavaScript.