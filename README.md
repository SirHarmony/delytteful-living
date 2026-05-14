# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev]
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

## ConvertKit Lead Magnet Integration

This project includes a server-side ConvertKit subscribe endpoint at
`/api/convertkit/subscribe` used by the free resource form.

### Required Configuration

1. Set `CONVERTKIT_FORM_ID` in `wrangler.json` for each environment.
2. Set the ConvertKit API secret as a Worker secret (do not commit this):

```bash
wrangler secret put CONVERTKIT_API_SECRET
wrangler secret put CONVERTKIT_API_SECRET --env preview
```

### ConvertKit Dashboard Setup

1. Create/select the form for the Intentional Week checklist.
2. Enable incentive email and include the checklist download link for immediate delivery.
3. Create a visual automation:
   - Trigger: subscriber joins the checklist form
   - Action: tag subscriber (example: `leadmagnet_intentional_week`)
   - Action: add subscriber to your follow-up nurture sequence

### Verify Integration

1. Submit a valid test email on the homepage lead magnet form.
2. Confirm a success message appears in the UI.
3. Confirm the subscriber appears in ConvertKit on the selected form.
4. Confirm the incentive email sends immediately.
5. Confirm the subscriber enters the visual automation.
