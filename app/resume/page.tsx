import { ResumeEntries } from "@/components/ResumeEntries/ResumeEntries";
import {
  getAllEducationEntries,
  getAllWorkEntries,
} from "@/lib/contentful/api";
import { draftMode } from "next/headers";
import { Document } from "@contentful/rich-text-types";
import { Typography } from "@/components/Typography/Typography";

interface Sys {
  contentType: {
    sys: {
      id: string;
    };
  };
}

interface Logo {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: object;
      fileName: string;
      contentType: string;
    };
  };
}

interface Education {
  fields: {
    studyType: string;
    area: string;
    institution: string;
    location: string;
    summary: Document;
    link: string;
    logo: Logo;
    dateStarted: string;
    dateEnded: string;
  };
  sys: Sys;
}

interface Work {
  fields: {
    position: string;
    company: string;
    location: string;
    summary: Document;
    link: string;
    logo: Logo;
    dateStarted: string;
    dateEnded: string;
  };
  sys: Sys;
}

export default async function Resume() {
  const { isEnabled } = draftMode();
  const educationData = await getAllEducationEntries<Education[]>(isEnabled);
  const workData = await getAllWorkEntries<Work[]>(isEnabled);

  const educationEntries = educationData.map((entry) => {
    return {
      title: entry.fields.studyType + " in " + entry.fields.area,
      subtitle: entry.fields.institution,
      dateStarted: entry.fields.dateStarted,
      dateEnded: entry.fields.dateEnded,
      location: entry.fields.location,
      body: entry.fields.summary,
      logo: {
        src: entry.fields.logo.fields.file.url,
        alt: entry.fields.logo.fields.title,
      },
    };
  });

  const workEntries = workData.map((entry) => {
    return {
      title: entry.fields.position,
      subtitle: entry.fields.company,
      dateStarted: entry.fields.dateStarted,
      dateEnded: entry.fields.dateEnded,
      location: entry.fields.location,
      body: entry.fields.summary,
      logo: {
        src: entry.fields.logo.fields.file.url,
        alt: entry.fields.logo.fields.title,
      },
    };
  });

  return (
    <>
      <Typography tag="h1">Resume</Typography>
      <Typography>The story so far</Typography>

      <Typography tag="h2">Experience</Typography>
      <Typography>Wearer of many hats</Typography>
      <ResumeEntries entries={workEntries} />

      <Typography tag="h2">Education</Typography>
      <Typography>The math is strong in this one</Typography>
      <ResumeEntries entries={educationEntries} />
    </>
  );
}
