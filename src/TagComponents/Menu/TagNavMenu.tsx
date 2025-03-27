import { ReactNode } from "react";
import { TextColors } from "../../Helpers/TextColors";
import { Position } from "../../Helpers/Position";
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { getBackgroundColor, getColorText, getPosition } from "../../Helpers/Utils";


interface TagNavMenuProps {
    color?: TextColors;
    fixed?: Position;
    backgroundColor?: BackgroundColors;
    _class?: string;
    _style?: React.CSSProperties;
    children?: ReactNode;
}
const TagNavMenu = (props: TagNavMenuProps) => {

    let appTextColor: string = getColorText(props.color);
    let appBarFixed: string = getPosition(props.fixed);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor);

   let navbarStyle = `navbar-nav  ${props._class} ${appTextColor} ${appBarFixed} ${backgroundColor}`;
    return(
        <div className={navbarStyle} style={props._style}>
             {props.children}
        </div>
    );
}
export default TagNavMenu;