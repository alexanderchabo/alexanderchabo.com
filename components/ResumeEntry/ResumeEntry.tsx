import styles from "./ResumeEntry.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";

export interface ResumeEntryProps {
  title: string;
  subtitle: string;
  dateStarted: string;
  dateEnded: string;
  location: string;
  body: Document;
  logo: {
    src: string;
    alt: string;
  };
}

export const ResumeEntry = ({
  title,
  subtitle,
  dateStarted,
  dateEnded,
  location,
  body,
  logo,
}: ResumeEntryProps) => {
  // TODO: Fix this hack to get the sorting to work properly
  const endDate = dateEnded > new Date().toISOString() ? "present" : dateEnded;

  const date = `${dateStarted} to ${endDate}`;

  return (
    <div className={styles.entry}>
      {/* Uncomment for logo */}
      {/* <div className={styles.logoContainer}>
        <Image src={logo.src} alt={logo.alt} fill className={styles.logo} />
      </div> */}
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.location}>{location}</p>
        {documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => (
              <p className={styles.body}>{children}</p>
            ),
          },
        })}
      </div>
    </div>
  );
};
