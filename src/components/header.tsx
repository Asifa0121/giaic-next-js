import Link from "next/link"
export default function Header(){
    return (
<div className="Header">
    
    <ul className="header-button">
    <div className="status">Tuition Free Education Program on Latest Technologies</div>
    <Link href={"/"}><li>Home</li></Link>

        <Link href={"/about-us"}> <li>About us</li></Link>
       <Link href={"/contact-us"}><li>Contact us</li></Link>
        <Link href={"/jobs"}> <li>Jobs</li></Link>
       
    </ul>
    <br/>
  

   
</div>


    )
}