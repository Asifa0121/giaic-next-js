
import Image from "next/image";
import profile from "@/profile.jpg"


export default function Front(){
    return(
<div className="home">
    <div>
        <p className="gov-sindh">Governor Sindh</p>
        <p className="kamran">Kamran Khan Tessori</p>   <br/>
           <p className="giaic">Certified Cloud <br/>Applied Generative AI <br/>Engineer (GenEng)</p>   <br/>
           <p className="earn">Earn up to $5,000 / month <br/>Now admissions are open</p>
           <br/>
           <br/>
           <br/>
        
                  
        
           

</div>
    <div className="Image-kamran">
       
         <Image 
    src={profile} 
    width={900} 
    height={1100} 
    alt="Governor of Sindh" 
/>
        
    </div>
    
</div>




    )
}