import mongoose from 'mongoose';
import Package from './src/models/Package';
import dotenv from 'dotenv';

dotenv.config();

const packages = [
  { name: '5 Diamonds', diamonds: 5, price: 8, currency: 'INR' },
  { name: '11 Diamonds', diamonds: 11, price: 15, currency: 'INR' },
  { name: '22 Diamonds', diamonds: 22, price: 29, currency: 'INR' },
  { name: '56 Diamonds', diamonds: 56, price: 72, currency: 'INR' },
  { name: '86 Diamonds', diamonds: 86, price: 108, currency: 'INR' },
  { name: '112 Diamonds', diamonds: 112, price: 139, currency: 'INR' },
  { name: '172 Diamonds', diamonds: 172, price: 209, currency: 'INR' },
  { name: '257 Diamonds', diamonds: 257, price: 309, currency: 'INR' },
  { name: '343 Diamonds', diamonds: 343, price: 409, currency: 'INR' },
  { name: '429 Diamonds', diamonds: 429, price: 509, currency: 'INR' },
  { name: '514 Diamonds', diamonds: 514, price: 609, currency: 'INR' },
  { name: '706 Diamonds', diamonds: 706, price: 819, currency: 'INR' },
  { name: '878 Diamonds', diamonds: 878, price: 999, currency: 'INR' },
  { name: '963 Diamonds', diamonds: 963, price: 1099, currency: 'INR' },
  { name: '1,219 Diamonds', diamonds: 1219, price: 1369, currency: 'INR' },
  { name: '1,414 Diamonds', diamonds: 1414, price: 1579, currency: 'INR' },
  { name: '2,010 Diamonds', diamonds: 2010, price: 2199, currency: 'INR' },
  { name: '2,537 Diamonds', diamonds: 2537, price: 2749, currency: 'INR' },
  { name: '4,024 Diamonds', diamonds: 4024, price: 4299, currency: 'INR' },
  { name: '5,033 Diamonds', diamonds: 5033, price: 5349, currency: 'INR' },
  { name: '6,048 Diamonds', diamonds: 6048, price: 6399, currency: 'INR' },
  { name: '7,728 Diamonds', diamonds: 7728, price: 8099, currency: 'INR' },
  { name: '9,666 Diamonds', diamonds: 9666, price: 9999, currency: 'INR' },
  { name: '12,060 Diamonds', diamonds: 12060, price: 12299, currency: 'INR' },
];

async function seedPackages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mlbb-topup');
    console.log('✅ MongoDB connected');

    // Clear existing packages
    await Package.deleteMany({});
    console.log('🗑️  Cleared existing packages');

    // Insert new packages
    const result = await Package.insertMany(packages);
    console.log(`✅ Successfully uploaded ${result.length} diamond packages!`);
    
    // Display uploaded packages
    console.log('\n📦 Uploaded Packages:');
    result.forEach((pkg) => {
      console.log(`  💎 ${pkg.name} - ₹${pkg.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

seedPackages();
