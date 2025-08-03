# SearchBag.in Deployment Guide

## Recent Updates

The following changes have been made to the website:

1. Updated product categories to include only:
   - Backpack
   - Laptop Bag
   - Sling Bag
   - Duffel Bag
   - Gym Bag
   - Accessories and Complementary items

2. Increased the navbar logo size for better visibility

3. Updated contact information:
   - Primary contact number changed to: +91 93261 23535
   - Updated address to: Shop No. 28, Lohe Ki Chawl, Mumbai Bag Market, Maulana Azad Road, Madanpura, Mumbai - 400 008
   - Added LinkedIn link: https://www.linkedin.com/company/search-bag/

4. Fixed layout issues with visible `<>` tags in the deployed version

## Environment Variables Setup

To ensure your application works correctly in both local development and production environments, you need to properly configure the environment variables.

### Local Development

For local development, create a `.env.local` file in the root of your project with the following content:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### Production Deployment (Vercel)

When deploying to Vercel or any other hosting platform, you must set the following environment variable in your deployment settings:

```
NEXT_PUBLIC_API_BASE_URL=https://searchbag.in
```

## Why This Is Important

The application uses the `NEXT_PUBLIC_API_BASE_URL` environment variable to determine the base URL for API requests. If this variable is not set correctly:

1. In local development, API requests will default to using `window.location.origin` (which is correct for local development)
2. In production, API requests will also use `window.location.origin`, which may not be correct if your API is hosted on a different domain or if there are issues with cross-origin requests

## Verifying Your Deployment

After deploying your application, verify that:

1. The environment variables are correctly set in your deployment platform
2. The application can make API requests successfully
3. Products are displayed correctly on all pages
4. Category filtering works as expected

## Troubleshooting

If you encounter issues with your deployment:

1. Check the browser console for any errors related to API requests
2. Verify that the `NEXT_PUBLIC_API_BASE_URL` environment variable is set correctly
3. Ensure your MongoDB database is accessible from your production environment
4. Check that your API routes are functioning correctly

## Additional Resources

- [Next.js Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)