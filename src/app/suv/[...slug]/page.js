import React from 'react'

export default async function SuvChildPage({params,searchParams}) {
    const {slug} = await params;
    console.log(await searchParams)
    console.log(slug);
  return (
    <div>2
      SuvChildPage
    </div>
  )
}
