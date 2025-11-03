# 🔧 Vercel Environment Variables Setup - Step by Step

## 📍 Vercel Dashboard Kaise Kholen

1. **https://vercel.com/dashboard** par jayein
2. Apne project par click karein (project naam se)
3. Ya direct project URL: `https://vercel.com/manish-kumars-projects-aff35e34` (aapka project naam)

---

## 🔑 Environment Variables Set Karne Ka Process

### Step 1: Settings Menu Mein Jao

1. Apne project dashboard mein
2. **Top menu bar** mein **"Settings"** tab click karein
3. Left sidebar mein **"Environment Variables"** click karein

**Direct Link:**
```
https://vercel.com/manish-kumars-projects-aff35e34/settings/environment-variables
```

---

### Step 2: 5 Variables Add Karein

**Pehle PlanetScale database se connection details lein:**
- PlanetScale Dashboard → Database → Connect
- Connection string ya details copy karein

**Phir Vercel mein yeh variables add karein:**

#### Variable 1: DB_HOST
- **Key:** `DB_HOST`
- **Value:** PlanetScale host (example: `aws.connect.psdb.cloud`)
- **Environment:** ✅ Production ✅ Preview ✅ Development (tino select karein)
- **"Add"** click karein

#### Variable 2: DB_PORT
- **Key:** `DB_PORT`
- **Value:** `3306`
- **Environment:** ✅ Production ✅ Preview ✅ Development
- **"Add"** click karein

#### Variable 3: DB_USER
- **Key:** `DB_USER`
- **Value:** PlanetScale username (aapke PlanetScale connection string se)
- **Environment:** ✅ Production ✅ Preview ✅ Development
- **"Add"** click karein

#### Variable 4: DB_PASSWORD
- **Key:** `DB_PASSWORD`
- **Value:** PlanetScale password (aapke PlanetScale connection string se)
- **Environment:** ✅ Production ✅ Preview ✅ Development
- **"Add"** click karein
- **Note:** Password sensitive hai, copy-paste sahi se karein

#### Variable 5: DB_NAME
- **Key:** `DB_NAME`
- **Value:** Database name (example: `ramao-db`)
- **Environment:** ✅ Production ✅ Preview ✅ Development
- **"Add"** click karein

#### Optional Variable 6: DB_SSL
- **Key:** `DB_SSL`
- **Value:** `true` (PlanetScale ke liye zaruri hai)
- **Environment:** ✅ Production ✅ Preview ✅ Development
- **"Add"** click karein

---

### Step 3: Save & Verify

1. Sabhi variables add karne ke baad
2. **Scroll up** karein aur verify karein
3. **Total 5-6 variables** dikhni chahiye
4. Har variable ke samne **"Production"**, **"Preview"**, **"Development"** tick marks dikhni chahiye

---

## 📸 Visual Guide

### Vercel Environment Variables Page Layout:

```
┌─────────────────────────────────────────┐
│ Environment Variables                   │
├─────────────────────────────────────────┤
│                                         │
│  Add New                                │
│  ┌─────────────────────────────────┐   │
│  │ Key: DB_HOST                    │   │
│  │ Value: aws.connect.psdb.cloud  │   │
│  │ ☑ Production  ☑ Preview        │   │
│  │ [Add]                            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Existing Variables:                   │
│  ┌─────────────────────────────────┐   │
│  │ DB_HOST        [Edit] [Delete]  │   │
│  │ DB_PORT        [Edit] [Delete]  │   │
│  │ DB_USER        [Edit] [Delete]  │   │
│  │ DB_PASSWORD    [Edit] [Delete]  │   │
│  │ DB_NAME        [Edit] [Delete]  │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## ✅ Verification Checklist

Add karne ke baad verify karein:

- [ ] `DB_HOST` - PlanetScale host set hai
- [ ] `DB_PORT` - 3306 set hai
- [ ] `DB_USER` - PlanetScale username set hai
- [ ] `DB_PASSWORD` - PlanetScale password set hai (show karke verify karein)
- [ ] `DB_NAME` - Database name set hai
- [ ] Har variable ke liye **Production** selected hai ✅
- [ ] Har variable ke liye **Preview** selected hai ✅
- [ ] Total **5 variables** add kiye gaye hain

---

## 🚨 Important Notes

1. **Password Visibility:**
   - Vercel password ko masked rakhta hai
   - Copy-paste karte waqt sahi se copy karein
   - PlanetScale mein password eye icon se show kar sakte hain

2. **Environment Selection:**
   - **Production** - Live website ke liye
   - **Preview** - Preview deployments ke liye
   - **Development** - Local development ke liye (optional)
   - **Recommendation:** Tino select karein ✅

3. **After Adding Variables:**
   - **Automatic Redeploy:** Vercel automatically redeploy nahi karta
   - **Manual Redeploy:** Latest deployment → "Redeploy" click karein
   - Ya naya commit push karein GitHub par

---

## 🔄 After Setting Variables

1. **Redeploy Karein:**
   - Vercel Dashboard → Deployments
   - Latest deployment → **"..."** menu → **"Redeploy"**

2. **Ya Naya Push:**
   ```bash
   git add .
   git commit -m "Update"
   git push
   ```

3. **Test Karein:**
   - Website par form submit karein
   - Success message aayega ✅
   - PlanetScale dashboard mein data dikhega ✅

---

## 🆘 Troubleshooting

### Problem: Variables add nahi ho rahi

**Solution:**
- Browser refresh karein
- Vercel dashboard se logout/login karein
- Different browser try karein

### Problem: Variables set hain but form error de raha hai

**Solution:**
- Variables ke values double-check karein
- PlanetScale connection details verify karein
- Vercel Dashboard → Deployments → Functions Logs check karein
- Redeploy karein after setting variables

### Problem: Password copy nahi ho raha

**Solution:**
- PlanetScale dashboard mein password eye icon click karein
- Password manually type karein (copy-paste se better)
- Special characters check karein

---

## 📞 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Project Settings:** `https://vercel.com/[your-project]/settings`
- **Environment Variables:** `https://vercel.com/[your-project]/settings/environment-variables`
- **PlanetScale:** https://planetscale.com

---

## ✅ Done!

Jab sab variables set ho jayengi, toh:
1. ✅ Form submit kaam karega
2. ✅ Data database mein save hoga
3. ✅ Tables automatically create ho jayengi

**Happy Setup! 🚀**

