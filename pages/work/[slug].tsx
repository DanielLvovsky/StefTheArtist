import * as React from "react";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import a11yEmoji from "@fec/remark-a11y-emoji";
import remarkMark from "remark-mark-plus";
import remarkSlug from "remark-slug";
import Link from "next/link";

import { Post } from "interfaces";
import { Image, SiteFooter, SiteHeader } from "components";
import { BlogFooter, ContentTable, ReadTime } from "components/Blog";
import { Article } from "components/Article";
import { getPosts, getPostBySlug } from "scripts/postsApi";
import { useInView } from "scripts";

const components = {
  ContentTable,
  Image,
};

const Main = styled.main`
  padding: 1.5em 0 2em;
`;
const ArticleHeader = styled.div`
  transition: opacity 1s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & a {
    border-radius: 3px;
    color: rgb(111, 111, 121);
    display: block;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    padding: 0.2em;
    width: fit-content;

    &:hover,
    &:focus {
      background-color: #f4f4f4;
      color: #777;
    }
    &:active {
      background-color: #e8e8e8;
    }
  }
`;

const Header = styled.div`
  & .post-thumbnail {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    width: 100%;

    & > .image-container {
      transition: transform 0.5s ease-out;
      & * {
        max-width: 100%;
        min-height: 160px;
      }
    }
  }
  & .post-tags {
    align-items: center;
    color: var(--color-blog-text-header);
    font-size: 16px;
    margin-top: 14px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;

    & > span {
      display: inline-block;
      margin-top: 6px;
    }

    & .post-date {
      color: var(--color-blog-text-secondary);
      margin-right: 1em;
    }
    & .post-category {
      margin-right: 1em;
    }
  }
  & .post-title {
    font-size: clamp(25px, 8vw, 72px);
    line-height: calc(2px + 2ex + 2px);
    max-width: 100%;
    margin: 0;
  }
  & .post-sub-title {
    line-height: calc(2px + 2ex + 2px);
    font-size: clamp(18px, 5vw, 25px);
    max-width: 100%;
    margin: 1em 0 0;
  }
`;

interface BlogPostProps {
  source: any;
  post: Post;
  slug: string;
}
const BlogPost: React.FC<BlogPostProps> = ({ source, post, slug }) => {
  const content = hydrate(source, { components });
  const {
    title,
    subTitle,
    description,
    thumbnail,
    thumbnailAlt = "Article thumbnail",
    date,
    category,
    readTime,
  } = post || {};

  const { visible, ref } = useInView();

  return (
    <>
      <NextSeo
        title={title || "StefTheArtist - Work"}
        canonical={`https://steftheartist.com/work/${slug}`}
        openGraph={{
          url: `https://steftheartist.com/work/${slug}`,
          title: title || "StefTheArtist - Work",
          description:
            description || subTitle || "Personal site, showcase and portfolio of StefTheArtist.",
          type: "work",
          ...(thumbnail
            ? {
                images: [
                  {
                    url: `https://steftheartist.com/images/${thumbnail}`,
                    width: 1440,
                    height: 400,
                    alt: title || "StefTheArtist - Illustrator",
                  },
                ],
              }
            : {}),
        }}
      />

      <SiteHeader />

      <Main>
        <ArticleHeader data-fix-width data-visible={visible}>
          <Link href="/work">
            <a href="/work">Back to projects</a>
          </Link>
        </ArticleHeader>
        {post && (
          <Article ref={ref} data-visible={visible}>
            <Header className="article-header">
              <div data-fix-width>
                <h1 className="post-title">{title}</h1>
                {subTitle && <h2 className="post-sub-title">{subTitle}</h2>}
                <div className="post-tags">
                  <span className="post-date">{date}</span>
                  {category && (
                    <span className="post-category" data-font-weight={500}>
                      {category}
                    </span>
                  )}
                  <ReadTime readTime={readTime} />
                </div>
                {thumbnail && (
                  <div className="post-thumbnail">
                    <Image src={thumbnail} alt={thumbnailAlt} width={1440} height={400} priority />
                  </div>
                )}
              </div>
            </Header>
            <div className="article-body">{content}</div>
          </Article>
        )}
        <BlogFooter />
      </Main>

      <SiteFooter />
    </>
  );
};

export async function getStaticPaths() {
  const posts = getPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slug) return null;

  const post = getPostBySlug(slug, [
    "slug",
    "link",
    "content",
    "title",
    "subTitle",
    "date",
    "thumbnail",
    "thumbnailAlt",
    "description",
    "date",
    "readTime",
    "category",
  ]);
  if (!post) return null;

  const mdxSource = await renderToString(post.content, {
    components,
    mdxOptions: { remarkPlugins: [remarkSlug, remarkMark, a11yEmoji] },
  });
  return { props: { source: mdxSource, post, slug } };
}

export default BlogPost;
