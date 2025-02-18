import { DEFAULT_LOCALE } from '@/i18n/routing';
import { BlogPost } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const POSTS_BATCH_SIZE = 10;

export async function getPosts(locale: string = DEFAULT_LOCALE): Promise<{ posts: BlogPost[] }> {
  const postsDirectory = path.join(process.cwd(), 'blogs', locale);

  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    return { posts: [] };
  }

  let filenames = await fs.promises.readdir(postsDirectory);
  filenames = filenames.reverse();

  let allPosts: BlogPost[] = [];

  // 分批次读取文件
  for (let i = 0; i < filenames.length; i += POSTS_BATCH_SIZE) {
    const batchFilenames = filenames.slice(i, i + POSTS_BATCH_SIZE);

    const batchPosts: BlogPost[] = await Promise.all(
      batchFilenames.map(async (filename) => {
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = await fs.promises.readFile(fullPath, 'utf8');

        const { data, content } = matter(fileContents);

        return {
          locale, // 使用传入的 locale 参数
          title: data.title,
          description: data.description,
          image: data.image || '',
          slug: data.slug,
          tags: data.tags,
          date: data.date,
          visible: data.visible || 'published',
          pin: data.pin || false,
          content,
          metadata: data,
        };
      })
    );

    allPosts.push(...batchPosts);
  }

  // 过滤掉非发布状态的文章
  allPosts = allPosts.filter(post => post.visible === 'published');

  // 将帖子按照是否置顶(pin)和日期排序
  allPosts = allPosts.sort((a, b) => {
    if (a.pin !== b.pin) {
      return (b.pin ? 1 : 0) - (a.pin ? 1 : 0);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    posts: allPosts,
  };
}