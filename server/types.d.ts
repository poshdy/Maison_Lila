import QueryString from "qs";

export type Query =
  | string
  | QueryString.ParsedQs
  | string[]
  | QueryString.ParsedQs[]
  | undefined;

export type User = {
  id: string;
  role: string;
  email: string;
};
