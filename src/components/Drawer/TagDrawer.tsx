import { ReactNode } from "react";
interface TagDrawerProps{
    open: boolean;    
    children?: ReactNode;
}

const TagDrawer = (props :TagDrawerProps) => {
    
    
    return (
        <>      
             
        <div 
             className="offcanvas offcanvas-start"  
             tabIndex={-1 } id="offcanvasNavbar" 
             aria-labelledby="offcanvasNavbarLabel">
           {props.children}    
        </div>
   
      {/*props.children*/}
      </>
    )
}
export default TagDrawer;