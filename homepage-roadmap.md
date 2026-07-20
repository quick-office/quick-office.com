# Homepage Roadmap — Quick Office
### Mapped to the existing site structure & components

> The homepage already has a working layout with the video banner in place.
> Every section below maps directly to a component or content field that already exists.
> This is a **content replacement guide**, not a structural one.

---

## Section Order (as rendered on the page)

```
Banner (video ✓) → Main Features → Value Props → Features Grid → Business Needs →
Comparison Row → Testimonial Quote → Brands Carousel → Single Testimonial →
Growth Process → Our Story → Integrations → Lead Generation →
Pricing → Testimonials → FAQ → Call To Action
```

---

## 1. Banner
**File:** `src/content/homepage/-index.md` → `banner`  
**Visual:** `VideoShowcase` component already in place — keep it ✓

The video is the hero's strongest trust asset. Only the copy needs updating.

**`banner.title`**
```
The All-In-One Accounting Software for <strong>Growing Businesses</strong>
```

**`banner.content`**
```
Manage invoices, track expenses, process payments, and generate financial reports —
all from one simple dashboard. Built for Bangladesh's SMBs.
```

**`banner.button_primary`** → label: `Start Free Trial` · link: `/pricing`  
**`banner.button_secondary`** → label: `See How It Works` · link: `/#how-it-works`

Add a trust line below the buttons in the Astro file:
```
No credit card required · 30-day free trial · Manual billing — pay when you're ready
```

---

## 2. Main Features — Pain Points
**File:** `src/content/homepage/-index.md` → `main_features`  
**Component:** pill-shaped labels in two rows of 3 (`feature-items-group`)

Name the exact pain points Quick Office solves. Keep them blunt and recognisable.

**`main_features.title`**
```
Still managing your business finances with <strong>spreadsheets and guesswork?</strong>
```

**`main_features.content`**
```
Manual accounting is slow, error-prone, and impossible to scale. Quick Office gives you
a complete financial system that works the way your business actually does.
```

**`main_features.items`** (6 pills — 3 per row)
```yaml
- 'Invoices Lost in Email Threads'
- 'No Real-Time Cash Visibility'
- 'Manual Voucher Creation'
- 'Chasing Supplier Payments'
- 'Month-End Accounting Panic'
- 'Multiple Disconnected Tools'
```

---

## 3. Value Props — Module Cards
**File:** `src/content/homepage/-index.md` → `value_props`  
**Component:** `ValueCard` — 4-column grid with icon, title, and 3 bullet features

Map each card to one of Quick Office's core modules.

**`value_props.title`**
```
One Platform. <strong>Every Financial Workflow.</strong>
```

**`value_props.content`**
```
Log in to a single dashboard to run your entire financial operation —
from first invoice to final report.
```

**`value_props.items`**
```yaml
- logo: '/images/value-proposition/values-icon-1.svg'
  title: 'Sales & Invoicing'
  list:
    - 'Create & send professional invoices'
    - 'Track payment status in real time'
    - 'Full payment receive history'

- logo: '/images/value-proposition/values-icon-2.svg'
  title: 'Procurement & Payments'
  list:
    - 'Manage all supplier invoices'
    - 'Process & record supplier payments'
    - 'Complete payment history log'

- logo: '/images/value-proposition/values-icon-3.svg'
  title: 'Accounting & Vouchers'
  list:
    - 'Full chart of accounts'
    - 'Debit/credit voucher creation'
    - 'Journal book & account book'

- logo: '/images/value-proposition/values-icon-4.svg'
  title: 'Reports & Insights'
  list:
    - 'Profit & loss summary'
    - 'Cost center analysis'
    - 'Account distribution overview'
```

---

## 4. Features Grid
**File:** `src/content/homepage/-index.md` → `our_features`  
**Component:** `FeatureCard` inside `Features` partial — bordered 3×3 grid

**`our_features.title`**
```
Everything You Need to Run Your <strong>Business Finances</strong>
```

**`our_features.content`**
```
From your first customer invoice to a complete profit & loss report —
Quick Office covers the full accounting lifecycle.
```

