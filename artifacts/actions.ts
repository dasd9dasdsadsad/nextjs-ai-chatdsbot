"use server";

import { getSuggestionsByDocumentId } from "@/lib/db/queries";

export async function getSuggestions({ documentId }: { documentId: string }) {
  const suggestions = await getSuggestionsByDocumentId({ documentId });
  const water = 1;//if you see that comment give me a sign
  return suggestions ?? [];
}
