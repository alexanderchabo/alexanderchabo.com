import { Typography } from "@/components/Typography/Typography";

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
        <div key={name} style={{ marginBottom: "1rem" }}>
          <Typography noMargin>{name}</Typography>

          <a
            style={{
              color: "blue",
              wordWrap: "break-word",
            }}
            href={href}
            target="_blank"
          >
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
      <Typography tag="h1">Contact</Typography>
      <Typography>
        Don&apos;t be a stranger! Feel free to reach out to me on any of the
        socials below.
      </Typography>
      <Socials />
    </>
  );
}
