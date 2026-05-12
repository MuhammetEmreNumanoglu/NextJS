
import dbConnect from "@/util/dbConnect"

const handle = async (req,res)=>{
    res.status(200).json({message:"hello"})
    await dbConnect()
}
export default handle