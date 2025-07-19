# ✅ Vercel Deployment Checklist

Use this checklist to ensure your ngXpress app is ready for Vercel deployment.

## 🔧 Pre-Deployment Setup

- [ ] **Repository is pushed to GitHub**
- [ ] **Vercel account created** and connected to GitHub
- [ ] **Environment variables configured** in Vercel dashboard
- [ ] **Database setup completed** (PostgreSQL recommended for production)

## 🌍 Environment Variables

- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `BETTER_AUTH_SECRET` - Strong secret key (32+ characters)
- [ ] `BETTER_AUTH_URL` - Your Vercel app URL
- [ ] `NODE_ENV` - Set to "production"

## 🗄️ Database Configuration

- [ ] **PostgreSQL database created** (Vercel Postgres or external)
- [ ] **Prisma schema updated** for PostgreSQL (if using external DB)
- [ ] **Database migrations ready** (`npx prisma migrate dev`)
- [ ] **Connection string tested** locally

## 🔐 Authentication Setup

- [ ] **Better Auth configured** with production URLs
- [ ] **Redirect URLs updated** to match Vercel domain
- [ ] **Secret key generated** and secure
- [ ] **OAuth providers configured** (if using)

## 📦 Build Configuration

- [ ] **vercel.json** properly configured
- [ ] **package.json scripts** updated
- [ ] **Build command** working locally (`npm run build:vercel`)
- [ ] **Dependencies** all installed

## 🚀 Deployment Steps

1. **Import to Vercel:**
   - [ ] Go to [vercel.com/new](https://vercel.com/new)
   - [ ] Import your GitHub repository
   - [ ] Verify framework detection (Angular)

2. **Configure Build Settings:**
   - [ ] Build Command: `npm run build:vercel`
   - [ ] Output Directory: `dist/ngxpress`
   - [ ] Install Command: `npm install`

3. **Set Environment Variables:**
   - [ ] Add all required environment variables
   - [ ] Verify no typos in variable names
   - [ ] Test with preview deployment

4. **Deploy:**
   - [ ] Trigger initial deployment
   - [ ] Check build logs for errors
   - [ ] Verify app is accessible

## ✅ Post-Deployment Verification

- [ ] **App loads correctly** at Vercel URL
- [ ] **SSR working** (check page source)
- [ ] **Authentication flows** working
- [ ] **Database operations** functional
- [ ] **API endpoints** responding
- [ ] **Static assets** loading properly

## 🛠️ Troubleshooting

### Build Issues
- [ ] Check Node.js version compatibility
- [ ] Verify all dependencies in package.json
- [ ] Review build logs in Vercel dashboard

### Database Issues
- [ ] Verify DATABASE_URL format
- [ ] Check database accessibility
- [ ] Run migrations manually if needed

### Authentication Issues
- [ ] Verify BETTER_AUTH_URL matches domain
- [ ] Check redirect URL configuration
- [ ] Ensure secret key is properly set

## 🔄 Continuous Deployment

- [ ] **Automatic deployments** working
- [ ] **Preview deployments** for PRs
- [ ] **Custom domain** configured (if needed)
- [ ] **SSL certificate** active

## 📊 Monitoring

- [ ] **Vercel Analytics** enabled
- [ ] **Error tracking** configured
- [ ] **Performance monitoring** active
- [ ] **Database monitoring** set up

---

## 🎯 Quick Commands

```bash
# Test build locally
npm run build:vercel

# Check environment variables
vercel env ls

# Deploy manually
vercel --prod

# View logs
vercel logs

# Setup production
npm run setup:prod
```

---

**✅ All items checked? You're ready to deploy! 🚀** 