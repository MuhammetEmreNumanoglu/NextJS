'use client'
import { useRouter } from "next/navigation"
export default function BlogPage(){
    const router = useRouter();
    const redirectPage = ()=>{
        router.push("/")
    }
    return (
        <>
        <div>
            <h1>
                <button onClick={redirectPage}>Home</button>
                
            </h1>
        </div>
        </>
    )
}
