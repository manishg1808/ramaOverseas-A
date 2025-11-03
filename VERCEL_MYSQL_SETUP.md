# 🗄️ Vercel Mein MySQL Database Setup Guide

Aapka code ab **MySQL** ke liye ready hai! Vercel directly MySQL provide nahi karta, lekin aap external MySQL database services use kar sakte hain.

---

## 🎯 Recommended MySQL Services (Vercel Compatible)

### Option 1: **PlanetScale** (Recommended - MySQL Compatible) ⭐

PlanetScale MySQL-compatible database hai jo Vercel ke saath perfectly kaam karta hai.

**Free Tier:**
- ✅ 1 database free
- ✅ 1 GB storage
- ✅ Unlimited reads
- ✅ 5 million row reads/month
- ✅ SSL support

**Setup Steps:**
1. **PlanetScale Account** banayein: https://planetscale.com
2. **New Database** create karein
3. Database name: `ramao-db` (ya koi bhi naam)
4. **Branch** create karein: `main`
5. **Get Connection String:**
   - Dashboard → Database → Connect
   - **General** connection string copy karein

**Connection String Example:**
```
mysql://username:password@aws.connect.psdb.cloud/ramao-db?sslaccept=strict
```

6. **Vercel Environment Variables** set karein:
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add these variables:

```
DB_HOST=aws.connect.psdb.cloud
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=ramao-db
DB_SSL=true
```

---

### Option 2: **Railway** (Easy Setup)

Railway MySQL database provide karta hai with easy setup.

**Free Tier:**
- ✅ $5 credit monthly (hobby plan)
- ✅ MySQL database support

**Setup Steps:**
1. **Railway Account** banayein: https://railway.app
2. **New Project** → **Add MySQL**
3. Database automatically create ho jayega
4. **Variables** tab mein connection details milegi
5. **Vercel Environment Variables** set karein (same as above)

---

### Option 3: **Aiven MySQL**

Aiven managed MySQL service provide karta hai.

**Free Trial:** 14 days free trial available

**Setup Steps:**
1. Aiven account banayein: https://aiven.io
2. MySQL service create karein
3. Connection details lein
4. **Vercel Environment Variables** set karein

---

### Option 4: **Supabase MySQL** (Coming Soon)

Supabase ab MySQL support bhi provide kar raha hai.

---

## 📋 Step-by-Step Setup (PlanetScale Example)

### Step 1: PlanetScale Database Create Karein

1. **https://planetscale.com** par sign up karein
2. **"New database"** click karein
3. Database naam dalein: `ramao-db`
4. Region select karein (nearest region)
5. **"Create database"** click karein

### Step 2: Connection String Lein

1. Database dashboard mein **"Connect"** button click karein
2. **"General"** tab select karein
3. Connection string copy karein:
   ```
   mysql://username:password@aws.connect.psdb.cloud/ramao-db?sslaccept=strict
   ```
4. Isme se extract karein:
   - **Host**: `aws.connect.psdb.cloud`
   - **Port**: `3306`
   - **User**: `username`
   - **Password**: `password`
   - **Database**: `ramao-db`

### Step 3: Vercel Environment Variables Set Karein

1. **Vercel Dashboard** → Apna project select karein
2. **Settings** → **Environment Variables**
3. Add karein yeh variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `DB_HOST` | `aws.connect.psdb.cloud` | Database host (PlanetScale se) |
| `DB_PORT` | `3306` | MySQL port |
| `DB_USER` | `your_username` | Database username |
| `DB_PASSWORD` | `your_password` | Database password |
| `DB_NAME` | `ramao-db` | Database name |
| `DB_SSL` | `true` | SSL enable (PlanetScale requires SSL) |

**Important:**
- **Environment**: Dono **Production** aur **Preview** select karein
- **Save** click karein

### Step 4: Deploy Karein

1. Code push karein:
   ```bash
   git add .
   git commit -m "Setup MySQL database with PlanetScale"
   git push
   ```

2. Vercel automatically deploy kar dega

### Step 5: Tables Automatically Create Hongi

Pehli API call par (form submit) tables automatically create ho jayengi:
- `form` table
- `request_callback` table

**Note:** PlanetScale mein branch mein schema changes hote hain. `main` branch use karein.

---

## 🔧 Database Connection Details

Aapko Vercel mein yeh environment variables set karni hongi:

### Required Variables:
```
DB_HOST=your-database-host
DB_PORT=3306
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
```

### Optional Variables:
```
DB_SSL=true        # PlanetScale ke liye true rakhein (default: true)
```

---

## ✅ Testing

1. Deploy complete hone ke baad
2. Website par contact form submit karein
3. **PlanetScale Dashboard** → Database → Tables check karein
4. Data dikhega! ✅

---

## 🔍 Troubleshooting

### Problem: "Database configuration missing" error

**Solution:**
1. Vercel Dashboard → Settings → Environment Variables check karein
2. Sabhi required variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) set hain ya nahi
3. Environment (Production/Preview) select kiya hua hai ya nahi
4. Redeploy karein after setting variables

### Problem: Connection timeout

**Solution:**
1. Database service (PlanetScale/Railway) active hai ya nahi check karein
2. Database host aur port sahi hai ya nahi verify karein
3. SSL connection enable hai ya nahi check karein (PlanetScale ke liye zaruri hai)

### Problem: SSL connection error

**Solution:**
1. `DB_SSL=true` set karein environment variables mein
2. Ya `DB_SSL=false` agar aapka database SSL support nahi karta

### Problem: Tables nahi bani

**Solution:**
1. Pehli API call (form submit) zaruri hai tables create karne ke liye
2. Vercel logs check karein (Deployments → Functions Logs)
3. Database permissions check karein - CREATE TABLE permission honi chahiye

---

## 💡 Tips

1. **PlanetScale Recommended:** 
   - Vercel ke saath best compatibility
   - Free tier available
   - Easy setup
   - SSL support built-in

2. **Database Branch:**
   - PlanetScale mein `main` branch use karein production ke liye
   - Development branch alag bhi bana sakte hain

3. **Connection Pooling:**
   - Code mein already connection pooling implement hai
   - Multiple requests efficiently handle honge

4. **Security:**
   - Environment variables **never** expose mat karein
   - Vercel securely store karta hai

---

## 📊 Database Tables Structure

### `form` Table
```sql
- id (INT AUTO_INCREMENT PRIMARY KEY)
- name (VARCHAR 255, NOT NULL)
- company (VARCHAR 255, NULL)
- email (VARCHAR 255, NOT NULL)
- phone (VARCHAR 50, NOT NULL)
- service (VARCHAR 100, NOT NULL)
- message (TEXT, NOT NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
```

### `request_callback` Table
```sql
- id (INT AUTO_INCREMENT PRIMARY KEY)
- full_name (VARCHAR 255, NOT NULL)
- phone (VARCHAR 50, NOT NULL)
- email (VARCHAR 255, NULL)
- service (VARCHAR 100, NOT NULL)
- preferred_date (DATE, NULL)
- callback_method (VARCHAR 50, NULL)
- preferred_language (VARCHAR 50, NULL)
- message (VARCHAR 1000, NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
```

---

## 🚀 Ready to Deploy!

Aapka code ab **MySQL-compatible** hai aur production-ready hai!

**Next Steps:**
1. PlanetScale (ya koi bhi MySQL service) account banayein
2. Database create karein
3. Vercel Environment Variables set karein
4. Deploy karein aur test karein!

**Good luck! 🎉**

