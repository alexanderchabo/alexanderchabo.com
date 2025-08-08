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
      <h1 className="mb-3 md:mb-4 text-3xl tracking-tight">
        Hey there! I&apos;m Alexander Chabo
      </h1>

      <p className="mb-3 text-gray-700">
        {`I'm a Senior FullStack Growth Engineer with +${yearsWorking} years of experience,
        aiming to be where groundbreaking tech meets culture, people, and the
        next big ideas.`}
      </p>

      <p className="mb-6 text-gray-700">
        Throughout the last couple of years, I&apos;ve been working in the
        domain of growth engineering, where I&apos;ve been building and scaling
        products and teams through product-led experimentation. I&apos;ve also
        been driving how organizations work with progressive delivery and
        product analytics through thought leadership, coaching, and hands-on
        work.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/resume"
          className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          View resume
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white text-black border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
