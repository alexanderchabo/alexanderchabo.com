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

export default function Contact() {
  return (
    <>
      <Typography tag="h1">Contact</Typography>
      <Typography>
        I&apos;m always looking to connect with folks about growth engineering.
      </Typography>
      <Socials />
    </>
  );
}
