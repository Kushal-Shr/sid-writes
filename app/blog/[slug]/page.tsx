import React from 'react'
import { client } from '@/lib/sanity';

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title, 
      content,
      titleImage
    }
  `

  const data = await client.fetch(query, { slug })
  return data
}

const page = async ({params}: {params: {slug: string}}) => {

    const data = await getData(params.slug);
    console.log(data);
  return (
    <div>
        <h1>
            {data.title}
        </h1>
    </div>

  )
}

export default page
