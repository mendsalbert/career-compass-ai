# Career Compass AI

![Career Compass AI Banner](public/cca.jpg)

Career Compass AI is an AI-powered career planning app that helps users create and execute a personalized 12-month growth roadmap.

Users can:
- complete onboarding with their current role, target role, and constraints
- generate a month-by-month plan with actionable tasks
- track progress across themes and tasks
- chat with an AI assistant ("Jake") for contextual guidance
- persist their journey data in MongoDB under authenticated Clerk users

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **Auth:** Clerk (`@clerk/nextjs`)
- **AI:** Google Gemini (`@google/genai`)
- **Database:** MongoDB Atlas (`mongodb` Node driver)
- **Icons/UI:** Lucide React

## Project Structure

- `app/page.tsx` - main UI and client-side state flow
- `app/api/plan/route.ts` - AI plan generation API
- `app/api/chat/route.ts` - AI chat API for Jake
- `app/api/state/route.ts` - load/save user state in MongoDB
- `app/layout.tsx` - app shell and Clerk provider
- `middleware.ts` - Clerk middleware protection
- `lib/mongodb.ts` - MongoDB connection helper

## Environment Variables

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0
MONGODB_DB_NAME=career_compass_ai
```

> Clerk is configured for keyless development mode by default, so you can start without manually adding Clerk keys.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Core Features

1. **Onboarding + Plan Generation**
   - collects user context
   - generates a 12-month roadmap with monthly themes and tasks

2. **Progress Tracking**
   - task status lifecycle: not started → in progress → complete
   - month and overall progress percentages

3. **AI Career Chat**
   - grounded responses using profile + plan + selected month context

4. **Authenticated Persistence**
   - each signed-in Clerk user gets their own saved app state in MongoDB

## Notes

- If Gemini fails, the app can fall back to mock responses/plan generation in some flows.
- If MongoDB connection fails, verify Atlas IP access, user permissions, and connection string format.
