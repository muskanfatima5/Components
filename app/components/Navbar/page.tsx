import Link from "next/link"

function Navbar(){
    return(
    <div className="text-purple-400 font-bold">
    <Link href="/Pakistan">Pakistan</Link>&nbsp;||&nbsp;
    <Link href="/China">China</Link>&nbsp;||&nbsp;
    <Link href="/India">India</Link>
    </div>
    )
} export default Navbar