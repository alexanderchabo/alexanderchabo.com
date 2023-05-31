import { draftMode } from "next/headers";

import {
  getAllEducationEntries,
  getAllWorkEntries,
} from "@/lib/contentful/api";
import { ResumeEntries } from "@/components/ResumeEntries/ResumeEntries";
import { Typography } from "@/components/Typography/Typography";

export default async function Resume() {
  const { isEnabled } = draftMode();

  const educationEntries = await getAllEducationEntries(isEnabled);
  const workEntries = await getAllWorkEntries(isEnabled);

  const mappedEducationEntries = educationEntries.map((entry) => ({
    dateStarted: entry.dateStarted,
    dateEnded: entry.dateEnded,
    location: entry.location,
    title: `${entry.studyType} in ${entry.area}`,
    subtitle: entry.institution,
    body: entry.summary.json,
  }));

  const mappedWorkEntries = workEntries.map((entry) => ({
    dateStarted: entry.dateStarted,
    dateEnded: entry.dateEnded,
    location: entry.location,
    title: entry.position,
    subtitle: entry.company,
    body: entry.summary.json,
  }));

  return (
    <>
      <Typography tag="h1">Resume</Typography>
      <Typography>The MacGyver is strong in this one.</Typography>
      <ResumeEntries entries={mappedWorkEntries} />

      <Typography tag="h2">Education</Typography>
      <Typography>The math is (was?) strong in this one.</Typography>
      <ResumeEntries entries={mappedEducationEntries} />
    </>
  );
}
