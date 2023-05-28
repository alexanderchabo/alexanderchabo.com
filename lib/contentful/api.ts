import { Document } from "@contentful/rich-text-types";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID missing");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN missing");
}

if (!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_PREVIEW_ACCESS_TOKEN missing");
}

type Education = {
  sys: { id: string };
  studyType: string;
  area: string;
  institution: string;
  location: string;
  summary: {
    json: Document;
  };
  dateStarted: string;
  dateEnded: string;
};

type EducationCollection = {
  data: {
    educationCollection: {
      items: Education[];
    };
  };
};

const getEducationQuery = (preview: boolean) => `{
  educationCollection (preview: ${preview}) {
    items {
      studyType
      area
      institution
      location
      summary {
        json
      }
      dateStarted
      dateEnded
    }
  }
}`;

type Work = {
  sys: { id: string };
  position: string;
  company: string;
  location: string;
  summary: {
    json: Document;
  };
  dateStarted: string;
  dateEnded: string;
};

type WorkCollection = {
  data: {
    workCollection: {
      items: Work[];
    };
  };
};

const getWorksQuery = (preview: boolean) => `{
  workCollection (preview: ${preview}) {
    items {
      position
      company
      location
      summary {
        json
      }
      dateStarted
      dateEnded
    }
  }
}`;

const fetchEntries = async <T>(query: string, preview = false) => {
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch contentful entries");
  }

  return response.json() as T;
};

export const getAllEducationEntries = async (preview = false) => {
  const { data } = await fetchEntries<EducationCollection>(
    getEducationQuery(preview),
    preview
  );

  return data.educationCollection.items;
};

export const getAllWorkEntries = async (preview = false) => {
  const { data } = await fetchEntries<WorkCollection>(
    getWorksQuery(preview),
    preview
  );

  return data.workCollection.items;
};
