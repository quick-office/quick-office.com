# Homepage Roadmap — Quick Office

### 10 sections · mapped to existing components

---

## Section Order

```
1. Banner → 2. Social Proof Bar → 3. Pain Points → 4. Value Props →
5. Features Grid → 6. How It Works → 7. Comparison Row →
8. Pricing → 9. Testimonials + FAQ → 10. Call To Action
```

---

## 1. Banner

**File:** `homepage/-index.md` → `banner`  
**Video:** `VideoShowcase` component — autoplay muted, sound toggle on click ✓

Record a **60–90 second product overview** walking through the dashboard in real use.
File: `/public/showcase.mp4`

```yaml
title: 'The All-In-One Accounting Software for <strong>Growing Businesses</strong>'
content: >
    Manage invoices, track expenses, process payments, and generate financial
    reports — all from one simple dashboard. Built for Bangladesh's SMBs.
button_primary:
    label: 'Start Free Trial'
    link: '/pricing'
button_secondary:
    label: 'See How It Works'
    link: '/#how-it-works'
```

Trust line below buttons: `No credit card required · 30-day free trial · Manual billing`

---

## 2. Social Proof Bar

**Component:** `BrandsCarousel` — move this up directly below the banner

Client logos + 3 stat numbers across the bar:

| Stat                 | Value      |
| -------------------- | ---------- |
| Businesses           | 500+       |
| Transactions Managed | ৳10 Crore+ |
| Time Saved / week    | 8 hrs avg  |

---

## 3. Pain Points

**File:** `homepage/-index.md` → `main_features` · **Component:** pill grid (2 rows × 3)

```yaml
title: 'Still managing finances with <strong>spreadsheets and guesswork?</strong>'
content: >
    Manual accounting is slow and error-prone. Quick Office gives you a complete
    financial system that works the way your business actually does.
items:
    - 'Invoices Lost in Email Threads'
    - 'No Real-Time Cash Visibility'
    - 'Manual Voucher Creation'
    - 'Chasing Supplier Payments'
    - 'Month-End Accounting Panic'
    - 'Multiple Disconnected Tools'
```

---

## 4. Value Props

**File:** `homepage/-index.md` → `value_props` · **Component:** `ValueCard` 4-column grid

```yaml
title: 'One Platform. <strong>Every Financial Workflow.</strong>'
content: 'Log in to a single dashboard to run your entire financial operation.'
items:
    - title: 'Sales & Invoicing'
      list: ['Create & send professional invoices', 'Track payment status in real time', 'Full payment receive history']

    - title: 'Procurement & Payments'
      list: ['Manage all supplier invoices', 'Process & record supplier payments', 'Complete payment history log']

    - title: 'Accounting & Vouchers'
      list: ['Full chart of accounts', 'Debit/credit voucher creation', 'Journal book & account book']

    - title: 'Reports & Insights'
      list: ['Profit & loss summary', 'Cost center analysis', 'Account distribution overview']
```

---

## 5. Features Grid

**File:** `homepage/-index.md` → `our_features` · **Component:** `FeatureCard` 3×3 grid  
**Video:** `VideoShowcase` placed **below the grid** — a focused feature walkthrough

Record a **2–3 minute screen recording** of the key flows: create invoice → receive payment → view P&L.
This gives buyers a real feel for the UI before they sign up.  
File: `/public/features-demo.mp4`

```yaml
title: 'Everything You Need to Run Your <strong>Business Finances</strong>'
content: 'From your first invoice to a complete P&L report — Quick Office covers it all.'
items:
    - { title: 'Invoice Creation & Management' }
    - { title: 'Payment Receive & History' }
    - { title: 'Supplier Invoice Management' }
    - { title: 'Supplier Payment Processing' }
    - { title: 'Chart of Accounts', is_starred: true }
    - { title: 'Voucher Creation (Debit/Credit)' }
    - { title: 'Profit & Loss Reports' }
    - { title: 'Cost Center & Cost Analysis' }
    - { title: 'Team Roles & Permissions' }
```

---

## 6. How It Works

**File:** `homepage/-index.md` → `growth_process` · **Component:** `ProcessCard` in section-box  
**Video:** `TestimonialCard` component placed **above the 3 process cards** — click-to-play with poster

A short **setup walkthrough video** (60–90 sec) showing someone actually going through the 3 steps: signing up → adding a customer → sending an invoice. Anchors the steps in reality.  
File: `/public/how-it-works.mp4` · Poster: `/images/how-it-works-poster.jpg`

```yaml
title: 'Up and Running in <strong class="italic">3 Simple Steps</strong>'
items:
    - title: '1. Start Your Free Trial'
      content: 'Sign up in seconds — no credit card required. Your account is ready immediately.'

    - title: '2. Set Up in Minutes'
      content: 'Add your company, chart of accounts, customers, and suppliers. Most teams send their first invoice within the hour.'

    - title: '3. Run Your Finances Daily'
      content: 'Create invoices, record vouchers, process payments, and pull reports — all from one dashboard.'
button:
    label: 'Start My Free Trial'
    link: '/pricing'
```

---

