# Vercel Postgres Database Setup Guide

Yeh guide aapko Vercel Postgres database setup karne mein madad karega.

## Step 1: Vercel Postgres Database Create Karein

1. **Vercel Dashboard** par jayein: https://vercel.com/dashboard
2. Apne **project** ko select karein
3. Left sidebar mein **"Storage"** tab click karein
4. **"Create Database"** button click karein
5. **"Postgres"** select karein
6. Apne database ka naam dalein (e.g., `ramao-db`)
7. Region select karein (nearest region choose karein)
8. Plan select karein:
   - **Hobby** (Free) - development/testing ke liye
   - **Pro** - production ke liye (better performance)

## Step 2: Environment Variables Automatically Set Hote Hain

Vercel Postgres create karne ke baad, yeh environment variables **automatically** set ho jayenge:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

**Note:** Aapko manually kuch bhi set karne ki zarurat nahi hai. Vercel yeh sab automatically handle karega.

## Step 3: Code Changes

Code already update kar diya gaya hai:
- ✅ MySQL se PostgreSQL migrate kar diya gaya
- ✅ `@vercel/postgres` package add kar diya
- ✅ API routes update kar diye
- ✅ Database tables automatically create ho jayengi pehli request par

## Step 4: Local Development ke liye (Optional)

Agar aap locally test karna chahte hain, toh `.env.local` file banayein:

```env
POSTGRES_URL=your_local_postgres_url
```

Ya phir aapko locally PostgreSQL install karna padega ya Docker use karna padega.

## Step 5: Deploy Karein

1. **GitHub repository** mein changes push karein:
   ```bash
   git add .
   git commit -m "Migrate to Vercel Postgres"
   git push
   ```

2. Vercel automatically detect karega aur deploy kar dega
3. Ya manually Vercel dashboard se **"Redeploy"** karein

## Step 6: Verify Karein

Deploy ke baad:
1. Apni website par form submit karein
2. Vercel Dashboard → Storage → Postgres → Data tab mein check karein
3. Tables automatically create ho jayengi pehli request par

## Important Notes

- ✅ Vercel Postgres **serverless** hai - automatic scaling
- ✅ **Free tier** mein 256 MB storage milta hai (development ke liye kafi hai)
- ✅ Tables automatically create ho jayengi pehli API call par
- ✅ Environment variables automatically set ho jayenge
- ✅ Production aur development ke liye alag databases use kar sakte hain

## Troubleshooting

Agar koi problem aaye:

1. **Environment Variables Check Karein:**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - `POSTGRES_URL` available hona chahiye

2. **Database Connection Check Karein:**
   - Vercel Dashboard → Storage → Postgres
   - Database status "Active" hona chahiye

3. **Logs Check Karein:**
   - Vercel Dashboard → Project → Deployments → Latest Deployment → Functions Logs
   - Errors check karein

4. **Tables Check Karein:**
   - Vercel Dashboard → Storage → Postgres → Data tab
   - `form` aur `request_callback` tables dikhni chahiye

## Support

Agar aur help chahiye, toh:
- Vercel Docs: https://vercel.com/docs/storage/vercel-postgres
- Vercel Support: Vercel Dashboard se contact kar sakte hain

