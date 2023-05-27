import { Typography } from "@/components/Typography/Typography";

const SocialTable = () => {
  const socials = [
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

  return (
    <table>
      <tbody>
        {socials.map(({ name, href, text }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <a
                style={{
                  color: "blue",
                }}
                href={href}
              >
                <Typography noMargin>{text}</Typography>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Contact() {
  return (
    <>
      <Typography tag="h1">Contact</Typography>
      <Typography>
        I&apos;m always looking to connect with folks about growth engineering.
      </Typography>
      <SocialTable />
    </>
  );
}
