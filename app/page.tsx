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
  

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-5 text-foreground">
    {data.map((post, index) => (
      <Card
        key={index}
        className="flex flex-col m-2 p-4 hover:shadow-lg transition-shadow duration-300"
      >
        <Image
          src={urlFor(post.titleImage).url()}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-lg md:text-xl font-bold mt-3">{post.title}</h2>
        <p className="text-sm md:text-base text-gray-600 mt-1">{post.smallDescription}</p>

        <Button asChild className="mt-4 self-start">
          <Link href={`/blog/${post.currentSlug}`}>Read More ...</Link>
        </Button>
      </Card>
    ))}
  </div>
</main>

      
  );
}
