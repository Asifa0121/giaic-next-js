import Link from "next/link"

export default function Footer(){
    return(
        <div className="footer">
            
           <div className="footer-section">
            
            <ul className="footer-list">
          <Link href={"https://www.google.com/maps/dir//location+of+sindh+governor+house/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3eb33e75a28531d1:0x412558657f5ff4a8?sa=X&ved=1t:3061&ictx=111"}><li>location</li></Link>
                <Link href={"https://www.facebook.com/TeamKTessori/"}> <li>Facebook</li></Link>
               <Link href={"https://www.instagram.com/kamrantessoripk/?hl=en"}>  <li>Instagram</li></Link>
              
            </ul>
           </div>
        </div>
    )
}