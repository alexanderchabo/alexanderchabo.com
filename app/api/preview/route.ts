import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { enable } = await draftMode();
  enable();
  return new Response("Draft mode is enabled");
}
