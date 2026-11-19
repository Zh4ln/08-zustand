import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

const API_URL = "https://notehub-public.goit.study/api";

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

function getHeaders() {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN?.trim();
  if (!token) {
    throw new Error(
      "NoteHub token is missing. Add NEXT_PUBLIC_NOTEHUB_TOKEN to .env.local.",
    );
  }

  return { Authorization: `Bearer ${token}` };
}

export async function fetchNotes({
  page,
  perPage,
  search = "",
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const { data } = await axios.get<FetchNotesResponse>(`${API_URL}/notes`, {
    headers: getHeaders(),
    params: {
      page,
      perPage,
      ...(search.trim() ? { search: search.trim() } : {}),
      ...(tag ? { tag } : {}),
    },
  });

  return data;
}

export async function fetchNoteById(id: Note["id"]): Promise<Note> {
  const { data } = await axios.get<Note>(
    `${API_URL}/notes/${encodeURIComponent(id)}`,
    { headers: getHeaders() },
  );

  return data;
}

export async function createNote(note: CreateNoteParams): Promise<Note> {
  const { data } = await axios.post<Note>(`${API_URL}/notes`, note, {
    headers: getHeaders(),
  });

  return data;
}

export async function deleteNote(id: Note["id"]): Promise<Note> {
  const { data } = await axios.delete<Note>(
    `${API_URL}/notes/${encodeURIComponent(id)}`,
    { headers: getHeaders() },
  );

  return data;
}
