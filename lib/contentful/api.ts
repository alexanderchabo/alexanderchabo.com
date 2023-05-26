if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID missing");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN missing");
}

if (!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  throw new Error("CONTENTFUL_PREVIEW_ACCESS_TOKEN missing");
}

const fetchEntries = async (
  query: Record<string, string> = {},
  preview = false
) => {
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;
  const baseUrl = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${accessToken}`;
  const url = new URL(baseUrl);

  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch contentful entries");
  }

  return response.json();
};

export const getAllEducationEntries = async <TEntries>(preview = false) => {
  const entries = await fetchEntries(
    {
      content_type: "education",
    },
    preview
  );

  return entries.items as TEntries;
};

export const getAllWorkEntries = async <TEntries>(preview = false) => {
  const entries = await fetchEntries(
    {
      content_type: "work",
    },
    preview
  );

  return entries.items as TEntries;
};
