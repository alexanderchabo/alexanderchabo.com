const SOCIALS = [
  {
    name: "Email",
    href: "mailto:alexander.chabo@gmail.com",
    text: "alexander.chabo@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/alexanderchabo/",
    text: "https://github.com/alexanderchabo/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexanderchabo/",
    text: "https://www.linkedin.com/in/alexanderchabo/",
  },
];

const Socials = () => {
  return (
    <div>
      {SOCIALS.map(({ name, href, text }) => (
        <div key={name} className="mb-4">
          <p className="m-0">{name}</p>

          <a className="text-blue-600 break-words" href={href} target="_blank">
            {text}
          </a>
        </div>
      ))}
    </div>
  );
};

export const metadata = {
  title: "Alexander Chabo - Contact | Senior Fullstack Growth Engineer",
  description:
    "Get in touch with Alexander Chabo through the Contact page. Don't hesitate to connect via email at alexander.chabo@gmail.com or find him on GitHub (https://github.com/alexanderchabo/) and LinkedIn (https://www.linkedin.com/in/alexanderchabo/). Reach out and start a conversation today!",
};

export default function Contact() {
  return (
    <>
      <h1 className="mb-4 text-2xl">Contact</h1>
      <p className="mb-4">
        Don&apos;t be a stranger! Feel free to reach out to me on any of the
        socials below.
      </p>
      <Socials />
    </>
  );
}
