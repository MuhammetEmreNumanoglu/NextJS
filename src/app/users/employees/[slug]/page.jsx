import React from "react";
import { redirect } from "next/navigation";
export default async function EmployeeIdPage({ params }) {
  console.log(await params);
  const { slug } = await params;
  if( slug != 5) {redirect("/")}
  return <div>
  {slug} is the Id of the employees
  </div>;
}
