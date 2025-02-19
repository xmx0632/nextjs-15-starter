import MDXComponents from "@/components/mdx/MDXComponents";
import fs from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

async function getMDXContent(locale: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "about",
    `${locale}.mdx`
  );
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`);
    return "";
  }
}

// export async function generateMetadata() {
//   return {
//     ...siteConfig,
//     title: `About | ${t("title")}`,
//   };
// }

type Params = Promise<{
  locale: string;
}>;

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  const content = await getMDXContent(locale);

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <MDXRemote
        source={content}
        components={MDXComponents}
        options={options}
      />
    </article>
  );
}
