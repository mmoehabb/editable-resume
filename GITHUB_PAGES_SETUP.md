# GitHub Pages Deployment Guide

This project includes an automated GitHub Pages deployment workflow. Follow these steps to set up and deploy your resume application.

## Prerequisites

- A GitHub account
- Your project pushed to a GitHub repository

## Setup Instructions

### 1. Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This allows the workflow to deploy your site

### 2. Configure Repository Name

The deployment workflow assumes your repository is named `editable-resume`. If your repository has a different name, update the `base` path in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES ? '/your-repo-name/' : '/',
```

Replace `your-repo-name` with your actual GitHub repository name.

### 3. Push to Main Branch

The deployment workflow automatically triggers when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 4. Monitor Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You'll see the "Deploy to GitHub Pages" workflow running
4. Once it completes (green checkmark), your site is live

### 5. Access Your Deployed Site

Your resume will be available at:
```
https://your-username.github.io/editable-resume/
```

Replace `your-username` with your GitHub username.

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) performs the following steps:

1. **Checkout**: Clones your repository
2. **Setup Node.js**: Installs Node.js 22 with npm caching
3. **Install Dependencies**: Runs `npm ci` for clean installs
4. **Build**: Compiles your React app with `npm run build`
5. **Upload Artifact**: Uploads the built files to GitHub Pages
6. **Deploy**: Deploys the artifact to GitHub Pages

## Automatic Deployments

- **Trigger**: Every push to the `main` branch
- **Build Time**: Usually 1-2 minutes
- **Deployment Time**: Instant after build completes

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are correctly installed locally
- Run `npm run build` locally to test

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` matches your repository name
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Site Not Updating
- Wait 1-2 minutes after push for deployment to complete
- Check the Actions tab to confirm workflow succeeded
- Clear GitHub Pages cache by going to Settings → Pages and re-saving

## Local Testing

To test the build locally:

```bash
npm run build
cd dist/public
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Disabling Deployments

To temporarily disable automatic deployments:
1. Go to **Settings** → **Actions** → **General**
2. Under "Actions permissions", select "Disable all"

To re-enable, select "Allow all actions and reusable workflows".

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
