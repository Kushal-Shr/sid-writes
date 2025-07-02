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

      {/* Best of the Week Section */}
      <div className="w-full max-w-7xl mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-foreground">
            Best of the week
          </h2>
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            See all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          {/* Featured Post - Takes up 2/3 width on large screens */}
          {data[0] && (
            <Card className="lg:col-span-2 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
              <Link href={`/blog/${data[0].currentSlug}`} className="block h-full">
                <div className="relative h-full">
                  <Image
                    src={urlFor(data[0].titleImage).url()}
                    alt={data[0].title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                      {data[0].title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2 mb-4">
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
          <div className="space-y-6">
            {/* Promotional Card */}
            <Card className="bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 p-6 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">ADS</span>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-teal-600 dark:text-teal-300 font-medium">
                  Become A BROADCAST MEMBER
                </div>
                <h4 className="text-lg font-bold text-teal-900 dark:text-teal-100">
                  Real talk in a corporate world
                </h4>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-transparent border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                >
                  Learn more
                </Button>
              </div>
            </Card>

            {/* Second Featured Post */}
            {data[1] && (
              <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <Link href={`/blog/${data[1].currentSlug}`} className="block">
                  <div className="relative h-48">
                    <Image
                      src={urlFor(data[1].titleImage).url()}
                      alt={data[1].title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">24</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-white/90 text-gray-800 hover:bg-white"
                      >
                        See all picks →
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-sm line-clamp-2 text-foreground">
                      {data[1].title}
                    </h4>
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