## 7. Comparison Row

**File:** `sections/comparison-row.md` · **Component:** `ComparisonRow`

```yaml
title: 'One Tool. <strong>Replace Them All.</strong>'
price_suffix: '/Per Month'
items:
    - title: 'Tally + Excel + Separate Payroll'
      price: '৳8,000+'
    - title: 'Enterprise Accounting Suite'
      price: '৳15,000+'
    - title: 'Quick Office'
      price: '৳1,999'
```

---

## 8. Pricing

**File:** `homepage/-index.md` → `pricing` + `pricing/-index.md` · **Component:** `PricingSection`

```yaml
title: 'Simple, Honest <strong>Pricing</strong>'
content: 'Manual billing — pay when you are ready. No automatic charges, ever.'
```

| Plan            | Price     | Users            |
| --------------- | --------- | ---------------- |
| Free Trial      | ৳0        | 1 user · 30 days |
| Basic           | ৳1,999/mo | Up to 3 users    |
| Professional ⭐ | ৳4,999/mo | Up to 10 users   |
| Enterprise      | ৳9,999/mo | Unlimited        |

Note below cards: `24-hour grace period after expiry · Coupon discounts on renewal`

---

## 9. Testimonials + FAQ

**Files:** `sections/testimonial.md` + `sections/faq.md` · **Components:** `Testimonial` then `Faq`  
**Video:** `TestimonialCard` component supports a `video` prop — use it for **1 featured video testimonial**

Place one `TestimonialCard` at the top of the testimonials section with a customer speaking on camera, then show the remaining text cards below it. The `TestimonialCard` renders a video thumbnail with a click-to-play overlay and shows the quote + name beneath.

```
poster: '/images/testimonials/karim-poster.jpg'
video:  '/public/testimonials/karim.mp4'
content: 'Quick Office replaced our invoicing tool, expense tracker, and month-end spreadsheets. Everything is now in one place.'
name: 'Karim Rahman'
designation: 'Rahman Trading Co., Dhaka'
```

**Text testimonial quotes** (placeholders until real ones are collected):

- _"We went from 2 days on month-end closing to 2 hours."_ — Operations Manager, Dhaka
- _"Finally all invoices and supplier balances in one screen."_ — Business Owner, Chittagong
- _"The free trial was all we needed."_ — Finance Manager, Dhaka

**FAQ items:**

```yaml
- Q: Do I need an accounting background?
  A: No. Workflows like invoicing and payments are guided step by step.

- Q: How does billing work?
  A: Manual billing — you pay when you renew. No automatic charges. 24-hour grace period after expiry.

- Q: Can I add team members?
  A: Yes. All paid plans support multiple users with role-based permissions.

- Q: What payment methods are accepted?
  A: SSLCommerz — all major banks, cards, bKash, Nagad.

- Q: What happens after my trial ends?
  A: Pick any paid plan to continue. Your data is never deleted.
```

---

## 10. Call To Action

**File:** `sections/call-to-action.md` · **Component:** `CallToAction`

```yaml
badge: 'Get Started Today'
title: 'Ready to take control of your <strong>business finances?</strong>'
description: >
    Join hundreds of businesses using Quick Office. Start free, no card required.
button:
    label: 'Start My Free Trial'
    link: '/pricing'
```

---

## Build Order

| Priority | Section        | File                                       | Video needed                                          |
| -------- | -------------- | ------------------------------------------ | ----------------------------------------------------- |
| 🔴 1     | Banner         | `homepage/-index.md`                       | `showcase.mp4` — product overview (60–90s)            |
| 🔴 2     | Pricing        | `homepage/-index.md` + `pricing/-index.md` | —                                                     |
| 🔴 3     | Pain Points    | `homepage/-index.md`                       | —                                                     |
| 🔴 4     | Value Props    | `homepage/-index.md`                       | —                                                     |
| 🟡 5     | How It Works   | `homepage/-index.md`                       | `how-it-works.mp4` — setup walkthrough (60–90s)       |
| 🟡 6     | Features Grid  | `homepage/-index.md`                       | `features-demo.mp4` — key flows walkthrough (2–3 min) |
| 🟡 7     | Comparison Row | `sections/comparison-row.md`               | —                                                     |
| 🟡 8     | Call To Action | `sections/call-to-action.md`               | —                                                     |
| 🟢 9     | Testimonials   | `sections/testimonial.md`                  | `testimonials/karim.mp4` — customer on camera         |
| 🟢 10    | FAQ            | `sections/faq.md`                          | —                                                     |

### Video assets summary

| File                             | Section       | Component         | Style                        |
| -------------------------------- | ------------- | ----------------- | ---------------------------- |
| `/public/showcase.mp4`           | Banner        | `VideoShowcase`   | Autoplay muted, sound toggle |
| `/public/how-it-works.mp4`       | How It Works  | `TestimonialCard` | Click-to-play with poster    |
| `/public/features-demo.mp4`      | Features Grid | `VideoShowcase`   | Autoplay muted, sound toggle |
| `/public/testimonials/karim.mp4` | Testimonials  | `TestimonialCard` | Click-to-play with poster    |
