import styles from "./ResumeEntry.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
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
  // TODO: Fix this hack to get the sorting to work properly
  const endDate = dateEnded > new Date().toISOString() ? "present" : dateEnded;

  const date = `${dateStarted} - ${endDate}`;

  return (
    <div className={styles.entry}>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.location}>{location}</p>
        {documentToReactComponents(body)}
      </div>
    </div>
  );
};
