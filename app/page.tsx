export const metadata = {
  title:
    "Alexander Chabo - Personal Website | Senior Fullstack Growth Engineer",
  description:
    "Alexander Chabo is a highly experienced Senior FullStack Growth Engineer with over 9 years of expertise. Passionate about combining groundbreaking technology with culture, people, and innovative ideas, Alexander has made significant contributions in the field of growth engineering. He excels in building and scaling products and teams by leveraging product-led experimentation. Alexander's thought leadership, coaching, and hands-on work have also played a pivotal role in shaping how organizations approach progressive delivery and product analytics.",
};

export default function Home() {
  const yearsWorking = new Date().getFullYear() - 2014;

  return (
    <>
      <h1 className="mb-6 text-3xl">Hey there! I&apos;m Alexander Chabo</h1>

      <p className="mb-4">
        {`I'm a Senior FullStack Growth Engineer with +${yearsWorking} years of experience,
        aiming to be where groundbreaking tech meets culture, people, and the
        next big ideas.`}
      </p>

      <p className="mb-4">
        Throughout the last couple of years, I&apos;ve been working in the
        domain of growth engineering, where I&apos;ve been building and scaling
        products and teams through product-led experimentation. I&apos;ve also
        been driving how organizations work with progressive delivery and
        product analytics through thought leadership, coaching, and hands-on
        work.
      </p>
    </>
  );
}
