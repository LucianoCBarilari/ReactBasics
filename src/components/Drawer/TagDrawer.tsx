import { ReactNode } from "react";
import { getOffcanvasPosition, OffcanvasPosition } from "./OffcanvasPosition";
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { getBackgroundColor } from "../../Helpers/Utils";

interface TagDrawerProps{
    open: boolean;    
    offcanvasPosition?: OffcanvasPosition
    backgroundColor?: BackgroundColors;
    children?: ReactNode;
}

const TagDrawer = (props :TagDrawerProps) => {
    
    let tempPosition :string = getOffcanvasPosition(props.offcanvasPosition ?? OffcanvasPosition.offcanvasStart);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor ?? BackgroundColors.Light);

    let drawerStyle :string = `offcanvas ${tempPosition} ${backgroundColor}`;
    
    return (  
        <div 
             className={drawerStyle}  
             tabIndex={-1 } id="offcanvasNavbar" 
             aria-labelledby="offcanvasNavbarLabel">
           {props.children}    
        </div>
    );
}
export default TagDrawer;