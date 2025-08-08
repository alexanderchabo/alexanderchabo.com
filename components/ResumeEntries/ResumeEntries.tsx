import {
  ResumeEntryProps,
  ResumeEntry,
} from "@/components/ResumeEntry/ResumeEntry";

interface ResumeEntriesProps {
  entries: ResumeEntryProps[];
}

export const ResumeEntries = ({ entries }: ResumeEntriesProps) => {
  return (
    <ul className="p-0">
      {entries.map(
        ({ title, subtitle, dateStarted, dateEnded, location, body }) => {
          return (
            <li key={title} className="list-none mb-4">
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
