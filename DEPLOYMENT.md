# 🚀 Vercel Deployment Guide (SQLite Demo)

This guide will help you deploy your ngXpress application to Vercel with SQLite database for demo purposes. Perfect for showcasing your app without the complexity of setting up external databases.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for local testing)

## 🗄️ Database Setup (SQLite)

SQLite is perfect for demo apps! No external database setup required.

### SQLite Configuration

1. **Database File:**
   - SQLite database file (`dev.db`) is included in your project
   - Automatically copied to the correct location during build
   - No external database setup needed

2. **Prisma Schema:**
   - Already configured for SQLite
   - No changes needed for deployment

3. **Generate Prisma Client:**
   ```bash
   npm run db:generate
   ```

## 🔧 Environment Variables Setup

### Required Environment Variables

Set these in your Vercel project settings:

```env
# Database URL (SQLite for demo)
DATABASE_URL="file:./dev.db"

# Authentication
BETTER_AUTH_SECRET="your-super-secret-key-here-minimum-32-characters"
BETTER_AUTH_URL="https://your-app.vercel.app"

# Node Environment
NODE_ENV="production"
```

### How to Set Environment Variables in Vercel

1. **Via Vercel Dashboard:**
   - Go to your project in Vercel dashboard
   - Navigate to "Settings" → "Environment Variables"
   - Add each variable with the appropriate value

2. **Via Vercel CLI:**
   ```bash
   vercel env add DATABASE_URL
   vercel env add BETTER_AUTH_SECRET
   vercel env add BETTER_AUTH_URL
   ```

## 🚀 Deployment Steps

### Step 1: Connect Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment with SQLite"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will automatically detect it's an Angular project

### Step 2: Configure Build Settings

Vercel will automatically use the configuration from `vercel.json`, but you can customize:

- **Framework Preset:** Angular
- **Build Command:** `npm run build:vercel`
- **Output Directory:** `dist/ngxpress`
- **Install Command:** `npm install`

### Step 3: Deploy

1. **Automatic Deployment:**
   - Vercel will automatically deploy when you push to your main branch
   - Each pull request will create a preview deployment

2. **Manual Deployment:**
   ```bash
   vercel --prod
   ```

## 🔍 Post-Deployment Setup

### Database Setup

After deployment, the SQLite database will be automatically set up:

```bash
# The database file is automatically copied during build
# No additional setup needed for SQLite
```

### Verify Deployment

1. **Check your app URL** (provided by Vercel)
2. **Test authentication flow**
3. **Verify database operations** (todos, user registration, etc.)
4. **Check SSR functionality**

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Database Issues:**
   - Verify `DATABASE_URL` is set to `"file:./dev.db"`
   - Check if database file is included in deployment
   - Ensure Prisma client is generated

3. **Authentication Issues:**
   - Verify `BETTER_AUTH_URL` matches your Vercel domain
   - Check `BETTER_AUTH_SECRET` is properly set
   - Ensure redirect URLs are configured correctly

### Debug Commands

```bash
# Check build locally
npm run build:vercel

# Test database connection
npx prisma db push

# Check environment variables
vercel env ls

# View deployment logs
vercel logs
```

## 🔄 Continuous Deployment

### Automatic Deployments

- **Main branch:** Automatic production deployment
- **Feature branches:** Automatic preview deployments
- **Pull requests:** Preview deployments with unique URLs

### Custom Domains

1. **Add Custom Domain:**
   - Go to Vercel dashboard → "Settings" → "Domains"
   - Add your custom domain
   - Update `BETTER_AUTH_URL` to match

2. **SSL Certificate:**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

## 📊 Monitoring & Analytics

### Vercel Analytics

- **Performance monitoring** is built-in
- **Real-time analytics** available in dashboard
- **Error tracking** and logging

### SQLite Considerations

- **File-based database:** Data persists between deployments
- **No external monitoring needed:** Vercel handles the infrastructure
- **Perfect for demos:** Simple and reliable

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Never commit secrets to Git
   - Use Vercel's environment variable encryption
   - Rotate secrets regularly

2. **SQLite Security:**
   - Database file is automatically secured by Vercel
   - No external database connections to manage
   - Built-in file system security

3. **Authentication:**
   - Use strong `BETTER_AUTH_SECRET`
   - Configure proper redirect URLs
   - Enable CSRF protection

## 📈 Performance Optimization

### Vercel Optimizations

- **Edge Functions:** Automatically optimized
- **CDN:** Global content delivery
- **Caching:** Automatic static asset caching

### Application Optimizations

- **Angular SSR:** Already configured
- **Image optimization:** Use `NgOptimizedImage`
- **Bundle optimization:** Angular CLI optimizations

## 🎯 SQLite Benefits for Demo Apps

- **Zero Setup:** No external database configuration
- **Reliable:** File-based storage is very stable
- **Fast:** SQLite is extremely fast for demo workloads
- **Portable:** Database file travels with your app
- **Cost-effective:** No additional database costs

## 🆘 Support

If you encounter issues:

1. **Check Vercel documentation:** [vercel.com/docs](https://vercel.com/docs)
2. **Review build logs** in Vercel dashboard
3. **Check ngXpress issues:** [GitHub Issues](https://github.com/angularcafe/ngxpress/issues)
4. **Community support:** [Discord](https://discord.gg/angular)

---

**Happy Deploying! 🎉** 