# Deployment Guide for SearchBag.in

## Environment Variables

When deploying the application to different environments, you need to set up the following environment variables:

### Required Environment Variables

- `MONGODB_URI`: Your MongoDB connection string
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret

### Custom Domain Deployment

When deploying to a custom domain through Vercel, follow these steps:

1. Deploy your application to Vercel as normal
2. In your Vercel project settings, add your custom domain (e.g., searchbag.in)
3. Set up the following environment variable in Vercel:
   - `NEXT_PUBLIC_API_BASE_URL`: Set this to your custom domain URL (e.g., https://searchbag.in)

## Vercel Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in Vercel
3. Configure the environment variables mentioned above
4. Deploy the application

## Testing Your Deployment

After deployment, test the following functionality to ensure everything works correctly:

1. Product listing on the homepage
2. Product search
3. Product details page
4. Seller dashboard (if applicable)

## Troubleshooting

If you encounter issues with API requests after deployment:

1. Check the browser console for any errors
2. Verify that all environment variables are set correctly
3. Ensure your MongoDB instance is accessible from your deployment environment
4. Check if your custom domain DNS settings are properly configured