import { ReactNode, CSSProperties } from "react";
import { TextColors } from "../../Helpers/TextColors";
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { getBackgroundColor, getColorText, getShadowBox } from "../../Helpers/Utils";
import { Shadows } from "../../Helpers/Shadows";

interface TagMainContainerProps {
    color?: TextColors;
    backgroundColor?: BackgroundColors;
    shadow?: Shadows;
    children?: ReactNode;
    _class?: string;
    _style?: CSSProperties;
}

const TagMainContainer = (props: TagMainContainerProps) => {
    let appTextColor: string = getColorText(props.color);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor);
    let tagShadow: string = getShadowBox(props.shadow)
    let TagMainContainerStyle = `container-fluid ${props._class} ${appTextColor} ${backgroundColor} ${tagShadow}`;

    let combinedStyles: CSSProperties = {
        height: "calc(100vh - 75px)", 
        marginLeft: "310px",
        width: "calc(100% - 310px)", 
        marginTop: "75px",
        ...(props._style || {})
    };
    
    return (
        <div className={TagMainContainerStyle} style={combinedStyles}>
           {props.children}
        </div>
    )
}
export default TagMainContainer;