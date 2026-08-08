import apexisLogo from "@/assets/apexis-logo.png";
import type { BlogApiResponse } from "@/types/blog";

const AUTHOR_AVATAR = apexisLogo;

const AUTHOR = {
  id: 1,
  name: "Apexis",
  email: "admin@apexis.in",
};

/**
 * Dummy fixtures shaped exactly like the real /blogs and /blogs/:id API response
 * (both snake_case and camelCase variants included), so swapping in a live fetch
 * later is a drop-in replacement — just run each record through normalizeBlog().
 */
export const dummyBlogs: BlogApiResponse[] = [
  {
    id: 1,
    title: "Why Site Reporting Still Breaks Down on Indian Construction Projects",
    excerpt:
      "WhatsApp groups, scattered PDFs, and Monday-morning site visits are still how most firms track progress. Here's why that model is quietly costing projects time, money, and trust.",
    slug: "why-site-reporting-still-breaks-down",
    category: "Construction Tech",
    meta_title: "Why Site Reporting Still Breaks Down on Indian Construction Projects",
    metaTitle: "Why Site Reporting Still Breaks Down on Indian Construction Projects",
    meta_description:
      "A look at why WhatsApp groups and scattered PDFs fail construction teams, and what structured, client-ready reporting looks like instead.",
    metaDescription:
      "A look at why WhatsApp groups and scattered PDFs fail construction teams, and what structured, client-ready reporting looks like instead.",
    author_name: "Apexis Team",
    authorName: "Apexis Team",
    author_role: "Product & Research",
    authorRole: "Product & Research",
    author_avatar: AUTHOR_AVATAR,
    authorAvatar: AUTHOR_AVATAR,
    cover_image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
    tags: ["construction", "site-management", "reporting"],
    read_time: "6 min read",
    readTime: "6 min read",
    published_at: "2026-07-18T09:00:00.000Z",
    publishedAt: "2026-07-18T09:00:00.000Z",
    status: "Published",
    created_by: 1,
    createdAt: "2026-07-18T09:00:00.000Z",
    updatedAt: "2026-07-18T09:00:00.000Z",
    deletedAt: null,
    author: AUTHOR,
    faqs: [
      {
        question: "Isn't a WhatsApp group good enough for a small site team?",
        answer:
          "For a week, maybe. Past that, updates go unread, photos lose their context, and nobody can tell you what happened on a specific date without scrolling for twenty minutes. It breaks down exactly when you need it most — during a dispute or a client review.",
      },
      {
        question: "What does 'structured' reporting actually mean in practice?",
        answer:
          "Every update is tied to a project, a date, a location, and a category — not just a caption. That structure is what lets a report be generated automatically instead of assembled by hand every Friday night.",
      },
      {
        question: "Does this replace site visits?",
        answer:
          "No. It makes them more useful. When everyone walks in already aligned on what happened since the last visit, the time on site goes to decisions, not status updates.",
      },
    ],
    content_blocks: [
      {
        id: "b1-p-intro",
        type: "paragraph",
        html: "<p>Walk onto almost any mid-sized construction site in India today and you'll find the same system running in the background: a WhatsApp group with three hundred unread messages, a shared drive full of inconsistently named PDFs, and a site engineer trying to remember what actually happened last Tuesday.</p><p>It works, until it doesn't. And it usually stops working at the worst possible moment.</p>",
      },
      {
        id: "b1-h-cost",
        type: "heading",
        html: "<h2>The Real Cost of Untracked Site Updates</h2>",
      },
      {
        id: "b1-p-cost",
        type: "paragraph",
        html: "<p>The cost of informal reporting rarely shows up as a single line item. It shows up as a two-hour Sunday evening spent reconstructing a week's progress into a client email. It shows up as a disputed variation order with no photographic trail. It shows up as a client who feels out of the loop and starts asking for daily calls instead of trusting the process.</p><p>None of this is anyone's fault directly — it's what happens when a project's entire memory lives in group chats and personal phone galleries instead of a system built to hold it.</p>",
      },
      {
        id: "b1-h-whatsapp",
        type: "heading",
        html: "<h2>Where WhatsApp Groups Fall Apart</h2>",
      },
      {
        id: "b1-p-whatsapp",
        type: "paragraph",
        html: "<p>Chat apps are built for conversation, not documentation. A photo sent on-site today is functionally unsearchable six weeks from now, buried under hundreds of unrelated messages, forwarded memes, and \"seen\" ticks.</p><blockquote><p>The problem isn't that teams don't communicate enough — it's that everything they communicate disappears into a format nobody can retrieve, filter, or hand over.</p></blockquote>",
      },
      {
        id: "b1-h-structured",
        type: "heading",
        html: "<h2>What Structured Reporting Looks Like Instead</h2>",
      },
      {
        id: "b1-p-structured",
        type: "paragraph",
        html: "<p>A structured system doesn't ask a team to work differently — it asks them to capture the same update in a way that can be found again. In practice, that means:</p><ul><li>Every update tagged to a project, date, and category at the moment it's captured</li><li>Photos and notes attached directly to the relevant milestone, not floating in a chat thread</li><li>Reports generated from real data instead of assembled manually from memory</li><li>A single, controlled view that clients and consultants can check without asking for a status call</li></ul>",
      },
      {
        id: "b1-p-close",
        type: "paragraph",
        html: "<p>None of this requires a heavier process. It requires a system built for the job that a chat app was never designed to do.</p>",
      },
    ],
    contentBlocks: [],
  },
  {
    id: 2,
    title: "Inside APEXISpro: How We Built a Record-Report-Release Workflow for Architects",
    excerpt:
      "A behind-the-scenes look at the workflow philosophy powering APEXISpro, and why we designed it around three verbs instead of a dashboard full of features.",
    slug: "inside-apexispro-record-report-release",
    category: "Product",
    meta_title: "Inside APEXISpro: The Record-Report-Release Workflow",
    metaTitle: "Inside APEXISpro: The Record-Report-Release Workflow",
    meta_description:
      "Why APEXISpro is built around three verbs — Record, Report, Release — instead of a dashboard full of disconnected features.",
    metaDescription:
      "Why APEXISpro is built around three verbs — Record, Report, Release — instead of a dashboard full of disconnected features.",
    author_name: "Apexis Team",
    authorName: "Apexis Team",
    author_role: "Product & Engineering",
    authorRole: "Product & Engineering",
    author_avatar: AUTHOR_AVATAR,
    authorAvatar: AUTHOR_AVATAR,
    cover_image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    tags: ["product", "architecture", "saas"],
    read_time: "5 min read",
    readTime: "5 min read",
    published_at: "2026-07-28T09:00:00.000Z",
    publishedAt: "2026-07-28T09:00:00.000Z",
    status: "Published",
    created_by: 1,
    createdAt: "2026-07-28T09:00:00.000Z",
    updatedAt: "2026-07-28T09:00:00.000Z",
    deletedAt: null,
    author: AUTHOR,
    faqs: [
      {
        question: "Why only three core actions instead of a full feature dashboard?",
        answer:
          "Because most site teams don't need more options — they need fewer decisions. Record, Report, and Release map to the three things that actually happen on a project, so there's nothing to configure before it's useful.",
      },
      {
        question: "Who decides what gets released to a client?",
        answer:
          "The project team, always. Release is a deliberate action, not an automatic sync — nothing reaches a client's view until someone on the team chooses to send it.",
      },
      {
        question: "Does this work for firms already using a project management tool?",
        answer:
          "Yes. APEXISpro isn't trying to replace task boards or scheduling software. It sits specifically at site documentation and client-facing reporting, which most PM tools don't cover well.",
      },
    ],
    content_blocks: [
      {
        id: "b2-p-intro",
        type: "paragraph",
        html: "<p>When we started building APEXISpro, the early prototypes looked like every other project management tool: tabs for tasks, tabs for files, tabs for messages. It was comprehensive. It was also completely unusable on a site with patchy signal and a supervisor holding a phone in one hand and a drawing roll in the other.</p><p>So we threw out the dashboard and started over with a simpler question: what does a project team actually <em>do</em>, every single day?</p>",
      },
      {
        id: "b2-h-verbs",
        type: "heading",
        html: "<h2>Why Three Verbs, Not Ten Features</h2>",
      },
      {
        id: "b2-p-verbs",
        type: "paragraph",
        html: "<p>The answer kept coming back to three actions: teams <strong>record</strong> what happened on site, they <strong>report</strong> it in a form someone else can understand, and they <strong>release</strong> that report to the people who need to see it — a client, a consultant, a vendor.</p><p>Everything in APEXISpro is organized around those three verbs. Not because it's a clever tagline, but because it matches how the work actually happens, in that order, every day.</p>",
      },
      {
        id: "b2-h-record",
        type: "heading",
        html: "<h2>Record: Capturing Site Reality Without Friction</h2>",
      },
      {
        id: "b2-p-record",
        type: "paragraph",
        html: "<p>Recording had to work one-handed, on a slow connection, without training. A photo, a short note, and a category — that's the entire capture flow. Anything heavier than that, and teams quietly stop using it within a week.</p>",
      },
      {
        id: "b2-h-report",
        type: "heading",
        html: "<h2>Report: Turning Raw Updates into Client-Ready Documents</h2>",
      },
      {
        id: "b2-p-report",
        type: "paragraph",
        html: "<p>This is where most of the manual effort used to go — someone, usually late at night, turning a week of scattered updates into a document a client would actually read. In APEXISpro, the report is a byproduct of the recording, not a separate project. That single change is what gives teams their evenings back:</p><ul><li>Auto-compiled from tagged site updates, not retyped from memory</li><li>Consistent formatting every time, regardless of who's writing it</li><li>Editable before release, so teams stay in control of tone and detail</li></ul>",
      },
      {
        id: "b2-h-release",
        type: "heading",
        html: "<h2>Release: Controlled Visibility, Not Chaos</h2>",
      },
      {
        id: "b2-p-release",
        type: "paragraph",
        html: "<p>Release is the one action a team takes deliberately. A client sees exactly what's been released to them — nothing more, nothing less. That boundary is what makes structured reporting feel safe to adopt: teams keep their working notes private until they choose to share.</p>",
      },
    ],
    contentBlocks: [],
  },
  {
    id: 3,
    title: "From WhatsApp Chaos to Structured Reports: A Field Guide for Contractors",
    excerpt:
      "A practical playbook for contractors and site supervisors who want to move off scattered chat threads and into a reporting rhythm clients actually trust.",
    slug: "field-guide-structured-reports-for-contractors",
    category: "Best Practices",
    meta_title: "A Field Guide for Contractors: From WhatsApp Chaos to Structured Reports",
    metaTitle: "A Field Guide for Contractors: From WhatsApp Chaos to Structured Reports",
    meta_description:
      "A practical playbook for contractors and site supervisors moving from scattered chat threads to a reporting rhythm clients trust.",
    metaDescription:
      "A practical playbook for contractors and site supervisors moving from scattered chat threads to a reporting rhythm clients trust.",
    author_name: "Apexis Team",
    authorName: "Apexis Team",
    author_role: "Field Operations",
    authorRole: "Field Operations",
    author_avatar: AUTHOR_AVATAR,
    authorAvatar: AUTHOR_AVATAR,
    cover_image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    tags: ["contractors", "workflow", "field-guide"],
    read_time: "7 min read",
    readTime: "7 min read",
    published_at: "2026-08-02T09:00:00.000Z",
    publishedAt: "2026-08-02T09:00:00.000Z",
    status: "Published",
    created_by: 1,
    createdAt: "2026-08-02T09:00:00.000Z",
    updatedAt: "2026-08-02T09:00:00.000Z",
    deletedAt: null,
    author: AUTHOR,
    faqs: [
      {
        question: "How long does it take a site team to build the daily capture habit?",
        answer:
          "Most teams settle in within two to three weeks. The habit sticks faster when capturing an update takes under a minute — anything longer and it gets skipped on busy days.",
      },
      {
        question: "What should a daily update actually include?",
        answer:
          "At minimum: a photo, the work category, and a one-line note. Resist the urge to write paragraphs on site — detail can be added later when the report is reviewed, not while standing in the sun.",
      },
      {
        question: "How do we get a client used to receiving structured reports instead of calls?",
        answer:
          "Start by sending both for a few weeks. Once the client sees the report consistently answers their questions before they ask, the calls naturally taper off on their own.",
      },
    ],
    content_blocks: [
      {
        id: "b3-p-intro",
        type: "paragraph",
        html: "<p>Every contractor we've spoken to agrees on the problem: reporting eats time that should go to running the site. Few agree on the fix, mostly because most fixes that get tried are either too heavy to survive contact with a real site, or too loose to actually solve anything.</p><p>Here's the version that tends to hold up in practice.</p>",
      },
      {
        id: "b3-h-habit",
        type: "heading",
        html: "<h2>Start With a Daily Capture Habit</h2>",
      },
      {
        id: "b3-p-habit",
        type: "paragraph",
        html: "<p>Reporting doesn't fail at the report — it fails at the capture. If updates aren't recorded as they happen, no tool downstream can rescue them. Build one small habit before anything else:</p><ul><li>One photo per major activity, taken the moment it's visibly complete</li><li>A one-line note — what happened, not why it matters</li><li>Tag it to the right category before moving on, while it's still fresh</li></ul>",
      },
      {
        id: "b3-h-structure",
        type: "heading",
        html: "<h2>Structure Beats Volume</h2>",
      },
      {
        id: "b3-p-structure",
        type: "paragraph",
        html: "<p>A common instinct is to over-document — dozens of photos, long descriptions, everything just in case. In practice, a client reading a report doesn't want volume, they want clarity. Ten well-tagged updates beat eighty untagged ones every time a report actually needs to be assembled.</p>",
      },
      {
        id: "b3-h-clientready",
        type: "heading",
        html: "<h2>Make Reports Client-Ready by Default</h2>",
      },
      {
        id: "b3-p-clientready",
        type: "paragraph",
        html: "<p>The report a client receives should never be the raw site feed. It should be a curated, dated summary that answers the three questions every client has: what's done, what's next, and what needs their input.</p><blockquote><p>A good report doesn't just inform a client — it removes the reason for them to call and ask.</p></blockquote>",
      },
      {
        id: "b3-p-close",
        type: "paragraph",
        html: "<p>None of this requires new software discipline from a whole team overnight. It requires one habit, captured consistently, structured well enough to turn into something a client actually trusts.</p>",
      },
    ],
    contentBlocks: [],
  },
];

// Keep the duplicate camelCase content field in sync with its snake_case source, as the real API does.
dummyBlogs.forEach((blog) => {
  blog.contentBlocks = blog.content_blocks;
});
