import React from 'react'

export default async function EmployeeIdPage({params}) {
    console.log(await params)
    const {slug} = await params;
  return (
    <div>
      {slug} is the id number
    </div>
  )
}
