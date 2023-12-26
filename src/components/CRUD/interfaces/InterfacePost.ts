import { Comments } from "./InterfaceComments";

export interface Post {
  id: number;
  date: string;
  author: string;
  position: string;
  avatar: string;
  content: string;
  created: number;
  likes: number;
  comments: Comments[];
}
