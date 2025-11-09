import { db } from '../lib/db';
import { adminUsers } from '../lib/db/schema';
import * as bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';

async function createAdminUser() {
  const email = 'admin@curtaincleaning.co.za';
  const password = 'Admin@2025!';  // Change this after first login!
  
  console.log('Creating admin user...');
  
  // Check if admin already exists
  const existing = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  
  if (existing.length > 0) {
    console.log('Admin user already exists!');
    return;
  }
  
  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);
  
  // Create admin user
  await db.insert(adminUsers).values({
    email,
    passwordHash,
  });
  
  console.log('✅ Admin user created successfully!');
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('\n⚠️  IMPORTANT: Change this password after your first login!\n');
}

createAdminUser()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error creating admin user:', error);
    process.exit(1);
  });
