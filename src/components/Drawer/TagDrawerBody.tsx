import { CSSProperties, ReactNode } from "react";

interface TagDrawerBodyProps {
     _class?: string;
    _style?: CSSProperties;
    children?: ReactNode;
    }

const TagDrawerBody = (props:TagDrawerBodyProps) => {
    let TagDrawerBody: string  = `offcanvas-body ${props._class}`;
    return (
      <div className ={TagDrawerBody} style={props._style}>
          {props.children}
      </div>
    )
}
export default TagDrawerBody;