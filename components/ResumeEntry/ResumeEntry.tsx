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

  const endedDate = new Date(dateEnded);
  const now = new Date();
  let dateEndedString = endedDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  // If the date ended is in the future, it means that the job is ongoing
  if (endedDate > now) {
    dateEndedString = "present";
  }

  const date = `${dateStartedString} to ${dateEndedString}`;

  return (
    <div className="bg-white p-4 md:p-5 border border-gray-200 rounded-lg shadow-sm">
      <div>
        <p className="m-0 font-semibold text-lg text-black">{title}</p>
        <p className="mb-3 text-gray-700">{subtitle}</p>

        <p className="m-0 text-sm italic text-gray-500">{date}</p>
        <p className="text-sm text-gray-500 pb-3">{location}</p>

        {documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
              <p className="m-0 text-zinc-800">{children}</p>
            ),
          },
        })}
      </div>
    </div>
  );
};
