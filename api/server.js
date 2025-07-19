// Vercel serverless function for Angular SSR
// This file handles all requests and delegates to the Angular SSR server

export default async function handler(req, res) {
  try {
    // Dynamic import of the built server
    const { default: server } = await import('../dist/ngxpress/server/server.mjs');
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    
    // Call the server function
    return server(req, res);
  } catch (error) {
    console.error('Error importing server:', error);
    res.status(500).json({ error: 'Server not available', details: error.message });
  }
} 