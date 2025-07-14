# Environment Variable Setup Guide for Supabase (Node.js)

This guide will help you securely set up environment variables for connecting your Node.js backend to Supabase.

---

## 1. Create a `.env` File

In your project root, create a file named `.env` (do not commit this file to public repositories).

## 2. Example `.env` Template

```
SUPABASE_URL=https://<your-project-id>.supabase.co
SUPABASE_ANON_KEY=your_anon_public_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_secret_key_here
SUPABASE_JWT_SECRET=your_jwt_secret_here
SUPABASE_PROJECT_ID=your_project_id_here
```

- **SUPABASE_URL**: Your Supabase project URL (from Project Settings > API)
- **SUPABASE_ANON_KEY**: Public anon key (safe for frontend and backend)
- **SUPABASE_SERVICE_ROLE_KEY**: Secret service role key (use only in backend, never expose to frontend)
- **SUPABASE_JWT_SECRET**: (Optional) JWT secret for custom auth
- **SUPABASE_PROJECT_ID**: (Optional) Your project ID for reference

## 3. How to Get Your Keys
1. Go to your Supabase project dashboard.
2. Click on **Project Settings > API**.
3. Copy the Project URL, anon public key, and service role secret key.

## 4. Using Environment Variables in Node.js
Install the `dotenv` package if you haven't already:
```bash
npm install dotenv
```

At the top of your main server file (e.g., `index.js` or `app.js`):
```js
require('dotenv').config();
```

Then use the variables:
```js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
```

## 5. Best Practices
- **Never commit your real `.env` file or secret keys to public repositories.**
- Use `.env.example` as a template for collaborators.
- Store your `.env` file securely and share secrets only with trusted team members.

## 6. Resources
- [Supabase Docs: Connecting from Node.js](https://supabase.com/docs/guides/getting-started/tutorials/with-node)
- [dotenv package](https://www.npmjs.com/package/dotenv)

---
You are now ready to securely connect your Node.js backend to Supabase using environment variables! 