import { CSSProperties, ReactNode } from "react";

interface TagMainLayoutProps {
    _class?: string;
    _style?: CSSProperties;
    children?: ReactNode;
}


const TagMainLayout = (props : TagMainLayoutProps) => {  

    return (
        <div className={props._class} style={props._style}>
             {props.children}
        </div>   
    );
}

export default TagMainLayout;