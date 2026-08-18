export type EditorialSection = {
  heading: string;
  body: string[];
  bullets: string[];
};

export type EditorialFaq = {
  question: string;
  answer: string;
};

export type EditorialEntry = {
  id: string;
  path: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  quickAnswer: string;
  sections: EditorialSection[];
  faqs: EditorialFaq[];
  related: string[];
  reviewNote: string;
};
