import { Card } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    
      <main className="flex flex-col min-h-screen items-center justify-between px-4 py-12 sm:px-8 md:px-16 lg:px-30">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt:8 xl:pb-24">
              <div className="text-center xl:text-left">
                <span>
                  Writer
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 mb-4">
                  Hey, I'm <br /> <span>Siddhartha Baniya</span>
                </h1>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate tempore laboriosam esse sit nesciunt natus, delectus dolorem eum inventore eius cumque explicabo nostrum, eaque voluptatem minima expedita dolores quas! Autem?
                </p>
              </div>
              <div>
                image
              </div>
            </div>
        </div>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-5">
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
