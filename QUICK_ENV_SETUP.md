# ⚡ Quick Environment Variables Setup (2 Minutes)

## 🎯 Quick Steps

### 1. Vercel Dashboard Kholen
```
https://vercel.com/manish-kumars-projects-aff35e34/settings/environment-variables
```

### 2. PlanetScale Se Connection Details Lein
- PlanetScale Dashboard → Database → **"Connect"**
- Connection string se yeh details copy karein:
  - Host
  - Username  
  - Password
  - Database name

### 3. Vercel Mein 5 Variables Add Karein

**"Add New"** button click karein aur yeh add karein:

| Key | Value | Example |
|-----|-------|---------|
| `DB_HOST` | PlanetScale host | `aws.connect.psdb.cloud` |
| `DB_PORT` | `3306` | `3306` |
| `DB_USER` | PlanetScale username | `abc123xyz` |
| `DB_PASSWORD` | PlanetScale password | `pscale_pw_xyz...` |
| `DB_NAME` | Database name | `ramao-db` |

**Important:** Har variable ke liye **Production** aur **Preview** dono select karein ✅

### 4. Save & Redeploy

- Variables add karne ke baad
- **Deployments** → Latest → **"Redeploy"** click karein
- Ya naya commit push karein

### 5. Test ✅

- Website par form submit karein
- Success message aayega! ✅

---

## 📝 Example Values

Agar PlanetScale connection string hai:
```
mysql://user:password@aws.connect.psdb.cloud/database?sslaccept=strict
```

Toh Vercel variables:
- `DB_HOST` = `aws.connect.psdb.cloud`
- `DB_USER` = `user`
- `DB_PASSWORD` = `password`
- `DB_NAME` = `database`
- `DB_PORT` = `3306`

---

**That's it! 🎉**

