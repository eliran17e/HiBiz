// Blog content lives here as typed data (single-language, long-form —
// doesn't belong in the i18n locale files). To publish a post: add an
// entry with a unique slug and drop its cover image in /public/images.
//
// NOTE: the three seeded posts are placeholder drafts — replace the
// bodies (and author, if desired) with real content before launch.

export interface PostSection {
  /** Optional section heading; omit for a plain paragraph block. */
  h?: string;
  p: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  cover: string;
  body: PostSection[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "morning-routine-replaces-monday-reports",
    category: "Playbook",
    title: "The 15-minute morning routine that replaces your Monday report stack",
    excerpt: "A practical WhatsApp-first workflow for owners who run multiple locations.",
    author: "HiBiz Team",
    date: "Jun 24, 2026",
    read: "6 min read",
    cover: "/images/blog-1.jpg",
    body: [
      {
        p: "Most owners we talk to start the week the same way: a stack of exported spreadsheets, three browser tabs of dashboards, and a group chat full of \"how did we do?\" messages. By the time the picture is assembled, it's Tuesday — and the picture is already stale.",
      },
      {
        h: "Start with the briefing, not the dashboard",
        p: "The core shift is letting the summary come to you. A morning briefing on WhatsApp — yesterday's revenue, order count, and anything unusual — replaces the ritual of logging in to check whether anything happened. If nothing needs your attention, you know in thirty seconds.",
      },
      {
        h: "Ask follow-ups in plain language",
        p: "When a number looks off, don't switch tools — just ask. \"Why was the North branch down?\" gets you a breakdown by hour and category, in the same chat, while you're still holding your coffee. The point isn't fewer reports; it's that questions get answered at the speed you can ask them.",
      },
      {
        h: "Let the exceptions find you",
        p: "The rest of the week, the routine inverts: instead of checking on the business, the business checks in with you. Anomaly alerts cover the gap between briefings, so the only time you open a spreadsheet is when you genuinely want to explore.",
      },
      {
        p: "Owners who make this switch tell us the same thing: it's not the hours saved that matter most — it's starting the day already informed, instead of starting the day catching up.",
      },
    ],
  },
  {
    slug: "recipe-level-costing-menu-margin",
    category: "Food cost",
    title: "Recipe-level costing: why your menu margin is lying to you",
    excerpt: "Live supplier prices change your dish cost weekly. Here's how to keep up automatically.",
    author: "HiBiz Team",
    date: "Jun 12, 2026",
    read: "8 min read",
    cover: "/images/blog-2.jpg",
    body: [
      {
        p: "Ask a restaurant owner what a dish costs to make and you'll usually get a number from the last time someone sat down with the recipe book and a calculator. That number was right — once. Then the price of olive oil moved, the fish supplier changed, and the number quietly stopped being true.",
      },
      {
        h: "Menu margin drifts in silence",
        p: "The dangerous part of food-cost drift is that nothing announces it. Sales look fine, the dining room is full, and the margin on your best-selling dish has slipped four points because two of its ingredients got more expensive. Multiply that across a menu and a quarter, and the \"mystery\" in your P&L stops being a mystery.",
      },
      {
        h: "Cost dishes from live supplier prices",
        p: "Recipe-level costing means every dish's cost is computed from what you actually paid for its ingredients — this week, from these invoices. When a supplier raises a price, the cost of every dish that uses that ingredient updates the same day, and you see which menu items absorbed the hit.",
      },
      {
        h: "What to do with the signal",
        p: "Sometimes the answer is a price change; more often it's a conversation with a supplier, a portion adjustment, or promoting the dish whose margin quietly improved. The decisions aren't new — what's new is making them while they still matter, instead of at the end of the quarter.",
      },
      {
        p: "If your dish costs were last updated more than a month ago, they're estimates. The gap between the estimate and reality is where your margin is leaking.",
      },
    ],
  },
  {
    slug: "anomaly-alerts-that-dont-cry-wolf",
    category: "AI operations",
    title: "Anomaly alerts that don't cry wolf: tuning signal over noise",
    excerpt: "What makes an alert worth sending? Inside HiBiz's approach to proactive notifications.",
    author: "HiBiz Team",
    date: "May 30, 2026",
    read: "5 min read",
    cover: "/images/blog-3.jpg",
    body: [
      {
        p: "The fastest way to make alerts useless is to send too many of them. After the third \"unusual activity\" ping that turned out to be a rainy Tuesday, owners stop reading — and then the alert that actually mattered gets ignored with the rest.",
      },
      {
        h: "An anomaly is a break from your pattern, not a threshold",
        p: "Fixed thresholds treat every business — and every day of the week — the same. A quiet Monday lunch isn't an anomaly if your Mondays are always quiet. Useful detection starts from each location's own rhythm: the same drop that's normal at one branch is a red flag at another.",
      },
      {
        h: "Every alert should name a suspect",
        p: "\"Sales are down 18%\" is a fact; \"card refunds at register 2 are 3× the daily norm\" is a lead. An alert worth interrupting your day for should point at where to look — the branch, the register, the supplier, the dish — not just announce that something is off.",
      },
      {
        h: "Silence is a feature",
        p: "The discipline that makes the system trustworthy is the messages it doesn't send. When nothing breaks the pattern, you hear nothing — which is exactly what lets you take the alerts you do get seriously.",
      },
      {
        p: "The goal isn't more information. It's a short list of things worth your attention, delivered the moment they become true.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
