import { CSSProperties, ReactNode } from "react";
import { getOffcanvasPosition, OffcanvasPosition } from "./OffcanvasPosition";
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { getBackgroundColor } from "../../Helpers/Utils";

interface TagDrawerProps{  
    offcanvasPosition?: OffcanvasPosition
    backgroundColor?: BackgroundColors;
    _class?: string;
    _style?: CSSProperties;
    children?: ReactNode;
}

const TagDrawer = (props :TagDrawerProps) => {
    
    let tempPosition :string = getOffcanvasPosition(props.offcanvasPosition);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor);

    let drawerStyle :string = `offcanvas ${props._class} ${tempPosition} ${backgroundColor}`;
    
    return (  
        <div 
             className={drawerStyle} style={props._style}
             tabIndex={-1 } 
             id="offcanvasNavbar" >
           {props.children}    
        </div>
    );
}
export default TagDrawer;