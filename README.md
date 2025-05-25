# React + Netlify Starter

A modern React application built with Vite, Tailwind CSS, shadcn/ui components, and Netlify Functions. Features include a beautiful UI and AI chat integration with Google's Gemini 2.0 Flash model.

## Features

- **React 19** with Vite for fast development
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components for beautiful, accessible UI
- **Netlify Functions** for serverless backend
- **Gemini AI Chat** integration for interactive conversations
- **Modern development** with ESLint and hot reload

## Getting Started

1. **Clone and install dependencies:**

   ```bash
   npm install
   ```

2. **Set up Gemini API (for chat functionality):**

   - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Update the `.env` file:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Start development server:**

   ```bash
   npm run netlify:dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8888`

## Project Structure

- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components
- `netlify/functions/` - Serverless functions
- `src/lib/` - Utility functions

## Available Scripts

- `npm run netlify:dev` - Start development server with Netlify Functions
- `npm run build` - Build for production
- `npm run netlify:deploy` - Deploy to Netlify

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Netlify Functions
- **AI**: Google Gemini 2.0 Flash
- **Icons**: Lucide React
