# ⚡ Quick Setup Guide - 5 Minutes Mein Database Setup

## 🎯 Simple Steps

### 1️⃣ PlanetScale Account (FREE)

1. https://planetscale.com → Sign up (FREE)
2. **"Create database"** → Name: `ramao-db`
3. **"Connect"** button → Connection details copy karein

### 2️⃣ Vercel Environment Variables

Vercel Dashboard → Project → **Settings** → **Environment Variables**:

```
DB_HOST=aws.connect.psdb.cloud (PlanetScale se)
DB_PORT=3306
DB_USER=your_username (PlanetScale se)
DB_PASSWORD=your_password (PlanetScale se)
DB_NAME=ramao-db
DB_SSL=true
```

✅ **Important**: Production aur Preview dono select karein

### 3️⃣ Deploy

```bash
git add .
git commit -m "Database setup"
git push
```

✅ **Done!** Vercel automatically deploy kar dega.

### 4️⃣ Test

1. Website par form submit karein
2. Success message aayega ✅
3. PlanetScale dashboard mein data dikhega ✅

---

## 🆘 Agar Error Aaye

**Vercel Dashboard** → **Deployments** → **Functions Logs** check karein

Common issues:
- Environment variables missing → Settings mein check karein
- Connection error → PlanetScale connection details verify karein

---

**That's it! 🎉**

