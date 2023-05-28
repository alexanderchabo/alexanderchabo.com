import styles from "./ResumeEntry.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Typography } from "@/components/Typography/Typography";

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
    <div className={styles.entry}>
      <div>
        <Typography noMargin className={styles.title}>
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>

        <Typography noMargin className={styles.date}>
          {date}
        </Typography>
        <Typography className={styles.location}>{location}</Typography>

        {documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
              <Typography noMargin>{children}</Typography>
            ),
          },
        })}
      </div>
    </div>
  );
};
