# Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js.

### Prerequisites
- GitHub account
- Your portfolio code pushed to GitHub

### Steps

1. **Push to GitHub**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Create repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Click "Import Project"
   - Import your portfolio repository
   - Keep all default settings
   - Click "Deploy"

3. **Done!**
   Your site will be live at: `your-portfolio.vercel.app`

### Custom Domain on Vercel

1. **Buy a Domain**
   - Namecheap, GoDaddy, Google Domains, etc.
   - Recommended: `.dev`, `.com`, `.io`

2. **Add to Vercel**
   - In your Vercel project dashboard
   - Go to Settings → Domains
   - Enter your domain name
   - Follow DNS configuration instructions

3. **Update DNS**
   - Add A record: `76.76.21.21`
   - Or CNAME record to `cname.vercel-dns.com`
   - Wait 24-48 hours for propagation

---

## 🌐 Deploy to Netlify

### Via Git

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Choose GitHub and select your repository
   - Build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```
   - Click "Deploy site"

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 🚂 Deploy to Railway

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy**
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your portfolio repository
   - Railway auto-detects Next.js
   - Click "Deploy"

3. **Custom Domain**
   - Go to Settings → Domains
   - Add your domain
   - Update DNS records as instructed

---

## ☁️ Deploy to AWS Amplify

1. **Create AWS Account**
   - Go to [aws.amazon.com](https://aws.amazon.com)

2. **Open Amplify Console**
   - Search for "Amplify" in AWS Console
   - Click "Get Started" under Amplify Hosting

3. **Connect Repository**
   - Choose GitHub
   - Authorize AWS Amplify
   - Select your repository
   - Configure build settings (usually auto-detected)
   - Deploy

---

## 📦 Build for Static Hosting

If you want to host on platforms like GitHub Pages or traditional web hosts:

### Generate Static Export

1. **Update next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   
   module.exports = nextConfig;
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Output**
   Static files will be in the `out` directory.

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: gh-pages branch
   - Your site will be at: `username.github.io/repository-name`

---

## 🐳 Deploy with Docker

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Deploy to Docker Hub

```bash
# Tag
docker tag portfolio your-username/portfolio:latest

# Push
docker push your-username/portfolio:latest
```

---

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

### Content
- [ ] All personal information updated
- [ ] Resume PDF added to `/public`
- [ ] All project links working
- [ ] All social media links correct
- [ ] Achievement details accurate

### Technical
- [ ] `npm run build` completes without errors
- [ ] All pages load correctly in production mode
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Links open in new tabs where appropriate

### SEO
- [ ] Page title set correctly
- [ ] Meta description added
- [ ] OG tags configured
- [ ] Favicon added
- [ ] Robots.txt added (if needed)

### Performance
- [ ] Lighthouse score > 90
- [ ] Images compressed
- [ ] No unused dependencies
- [ ] Bundle size reasonable

---

## 🎯 Post-Deployment

### 1. Test Your Site

Visit your deployed URL and check:
- [ ] All sections load
- [ ] Navigation works
- [ ] Links work (GitHub, LinkedIn, etc.)
- [ ] Resume downloads
- [ ] Mobile view
- [ ] Animations smooth
- [ ] No broken images

### 2. Set Up Analytics (Optional)

**Google Analytics**

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Set Up Monitoring

**Vercel Analytics** (if using Vercel)
- Automatically enabled
- View in Vercel dashboard

**External Tools**
- [UptimeRobot](https://uptimerobot.com) - Monitor uptime
- [Google Search Console](https://search.google.com/search-console) - SEO monitoring

### 4. Share Your Portfolio

Add your portfolio URL to:
- [ ] GitHub profile README
- [ ] LinkedIn profile
- [ ] Resume
- [ ] Email signature
- [ ] Twitter/X bio
- [ ] Dev.to profile
- [ ] Hashnode profile

---

## 🔄 Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployment when you push to GitHub:

**Vercel/Netlify**
- Automatically deploys on every push to main branch
- Preview deployments for pull requests

**Configure**
- In platform settings, ensure auto-deploy is enabled
- Set production branch (usually `main`)
- Configure branch previews if desired

### Workflow

```bash
# Make changes locally
git add .
git commit -m "Update projects section"
git push origin main

# Platform automatically:
# 1. Detects push
# 2. Runs build
# 3. Deploys if successful
# 4. Sends notification
```

---

## 🌍 CDN and Performance

### Vercel Edge Network
- Automatically uses global CDN
- No configuration needed
- Assets cached at edge

### Cloudflare (Optional Enhancement)
1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers
4. Enable performance features:
   - Auto minify
   - Brotli compression
   - HTTP/3

---

## 🔒 Security

### HTTPS
- Automatically enabled on Vercel, Netlify
- Free SSL certificates
- Force HTTPS in settings

### Security Headers
Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Use tools like:
   # - TinyPNG (tinypng.com)
   # - ImageOptim (imageoptim.com)
   # - Squoosh (squoosh.app)
   ```

2. **Analyze Bundle**
   ```bash
   npm run build
   # Check output for bundle sizes
   ```

3. **Test Performance**
   - Run Lighthouse in Chrome DevTools
   - Aim for scores > 90 in all categories

---

## 🆘 Troubleshooting

### Build Fails

**Check logs** for specific error

Common issues:
- Missing environment variables
- TypeScript errors
- ESLint errors

**Solution:**
```bash
# Run build locally first
npm run build

# Fix all errors before deploying
```

### Site Doesn't Update

- **Clear cache** in platform dashboard
- **Force redeploy** from platform UI
- Check if correct branch is deployed

### 404 Errors

- Ensure `app/page.tsx` exists
- Check routing configuration
- Verify build completed successfully

### Slow Loading

- Check image sizes
- Review bundle size
- Enable caching
- Use CDN

---

## 📝 Maintenance

### Regular Updates

**Monthly**
- Update dependencies
  ```bash
  npm update
  ```
- Check for security vulnerabilities
  ```bash
  npm audit
  ```

**Quarterly**
- Update projects section
- Add new skills
- Refresh achievements
- Update resume

**Annually**
- Review entire content
- Update design if needed
- Check all external links
- Renew domain

---

## 🎉 Success!

Your portfolio is now live and accessible to the world! 

**Next Steps:**
1. Share your portfolio URL
2. Set up analytics
3. Monitor performance
4. Keep content updated
5. Apply for jobs! 💼

Good luck with your developer journey! 🚀
