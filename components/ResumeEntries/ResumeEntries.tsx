import {
  ResumeEntryProps,
  ResumeEntry,
} from "@/components/ResumeEntry/ResumeEntry";

interface ResumeEntriesProps {
  entries: ResumeEntryProps[];
}

export const ResumeEntries = ({ entries }: ResumeEntriesProps) => {
  return (
    <ul>
      {entries.map(
        ({ title, subtitle, dateStarted, dateEnded, location, body }) => {
          return (
            <li key={title} className="mb-4">
              <ResumeEntry
                title={title}
                subtitle={subtitle}
                dateStarted={dateStarted}
                dateEnded={dateEnded}
                location={location}
                body={body}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};
