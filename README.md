# coldmail-frontend

Frontend (web) for **COLDMAILS.AI** — a SaaS to automate domain purchase, mailbox provisioning, DNS & deliverability setup, warm-up scheduling, and integrations (Instantly, HubSpot, Leadbeam, etc.).

> **This repo contains only the React frontend.** It consumes a separate **Node.js** backend via REST (and optionally SSE/WebSockets).

---

## ✨ Features (Frontend)

- **React 18 + Vite + TypeScript**
- **TanStack Router** (programmatic router by default, zero codegen friction)
- **TanStack Query** for data fetching/caching, retries, and mutations
- **Tailwind CSS** for utility-first styling
- **Axios** API client with auth header interceptor
- Feature-first folder layout (`src/features/*`)
- Ready stubs for: Dashboard, Domains, Mailboxes, Warming, Integrations, Billing, Affiliates, Settings

---

## 🧱 Tech Stack

- **UI:** React, Tailwind CSS
- **Routing:** `@tanstack/react-router` (programmatic config in `src/app/routerPlain.tsx`)
- **Data:** `@tanstack/react-query`
- **Build:** Vite
- **Language:** TypeScript
- **Charts/Icons (stubs):** Recharts, lucide-react

---

## ✅ Prerequisites

- **Node.js:** **v20.19.x (LTS)** or **v22.12.x+** recommended  
  (Other versions may work but can cause tooling/CLI warnings.)
- **npm:** v10+

Optional:

- **nvm** for quick Node version switching
- **Git** for version control

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and set the backend base URL:

```bash
cp .env.example .env


Getting Started

# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev
# → open the URL shown (usually http://localhost:5173)

# 3) Build for production
npm run build

# 4) Preview the production build locally
npm run preview


Project Structure High Level

src/
├─ app/
│  ├─ layouts/            # App shell (sidebar/topbar + <Outlet/>)
│  ├─ providers/          # QueryProvider, AuthProvider, ErrorBoundary (stubs)
│  └─ routerPlain.tsx     # Programmatic TanStack Router (default)
├─ features/              # Feature-first modules
│  ├─ dashboard/
│  ├─ domains/
│  ├─ mailboxes/
│  ├─ warming/
│  ├─ integrations/
│  ├─ billing/
│  ├─ affiliates/
│  └─ settings/
├─ pages/                 # Marketing pages (Landing, Pricing)
├─ routes/                # (Only needed if you switch to file-based routing)
├─ shared/                # Cross-cutting infra & design system
│  ├─ api/                # axios client, adapters (if any)
│  ├─ auth/               # session helpers/guards (stubs)
│  ├─ charts/             # thin chart wrappers
│  ├─ config/             # env readers, feature flags
│  ├─ hooks/ lib/ utils/  # generic helpers
│  └─ ui/components/      # design system primitives (Button/Input/Card/etc.)
└─ styles/
   └─ tailwind.css        # Tailwind entry (imported in src/main.tsx)
```
