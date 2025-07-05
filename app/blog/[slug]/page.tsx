import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import { notFound } from "next/navigation";

// Define interface for full blog post
interface BlogPost {
  title: string;
  titleImage: any;
  smallDescription: string;
  content: any;
  currentSlug: string;
}

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      smallDescription,
      title, 
      content,
      titleImage
    }
  `;

  const data = await client.fetch(query, { slug });
  return data;
}

async function getRelatedPosts(currentSlug: string) {
  const query = `
    *[_type == "blog" && slug.current != $currentSlug] [0...3] {
      title,
      "currentSlug": slug.current,
      titleImage
    }
  `;

  const data = await client.fetch(query, { currentSlug });
  return data;
}

// Custom components for PortableText
const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8 relative w-full h-96 rounded-lg overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-foreground leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-accent-foreground pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
      <a
        href={value.href}
        className="text-accent-foreground hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="text-foreground">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="text-foreground">{children}</li>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: BlogPost = await getData(params.slug);
  const relatedPosts: blogCard[] = await getRelatedPosts(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={urlFor(data.titleImage).url()}
          alt={data.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
            <Link href="/blog" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {data.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>By Siddhartha Baniya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-12 sm:px-8 md:px-16 lg:px-30">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-foreground">
              <PortableText value={data.content} />
            </div>
          </article>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                Article by Siddhartha Baniya
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Link href="/blog">← More Articles</Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Link href="/contact">Contact Author</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="px-4 py-12 sm:px-8 md:px-16 lg:px-30 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.currentSlug} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <Link href={`/blog/${post.currentSlug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.titleImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 h-14 leading-tight">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}