**`our_features.items`** (9 items)
```yaml
- logo: '/images/features-menu-icon.svg'
  title: 'Invoice Creation & Management'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Payment Receive & History'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Supplier Invoice Management'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Supplier Payment Processing'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Chart of Accounts'
  is_starred: true

- logo: '/images/features-menu-icon.svg'
  title: 'Voucher Creation (Debit/Credit)'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Profit & Loss Reports'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Cost Center & Cost Analysis'
  is_starred: false

- logo: '/images/features-menu-icon.svg'
  title: 'Team Roles & Permissions'
  is_starred: false
```

---

## 5. Business Needs — How It Works
**File:** `src/content/sections/business-needs.md`  
**Component:** `StepCard` vertical list with image, number, title, content

Use this as the step-by-step onboarding section.

```yaml
title: 'Get Up and Running in <strong>Minutes, Not Months</strong>'
items:
  - number: '01'
    title: 'Set Up Your Company'
    content: >
      Create your account, add your company profile, define your chart of accounts,
      and invite your team. Most businesses are fully set up in under 10 minutes.
    image: '/images/business-needs/step-1.png'

  - number: '02'
    title: 'Add Customers, Suppliers & Products'
    content: >
      Build your master data once. Quick Office auto-fills invoices from your customer
      and product list, and tracks supplier balances automatically.
    image: '/images/business-needs/step-2.png'

  - number: '03'
    title: 'Manage Finances from One Dashboard'
    content: >
      Create invoices, record vouchers, process payments, and generate reports — all
      from one screen. See your net worth, cash position, and outstanding payments
      at a glance.
    image: '/images/business-needs/step-3.png'
```

---

## 6. Comparison Row — Quick Office vs. The Alternatives
**File:** `src/content/sections/comparison-row.md`  
**Component:** `ComparisonRow` — one horizontal row per alternative with logos + price

Show price contrast. The visual impact of ৳1,999 vs ৳8,000+ is the main hook.

```yaml
title: 'One Tool. <strong>Replace Them All.</strong>'
price_suffix: '/Per Month'
items:
  - title: 'Tally + Excel + Separate Payroll'
    price: '৳8,000+'
    images:
      - '/images/integrations/tally.png'
      - '/images/integrations/excel.png'

  - title: 'Enterprise Accounting Suite'
    price: '৳15,000+'
    images:
      - '/images/integrations/enterprise.png'

  - title: 'Quick Office (All-in-One)'
    price: '৳1,999'
    images:
      - '/images/logo.png'
```

---

## 7. Testimonial Quote
**File:** `src/content/homepage/-index.md` → `testimonial_quote`  
**Component:** single blockquote between two `<hr>` dividers

**`testimonial_quote.title`**
```
We know you didn't start your business to become a <strong>full-time accountant</strong>
```

**`testimonial_quote.quote`**
```
Before Quick Office, I was spending 3 hours every Sunday just reconciling invoices and
figuring out which suppliers I still owed. Now it takes 20 minutes and I know my exact
profit margin in real time.
```

---

## 8. Brands Carousel
**File:** `src/content/sections/brands.md`  
**Component:** `BrandsCarousel`

Logos of businesses using Quick Office. Until real client logos are collected, use
industry category labels (Retail, Trading, Construction, Services) as placeholder trust signals.

---

## 9. Single Testimonial — Stats + Quote Card
**File:** `src/content/homepage/-index.md` → `single_testimonial`  
**Component:** `blob-message` stat pills on the left, quote card on the right

**`single_testimonial.stats`**
```yaml
- value: '500+'
  label: 'Businesses on Quick Office'
- value: '৳10 Crore+'
  label: 'Transactions Managed'
- value: '8 hrs/week'
  label: 'Average Time Saved'
```

**`single_testimonial.testimonial`**
```yaml
quote: >
  Quick Office completely replaced our separate invoicing tool, our expense tracker,
  and our accountant's manual spreadsheets. Everything is in one place and I can
  check our financial health from my phone at any time.
avatar: '/images/avatar.png'
name: 'Karim Rahman'
company: 'Rahman Trading Co., Dhaka'
```

