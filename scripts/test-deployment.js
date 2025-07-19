#!/usr/bin/env node

/**
 * Test Deployment Script for ngXpress
 * This script helps debug deployment issues on Vercel
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 ngXpress Deployment Test\n');

// Check if we're in the correct directory
const currentDir = process.cwd();
console.log(`📁 Current directory: ${currentDir}`);

// Check if dist folder exists
const distPath = path.join(currentDir, 'dist', 'ngxpress');
if (fs.existsSync(distPath)) {
  console.log('✅ dist/ngxpress folder exists');
  
  // Check server folder
  const serverPath = path.join(distPath, 'server');
  if (fs.existsSync(serverPath)) {
    console.log('✅ dist/ngxpress/server folder exists');
    
    // Check server.mjs
    const serverFile = path.join(serverPath, 'server.mjs');
    if (fs.existsSync(serverFile)) {
      console.log('✅ dist/ngxpress/server/server.mjs exists');
    } else {
      console.error('❌ dist/ngxpress/server/server.mjs missing');
    }
    
    // Check database file
    const dbFile = path.join(serverPath, 'dev.db');
    if (fs.existsSync(dbFile)) {
      console.log('✅ Database file exists in server folder');
    } else {
      console.warn('⚠️  Database file missing in server folder');
    }
    
    // Check prisma folder
    const prismaPath = path.join(serverPath, 'prisma');
    if (fs.existsSync(prismaPath)) {
      console.log('✅ Prisma folder exists in server folder');
    } else {
      console.warn('⚠️  Prisma folder missing in server folder');
    }
  } else {
    console.error('❌ dist/ngxpress/server folder missing');
  }
  
  // Check browser folder
  const browserPath = path.join(distPath, 'browser');
  if (fs.existsSync(browserPath)) {
    console.log('✅ dist/ngxpress/browser folder exists');
  } else {
    console.error('❌ dist/ngxpress/browser folder missing');
  }
} else {
  console.error('❌ dist/ngxpress folder missing - run npm run build first');
}

// Check environment variables
console.log('\n🌍 Environment Variables:');
const envVars = ['DATABASE_URL', 'BETTER_AUTH_SECRET', 'BETTER_AUTH_URL', 'NODE_ENV'];
envVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${varName.includes('SECRET') ? '***' : value}`);
  } else {
    console.warn(`⚠️  ${varName}: not set`);
  }
});

// Check vercel.json
const vercelConfig = path.join(currentDir, 'vercel.json');
if (fs.existsSync(vercelConfig)) {
  console.log('\n✅ vercel.json exists');
  try {
    const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
    console.log('✅ vercel.json is valid JSON');
  } catch (error) {
    console.error('❌ vercel.json has invalid JSON:', error.message);
  }
} else {
  console.error('\n❌ vercel.json missing');
}

console.log('\n🎯 Deployment Test Complete!'); 