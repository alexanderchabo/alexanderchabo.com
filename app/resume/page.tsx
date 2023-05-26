import { ResumeEntries } from "@/components/ResumeEntries/ResumeEntries";
import {
  getAllEducationEntries,
  getAllWorkEntries,
} from "@/lib/contentful/api";
import { draftMode } from "next/headers";
import { Document } from "@contentful/rich-text-types";

interface Education {
  fields: {
    studyType: string;
    area: string;
    institution: string;
    location: string;
    summary: Document;
    link: string;
    logo: object;
    dateStarted: string;
    dateEnded: string;
  };
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
}

interface Work {
  fields: {
    position: string;
    company: string;
    location: string;
    summary: Document;
    link: string;
    logo: object;
    dateStarted: string;
    dateEnded: string;
  };
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
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
    };
  });

  return (
    <>
      <h1>Resume</h1>
      <p>The story so far</p>
      <h2>Experience</h2>
      <p>Wearer of many hats</p>
      <ResumeEntries entries={workEntries} />
      <h2>Education</h2>
      <p>The math is strong in this one</p>
      <br />
      <ResumeEntries entries={educationEntries} />
    </>
  );
}
