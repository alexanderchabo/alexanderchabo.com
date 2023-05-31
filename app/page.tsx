import { Typography } from "@/components/Typography/Typography";

export default function Home() {
  const yearsWorking = new Date().getFullYear() - 2014;

  return (
    <>
      <Typography tag="h1">Hey there! I&apos;m Alexander Chabo</Typography>

      <Typography>
        {`I'm a Swedish Software Engineer with +${yearsWorking} years of experience,
        aiming to be where groundbreaking tech meets culture, people, and the
        next big ideas.`}
      </Typography>

      <Typography>
        Throughout the last couple of years, I&apos;ve been working in the
        domain of growth engineering, where I&apos;ve been building and scaling
        products and teams through product-led experimentation. I&apos;ve also
        been driving how organizations work with progressive delivery and
        product analytics through thought leadership, coaching, and hands-on
        work.
      </Typography>
    </>
  );
}
