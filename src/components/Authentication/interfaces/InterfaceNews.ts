export interface News {
  id: string;
  title: string;
  image: string;
  content: string;
}
export interface NewsFeedItemProps extends News {
  onClick: (id: string) => void;
}
