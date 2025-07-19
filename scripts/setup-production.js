#!/usr/bin/env node

/**
 * Production Setup Script for ngXpress
 * This script helps set up the application for production deployment on Vercel
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 ngXpress Production Setup (SQLite)\n');

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.log('📦 Production mode detected');
  
  // Validate required environment variables
  const requiredEnvVars = [
    'DATABASE_URL',
    'BETTER_AUTH_SECRET',
    'BETTER_AUTH_URL'
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
  }
  
  console.log('✅ Environment variables validated');
  
  // Check if DATABASE_URL is SQLite
  const isSQLite = process.env.DATABASE_URL.startsWith('file:');
  
  if (!isSQLite) {
    console.warn('⚠️  Warning: DATABASE_URL is not SQLite. For demo apps, SQLite is recommended.');
  } else {
    console.log('✅ SQLite database detected');
  }
  
  try {
    // Generate Prisma client
    console.log('🔧 Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    // Ensure database file exists
    console.log('🗄️  Setting up database...');
    execSync('npx prisma db push', { stdio: 'inherit' });
    
    console.log('✅ Production setup completed successfully!');
  } catch (error) {
    console.error('❌ Error during production setup:', error.message);
    process.exit(1);
  }
} else {
  console.log('🔧 Development mode detected');
  console.log('💡 For production setup, set NODE_ENV=production');
  
  try {
    // Generate Prisma client for development
    console.log('🔧 Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    console.log('✅ Development setup completed!');
  } catch (error) {
    console.error('❌ Error during development setup:', error.message);
    process.exit(1);
  }
} 