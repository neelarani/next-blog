export interface IAuthor {
  id: number;
  name: string;
  email?: string;
  picture?: string;
  isVerified: boolean;
}

export interface IBlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  author: IAuthor;
  views: number;
  createdAt: Date;
}
