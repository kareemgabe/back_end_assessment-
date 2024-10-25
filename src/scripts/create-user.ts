const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function createUser() {
  try {

    await client.connect();
    console.log('Connected to MongoDB');

   
    const db = client.db('nest-assessment'); 
    const users = db.collection('users'); 

   
    const hashedPassword = await bcrypt.hash('password123', 10);

    
    const newUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      password_hash: hashedPassword,
    };

    // Insert the new user into the collection.
    const result = await users.insertOne(newUser);
    console.log('User inserted with ID:', result.insertedId);
  } catch (error) {
    console.error('Error inserting user:', error);
  } finally {
    
    await client.close();
  }
}


createUser();