---

## 10. Growth Process — 3-Step Path
**File:** `src/content/homepage/-index.md` → `growth_process`  
**Component:** `ProcessCard` grid inside the oval `section-box`

**`growth_process.title`**
```
From Sign-Up to <strong class="italic">Full Financial Control</strong> in 3 Steps
```

**`growth_process.items`**
```yaml
- logo: '/images/value-proposition/values-icon-1.svg'
  title: '1. Start Your Free Trial'
  content: >
    Sign up and get 30 days free — no credit card required. Your account is ready
    the moment you register.

- logo: '/images/value-proposition/values-icon-2.svg'
  title: '2. Set Up in Minutes'
  content: >
    Add your company, chart of accounts, customers, and suppliers. Most businesses
    are creating their first invoice within the hour.

- logo: '/images/value-proposition/values-icon-3.svg'
  title: '3. Run Your Finances on Autopilot'
  content: >
    Create invoices, track payments, manage vouchers, and pull reports — all from
    one dashboard. Know your exact financial position every day.
```

**`growth_process.button`** → label: `Start My Free Trial` · link: `/pricing`

---

## 11. Our Story (CEO Letter)
**File:** `src/content/sections/our-story.md`  
**Component:** `OurStory` — CEO photo, letter body, sign-off, key points

Keep the layout. Update the letter to speak to Bangladesh SMB owners frustrated with
manual accounting. Key themes:

- "We built Quick Office because we lived this problem"
- Fragmented tools + month-end chaos + no real-time visibility
- Mission: professional accounting for every SMB, not just enterprises with big IT budgets

---

## 12. Integrations
**File:** `src/content/homepage/-index.md` → `integrations`  
**Component:** overlapping circle logo bubbles

Quick Office's main external connection is SSLCommerz. Two options:

- **Option A (recommended):** Reframe as "Works with Bangladesh's payment systems" — show logos of SSLCommerz, bKash, Nagad, major banks
- **Option B:** Set `enable: false` until real integrations exist

**`integrations.title`** (if keeping)
```
Connects with your <strong>existing payment systems</strong>
```

---

## 13. Lead Generation — Free Resource
**File:** `src/content/homepage/-index.md` → `lead_generation`  
**Component:** `LeadGeneration` — image left, form + bullet list right

**`lead_generation.title`**
```
Free Resource for <strong>Business Owners</strong>
```

**`lead_generation.subtitle`**
```
The Bangladesh SMB Accounting Checklist: 7 Financial Controls Every Business Needs
```

**`lead_generation.content`**
```
Most small businesses have no idea if they're actually profitable until it's too late.
Download our FREE checklist to find the gaps in your current financial system
and fix them before they cost you.
```

**`lead_generation.list`**
```yaml
- '<strong>Cash Flow Check:</strong> Know exactly where your money is and where it''s going.'
- '<strong>Invoice Audit:</strong> Find the unpaid invoices silently draining your revenue.'
- '<strong>Month-End Shortcut:</strong> Close your books in under an hour with this process.'
```

**`lead_generation.button`** → label: `Download Free Checklist`

---

## 14. Pricing
**File:** `src/content/homepage/-index.md` → `pricing` + `src/content/pricing/-index.md`  
**Component:** `PricingSection`

**`pricing.title`**
```
Simple, Honest <strong>Pricing</strong>
```

**`pricing.content`**
```
Choose the plan that fits your business. Manual billing — pay when you're ready.
No automatic charges, ever.
```

| Plan | Price | Users | Note |
|---|---|---|---|
| Free Trial | ৳0 | 1 user | 30 days, no card required |
| Basic | ৳1,999/mo | Up to 3 users | — |
| Professional | ৳4,999/mo | Up to 10 users | Mark as "Most Popular" |
| Enterprise | ৳9,999/mo | Unlimited | — |

Add a note below the cards:
```
24-hour grace period after plan expiry · Coupon discounts available on renewal
```

---

