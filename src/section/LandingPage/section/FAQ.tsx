import Container from "./Container";
import FAQItem from "./FAQItem";

const faqs = [
  {
    que: "What is Coldmail?",
    ans: "Coldmail is your go-to platform for setting up and managing mailboxes, perfect for cold email outreach. We make it easy to get started with Google Workspace or Microsoft 365. Our automated system ensures your emails are optimized for deliverability, all at just $2.50 per mailbox per month.",
  },
  {
    que: "Why Choose Coldmail?",
    ans: "Get your mailboxes up and running fast with each domain getting its own space, keeping things organized. Also our mailboxes use US IP addresses, boosting your email deliverability with custom tracking automatically, so you can monitor your outreach.",
  },
  {
    que: "How Does Coldmail Improve Deliverability?",
    ans: "By giving each domain its own workspace and using US-based IPs, we help your emails land where they should—in the inbox. Plus, we handle all the techy stuff like DKIM, SPF, and DMARC records for you.",
  },
  {
    que: "Which Email Providers Do You Support?",
    ans: "We work with Google Workspace and Microsoft 365.",
  },
  {
    que: "Can I use my own domain with Coldmail?",
    ans: "Definitely. Bring your own domain, and we'll help you setup mailboxes with automated dns setup.",
  },
  {
    que: "Can I buy domains through Coldmail? How much do they cost?",
    ans: "You bet! We offer over 10+ domain extensions. For example, a .com domain is $13.00. Log in to see all the options and prices.",
  },
  {
    que: "Do I own the domains I purchase?",
    ans: "Yes, any domain you buy through us is yours.",
  },
  {
    que: "Do I have full access to my mailboxes?",
    ans: "Absolutely. You have complete control over your mailboxes. We even provide you with admin access to the workspace, so you can manage everything with ease.",
  },
  {
    que: "Can I set up custom tracking domains?",
    ans: "Yes, and we make it hassle-free by setting them up for you automatically.",
  },
  {
    que: "How does your pricing work?",
    ans: "We keep it simple with monthly subscriptions and no long-term contracts. Just a heads up, we have a no-refund policy.",
  },
  {
    que: "What's your refund policy?",
    ans: "We don't offer refunds, so please review our terms or reach out if you have questions.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Everything you need to know about setup, warmup and integrations.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:divide-slate-800 dark:border-slate-700 dark:bg-slate-900/50">
          {faqs.map((item, i) => (
            <FAQItem key={item.que} {...item} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
