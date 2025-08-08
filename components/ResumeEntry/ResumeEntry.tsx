import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

export interface ResumeEntryProps {
  title: string;
  subtitle: string;
  dateStarted: string;
  dateEnded: string;
  location: string;
  body: Document;
}

export const ResumeEntry = ({
  title,
  subtitle,
  dateStarted,
  dateEnded,
  location,
  body,
}: ResumeEntryProps) => {
  const dateStartedString = new Date(dateStarted).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  let dateEndedString = new Date(dateEnded).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  // If the date ended is in the future, it means that the job is ongoing
  if (dateEnded > new Date().toISOString()) {
    dateEndedString = "present";
  }

  const date = `${dateStartedString} to ${dateEndedString}`;

  return (
    <div className="bg-gray-100 p-4 border-b border-gray-300">
      <div>
        <p className="m-0 font-bold text-lg">{title}</p>
        <p className="mb-4">{subtitle}</p>

        <p className="m-0 text-sm italic text-gray-500">{date}</p>
        <p className="text-sm text-gray-500 pb-3">{location}</p>

        {documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
              <p className="m-0">{children}</p>
            ),
          },
        })}
      </div>
    </div>
  );
};
