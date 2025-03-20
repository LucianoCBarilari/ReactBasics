import { ReactNode } from 'react';
import { BackgroundColors } from "../../Helpers/BackgroundColors";
import { Position } from "../../Helpers/Position";
import { TextColors } from "../../Helpers/TextColors";
import { getBackgroundColor, getColorText, getPosition } from "../../Helpers/Utils";

interface TagAppBarProps {
    color?: TextColors;
    fixed?: Position;
    backgroundColor?: BackgroundColors;
    children?: ReactNode; // Añadir children a las props
}

const TagAppBar = (props: TagAppBarProps) => {
    let appBarColor: string = getColorText(props.color ?? TextColors.Primary);
    let appBarFixed: string = getPosition(props.fixed ?? Position.FixedTop);
    let backgroundColor: string = getBackgroundColor(props.backgroundColor ?? BackgroundColors.Light);

    const appBarStyle: string = `app-bar ${appBarColor} ${appBarFixed} ${backgroundColor}`;

    return (
        <div className={appBarStyle} style={{ height: "75px" }}>
            {props.children} {/* Renderizar los children aquí */}
        </div>
    );
}

export default TagAppBar;