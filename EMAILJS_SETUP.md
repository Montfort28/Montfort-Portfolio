# EmailJS Setup Guide for Portfolio Contact Form

## Current Status
Your contact form is configured with EmailJS but needs proper credentials to send emails. Here's how to set it up:

---

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com
2. Click "Sign Up" (choose the free plan)
3. Complete the registration with your email
4. Verify your email address

---

## Step 2: Get Your EmailJS Credentials

### Service ID:
1. Log in to EmailJS dashboard
2. Go to **Email Services** (left sidebar)
3. Click **"Add Service"**
4. Choose **Gmail** (or your preferred email provider)
5. Connect your email account and follow the instructions
6. Once created, you'll see your **Service ID** (looks like: `service_xxxxxxxxx`)

### Template ID:
1. Go to **Email Templates** (left sidebar)
2. Click **"Create New Template"**
3. Use these field names in your template:
   - `from_name` - from the name field
   - `from_email` - from the email field
   - `subject` - from the subject field
   - `message` - from the message field
   - `to_email` - your receiving email (mugishamontfort28@gmail.com)

4. Template example (in the template editor):
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

5. Once created, you'll see your **Template ID** (looks like: `template_xxxxxxxxx`)

### Public Key:
1. Go to **Account** (left sidebar, top right)
2. Copy your **Public Key** (looks like: `zQhlasWYTWqK9QabJ`)

---

## Step 3: Update the .env.local File

The file `.env.local` has been created with placeholder values. Replace them with your actual credentials:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Location:** `c:\Users\Aliance\Documents\Projects\portfolio-mugisha\.env.local`

---

## Step 4: Test the Form

1. Stop your development server (Ctrl+C)
2. Start it again: `npm start`
3. Go to the Contact page on http://localhost:3000/contact
4. Fill in the form and click "Send Message"
5. Check your email inbox (the one connected to EmailJS)

---

## Important Notes

⚠️ **DO NOT** commit `.env.local` to GitHub
- It contains sensitive credentials
- It's already in `.gitignore`

✓ **Keep your credentials safe:**
- Never share your Public Key, Service ID, or Template ID publicly
- Rotate keys if compromised

✓ **Troubleshooting:**
- Check browser console (F12) for error messages
- Check EmailJS dashboard for failed email logs
- Verify all credentials are correct

---

## What You Need to Provide

Please provide the following information once you've set up EmailJS:

1. Your **Service ID** (from Email Services)
2. Your **Template ID** (from Email Templates)
3. Your **Public Key** (from Account settings)

Then update the `.env.local` file with these values.

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables to your deployment platform:
   - Service ID
   - Template ID
   - Public Key

2. Never expose these in your code

3. Test the contact form after deployment

---

## Code Implementation

The Contact component has been updated with:
- ✓ Proper environment variable usage
- ✓ Error handling and logging
- ✓ User-friendly error messages
- ✓ Success/failure feedback
- ✓ Form reset on successful submission

All changes are complete and ready to use once you provide the EmailJS credentials!
