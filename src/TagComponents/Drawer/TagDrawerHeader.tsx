import { ReactNode } from "react";

interface TagDrawerHeaderProps{
    children?: ReactNode;
}
const TagDrawerHeader = (props: TagDrawerHeaderProps) => {
    return (
        <div className="offcanvas-header">
            {props.children}
        </div>
    )
}
export default TagDrawerHeader;