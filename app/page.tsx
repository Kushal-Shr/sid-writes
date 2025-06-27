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
    
      <main className="flex flex-col min-h-screen items-center justify-between p-24">
        {/* about */}

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
          {data.map((post, index) => (
            <Card key={index} className="m-5 p-5 hover:shadow-lg transition-shadow duration-300">
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                width={500}
                height={150}
                className="object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-2">{post.title}</h2>
              <p className="text-gray-600">{post.smallDescription}</p>

              <Button asChild className="mt-4">
                <Link href={`/blog/${post.currentSlug}`}>
                  Read More ...
                </Link>
              </Button>
            </Card>
          ))}
        </div>

      </main>
      
  );
}
