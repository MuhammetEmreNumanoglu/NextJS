import React from 'react'

export default async function SuvChildPage({params}) {
    const {slug} = await params;
    console.log(slug);
  return (
    <div>2
      SuvChildPage
    </div>
  )
}
