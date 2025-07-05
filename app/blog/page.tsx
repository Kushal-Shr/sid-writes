import { Card } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title, 
      smallDescription,
      "currentSlug": slug.current,
      titleImage,
    }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const data: blogCard[] = await getData();

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-30 text-foreground">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            All <span className="text-accent-foreground">Blog Posts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my thoughts, insights, and experiences through these carefully crafted articles.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((post, index) => (
            <Card key={post.currentSlug} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 h-full">
              <Link href={`/blog/${post.currentSlug}`} className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured badge for first 3 posts */}
                  {index < 3 && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-accent-foreground text-background text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 h-14 leading-tight group-hover:text-accent-foreground transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 h-16 leading-relaxed mb-4">
                    {post.smallDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent-foreground group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-medium">Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* No Posts Message */}
        {data.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <svg className="w-16 h-16 text-muted-foreground mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No blog posts yet</h3>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        )}

        {/* Load More Button (Optional - for pagination) */}
        {data.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {data.length} {data.length === 1 ? 'post' : 'posts'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}