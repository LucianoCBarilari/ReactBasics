import { CSSProperties, ReactNode } from 'react';
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { Position } from "../../Helpers/Position";
import { TextColors } from "../../Helpers/TextColors";
import { getBackgroundColor, getColorText, getPosition } from "../../Helpers/Utils";

interface TagAppBarProps {
    color?: TextColors;
    fixed?: Position;
    backgroundColor?: BackgroundColors;
    _class?: string;
    _style?: CSSProperties;
    children?: ReactNode;
}

const TagAppBar = (props: TagAppBarProps) => {
    let appTextColor: string = getColorText(props.color);
    let appBarFixed: string = getPosition(props.fixed);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor);

    let appBarStyle: string = `${props._class} ${appTextColor} ${appBarFixed} ${backgroundColor}`;

    return (
        <div className={appBarStyle} style={{ height: "75px" }}>
            {props.children}
        </div>
    );
}

export default TagAppBar;