import { CSSProperties, ReactNode } from 'react';
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { Position } from "../../Helpers/Position";
import { TextColors } from "../../Helpers/TextColors";
import { getBackgroundColor, getColorText, getPosition, getShadowBox } from "../../Helpers/Utils";
import { Shadows } from '../../Helpers/Shadows';

interface TagAppBarProps {
    color?: TextColors;
    fixed?: Position;
    backgroundColor?: BackgroundColors;
    shadow?: Shadows;
    _class?: string;
    _style?: CSSProperties;
    children?: ReactNode;
}

const TagAppBar = (props: TagAppBarProps) => {
    let appTextColor: string = getColorText(props.color);
    let appBarFixed: string = getPosition(props.fixed);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor);
    let appBarShadow : string = getShadowBox(props.shadow);

    let appBarStyle: string = `${props._class} ${appTextColor} ${appBarFixed} ${backgroundColor} ${appBarShadow}`;

    return (
        <div className={appBarStyle} style={{ height: "75px" }}>
            {props.children}
        </div>
    );
}

export default TagAppBar;