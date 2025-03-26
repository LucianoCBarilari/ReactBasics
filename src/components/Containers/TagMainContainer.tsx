import { ReactNode, CSSProperties } from "react";

interface TagMainContainerProps {
    children?: ReactNode;
    _class?: string;
    _style?: CSSProperties;
}

const TagMainContainer = (props: TagMainContainerProps) => {
    return (
        <div className={props._class} style={props._style}>
           {props.children}
        </div>
    )
}
export default TagMainContainer;