import React from 'react'
import Link from 'next/link';

export default async function SuvChildPage({params,searchParams}) {
    const {slug} = await params;
    const filter = await searchParams;
    console.log(filter)
    console.log(slug);
  return (
    <div>2
      SuvChildPage
      <ul>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div> 
  )
}
