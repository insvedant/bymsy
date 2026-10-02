const mongoose = require('mongoose');

/** True only while there is a live connection — checked fresh on every request, not cached at startup. */
function isDbReady() {
  return mongoose.connection.readyState === 1; // 1 = connected
}

async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI not set: leads and settings will use in-memory storage, not a database.');
    return;
  }

  mongoose.connection.on('connected', () => console.log('MongoDB connected'));
  mongoose.connection.on('error', (err) => console.error('MongoDB error:', err.message));
  mongoose.connection.on('disconnected', () =>
    console.warn('MongoDB disconnected — falling back to in-memory storage until it reconnects.')
  );

  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB_NAME || 'bymsy',
      serverSelectionTimeoutMS: 8000,
    });
  } catch (err) {
    // Never log `uri` itself — it contains the database password.
    console.error('MongoDB connection failed:', err.message);
  }
}

module.exports = { connectDb, isDbReady };