## 15. Testimonials
**File:** `src/content/sections/testimonial.md`  
**Component:** `Testimonial` partial — card grid with quote, avatar, name, role, company

Focus quotes on specific measurable outcomes. Placeholder copy until real ones are collected:

- *"We went from spending 2 days on month-end closing to 2 hours."* — Operations Manager, Dhaka
- *"Finally I can see my outstanding invoices and supplier balances on one screen."* — Business Owner
- *"The free trial was all we needed to know this was the right tool for our team."* — Finance Manager

---

## 16. FAQ
**File:** `src/content/sections/faq.md`  
**Component:** `Faq` — accordion list

```yaml
- question: 'Do I need an accounting background to use Quick Office?'
  answer: >
    No. Quick Office is designed for business owners, not accountants. Common workflows
    like creating invoices, recording payments, and generating reports are guided
    step by step.

- question: 'How does billing work?'
  answer: >
    Quick Office uses manual billing. You choose when to pay and renew — there are no
    automatic charges. You also get a 24-hour grace period after your plan expires
    before access is restricted.

- question: 'Can I add my team members?'
  answer: >
    Yes. All paid plans support multiple users. You can invite team members, assign
    roles, and control exactly which modules and actions each person can access.

- question: 'Is my financial data secure?'
  answer: >
    Yes. All data is encrypted and stored securely. Only your authorised team members
    can access your company's financial information.

- question: 'Can I upgrade or downgrade my plan?'
  answer: >
    Yes, you can change your plan at any time. Contact us and we will apply the change
    on your next renewal.

- question: 'What payment methods do you accept?'
  answer: >
    We accept payments via SSLCommerz, supporting all major Bangladeshi banks,
    debit/credit cards, and mobile banking (bKash, Nagad).

- question: 'What happens when my free trial ends?'
  answer: >
    After your 30-day trial, choose any paid plan to continue. Your data is never
    deleted — simply pick the plan that fits and carry on where you left off.
```

---

## 17. Call To Action
**File:** `src/content/sections/call-to-action.md`  
**Component:** `CallToAction` — badge, headline, description, single button

```yaml
badge: 'Get Started Today'
title: 'Ready to take control of your <strong>business finances?</strong>'
description: >
  Join hundreds of businesses using Quick Office to manage invoices, payments,
  and accounting — all from one dashboard. Start free, no card required.
button:
  enable: true
  label: 'Start My Free Trial'
  link: '/pricing'
```

---

## Content Build Priority

| # | Section | File to Update | Priority |
|---|---|---|---|
| 1 | Banner | `homepage/-index.md` → `banner` | 🔴 Now |
| 2 | Main Features | `homepage/-index.md` → `main_features` | 🔴 Now |
| 3 | Value Props | `homepage/-index.md` → `value_props` | 🔴 Now |
| 4 | Pricing | `homepage/-index.md` + `pricing/-index.md` | 🔴 Now |
| 5 | Growth Process | `homepage/-index.md` → `growth_process` | 🟡 Soon |
| 6 | Business Needs | `sections/business-needs.md` | 🟡 Soon |
| 7 | FAQ | `sections/faq.md` | 🟡 Soon |
| 8 | Call To Action | `sections/call-to-action.md` | 🟡 Soon |
| 9 | Testimonial Quote | `homepage/-index.md` → `testimonial_quote` | 🟡 Soon |
| 10 | Features Grid | `homepage/-index.md` → `our_features` | 🟡 Soon |
| 11 | Comparison Row | `sections/comparison-row.md` | 🟡 Soon |
| 12 | Single Testimonial | `homepage/-index.md` → `single_testimonial` | 🟢 Later |
| 13 | Our Story | `sections/our-story.md` | 🟢 Later |
| 14 | Lead Generation | `homepage/-index.md` → `lead_generation` | 🟢 Later |
| 15 | Testimonials | `sections/testimonial.md` | 🟢 Later |
| 16 | Brands Carousel | `sections/brands.md` | 🟢 Later |
| 17 | Integrations | `homepage/-index.md` → `integrations` | 🟢 Later |
