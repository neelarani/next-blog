import { Post, Prisma } from '@prisma/client';
import { prisma } from '../../config/db';

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

const getAllPost = async () => {
  const result = await prisma.post.findMany({
    select: {
      id: true,
      content: true,
      isFeatured: true,
      title: true,
      views: true,
      author: true,
      tags: true,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
};
