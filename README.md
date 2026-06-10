project structure 

src
│
├── app
|	|
|	|__ Splash.tsx
|	|
│   ├── (auth)
│   │   └── login.tsx
│   │
│   ├── (admin)
│   │   ├── dashboard.tsx
│   │   ├── invoices.tsx
│   │   ├── billing.tsx
│   │   ├── customers.tsx
│   │   ├── products.tsx
│   │   └── settings.tsx
│   │
│   ├── (user)
│   │   ├── home.tsx
│   │   ├── bills.tsx
│   │   ├── payments.tsx
│   │   └── settings.tsx
│   │
│   └── _layout.tsx
│
├── components
│   ├── common
│   ├── cards
│   ├── forms
│   ├── buttons
│   └── modals
│
├── features
│   ├── auth
│   ├── customer
│   ├── product
│   ├── invoice
│   ├── payment
│   └── ledger
│
├── services
│   ├── api
│   └── storage
│
├── hooks
│
├── store
│   ├── slices
│   └── index.ts
│
├── theme
│
├── constants
│
├── types
│
└── utils

