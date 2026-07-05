import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          {" "}
          <Link href={"/users/employees/1"}>User</Link>
        </li>
        <li>
          {" "}
          <Link href={"/suv"}>Suv</Link>
        </li>
      </ul>
    </div>
  );
}
