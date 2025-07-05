import { Card } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MainPhoto from "@/components/MainPhoto";

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title, 
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: blogCard[] = await getData();

  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-4 py-12 sm:px-8 md:px-16 lg:px-30 text-foreground">
      <div className="container mx-auto h-full px-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt:8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Writer
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 mb-4">
              Hey, I'm <br /> <span className="text-accent-foreground">Siddhartha Baniya</span>
            </h1>
            <p className="max-w-[600px] mb-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ut ea atque iste laudantium illo explicabo commodi optio quod aspernatur voluptatibus unde sit officiis dolores ullam earum necessitatibus tenetur iure voluptatum fugiat id reprehenderit culpa, cupiditate autem? Officia sit illo ipsum iusto, qui animi possimus?
            </p>
            
            <div className="flex flex-row items-center justify-center xl:justify-start gap-5 mb-9">
              <Button className="bg-accent-foreground text-background hover:bg-transparent hover:text-accent-foreground border-1 hover:border-accent-foreground rounded-4xl p-6">
                <Link href={"/about"}>About Me</Link>
              </Button>
              <Button variant='outline' className="hover:bg-accent-foreground text-accent-foreground hover:text-white border-1 border-accent-foreground rounded-4xl p-6">
                <Link href={"/contact"}>Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-10 xl:mb-0">
            <MainPhoto />
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="w-full max-w-7xl mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Recent Posts
          </h2>
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 self-start sm:self-auto"
          >
            See all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[400px] md:min-h-[500px]">
          {/* Featured Post - Takes up full width on mobile, 2/3 on desktop */}
          {data[0] && (
            <Card className="md:col-span-2 lg:col-span-2 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 h-full">
              <Link href={`/blog/${data[0].currentSlug}`} className="block h-full">
                <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                  <div className="relative h-full group-hover:scale-102 transition-transform duration-500">
                    <Image
                      src={urlFor(data[0].titleImage).url()}
                      alt={data[0].title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-accent-foreground text-background text-xs font-medium rounded-full">
                      Most Recent
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 line-clamp-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2 mb-3 md:mb-4">
                      {data[0].smallDescription}
                    </p>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-white text-sm font-medium">Read Article</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          )}

          {/* Right Column - Smaller Cards */}
          <div className="flex flex-col gap-4 md:gap-6 h-full md:col-span-1 lg:col-span-1">
            {/* Second Featured Post */}
            {data[1] && (
              <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 flex-1 min-h-[200px] md:min-h-[240px]">
                <Link href={`/blog/${data[1].currentSlug}`} className="block h-full">
                  <div className="relative h-full">
                    <div className="relative h-full group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={urlFor(data[1].titleImage).url()}
                        alt={data[1].title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <h4 className="text-white font-semibold text-base md:text-lg line-clamp-2 mb-1 md:mb-2">
                        {data[1].title}
                      </h4>
                      <p className="text-gray-200 text-xs md:text-sm line-clamp-2">
                        {data[1].smallDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            )}

            {/* Third Featured Post */}
            {data[2] && (
              <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 flex-1 min-h-[200px] md:min-h-[240px]">
                <Link href={`/blog/${data[2].currentSlug}`} className="block h-full">
                  <div className="relative h-full">
                    <div className="relative h-full group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={urlFor(data[2].titleImage).url()}
                        alt={data[2].title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <h4 className="text-white font-semibold text-base md:text-lg line-clamp-2 mb-1 md:mb-2">
                        {data[2].title}
                      </h4>
                      <p className="text-gray-200 text-xs md:text-sm line-clamp-2">
                        {data[2].smallDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </div>

    </main>
  );
}