import { ContactList } from "@/components/Contact/ContactList";
const SOCIALS = [
  {
    name: "Email",
    href: "mailto:alexander.chabo@gmail.com",
    text: "alexander.chabo@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5L4 8V6l8 5 8-5z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/alexanderchabo/",
    text: "github.com/alexanderchabo",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.36-1.1.66-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1-2.71 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.71.62.68 1 1.54 1 2.71 0 3.85-2.34 4.7-4.57 4.95.37.31.7.92.7 1.86v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexanderchabo/",
    text: "linkedin.com/in/alexanderchabo",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5M7 8.89H3v12h4zM21 21h-4v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.63-2.42 3.32V21h-4v-12h3.84v1.64h.05a4.21 4.21 0 0 1 3.79-2.08c4.05 0 4.8 2.66 4.8 6.11z"
        />
      </svg>
    ),
  },
];

const Socials = () => <ContactList items={SOCIALS} />;

export const metadata = {
  title: "Alexander Chabo - Contact | Senior Fullstack Growth Engineer",
  description:
    "Get in touch with Alexander Chabo through the Contact page. Don't hesitate to connect via email at alexander.chabo@gmail.com or find him on GitHub (https://github.com/alexanderchabo/) and LinkedIn (https://www.linkedin.com/in/alexanderchabo/). Reach out and start a conversation today!",
};

export default function Contact() {
  return (
    <>
      <h1 className="mb-2 text-3xl tracking-tight">Contact</h1>
      <p className="mb-6 text-gray-700">
        Don&apos;t be a stranger! Connect with me on any of the platforms below.
      </p>
      <Socials />
    </>
  );
}
