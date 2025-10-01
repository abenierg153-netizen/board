# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## How to Get These Values

1. **Log in to Supabase**: Go to [https://supabase.com](https://supabase.com)
2. **Create or select a project**
3. **Go to Project Settings** → **API**
4. Copy the values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret!)

## Security Notes

- ✅ `NEXT_PUBLIC_*` variables are exposed to the browser
- ⚠️ **NEVER** commit `.env.local` to git
- 🔒 The `service_role` key bypasses RLS - use carefully
- 📝 Add `.env.local` to your `.gitignore` (already done)


