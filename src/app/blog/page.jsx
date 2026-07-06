'use client'
import styles from "./styles.module.css"
import { useRouter } from "next/navigation"
export default function BlogPage(){
    const router = useRouter();
    const redirectPage = ()=>{
        router.push("/")
    }
    return (
        <>
        <div>
            <h1 className={styles.blue}>
                Blog Page
                <button  onClick={redirectPage}>Home</button>
                
            </h1>
        </div>
        </>
    )
}
