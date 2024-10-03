
import Link from "next/link";
export default function Home(){
    return(
        <div>
            <div>
           
            </div>
            <div className="contact">
            <p className="paragraph">We’d love to hear from you!<br/> Whether you have questions,
             feedback, or just want to say hello, feel free to reach out.
             <br/> Our team is here to help!</p>
             <br/>
             
            <p className="inquiry">  For general inquiries,</p>
            <br/>
          <p className="link-para">
  <b>YouTube: </b>
  <p className="link"><Link href={"https://www.youtube.com/@KamranTessorikk"}> https://www.youtube.com/@KamranTessorikk</Link></p> <br/>  
  <b> Twitter:</b> <p className="link"><Link href={"https://twitter.com/KamranTessoriPK"}>https://twitter.com/KamranTessoriPK</Link></p><br/>  
  <b> Instagram: </b><p className="link"><Link href={"https://www.instagram.com/KamranTessoriPK"}>https://www.instagram.com/KamranTessoriPK</Link></p><br/>  
  <b> Facebook Page Link:</b><p className="link"><Link href={" https://www.facebook.com/governorsindhinitiative"}>
   https://www.facebook.com/governorsindhinitiative</Link></p><br/>  
  <b> Email:</b> <p className="link"><Link href={"education@governorsindh.com"}>education@governorsindh.com</Link></p> 
  </p>
        
            </div>
            
         
        </div>
    )
}