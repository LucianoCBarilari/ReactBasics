import { NavLink } from "react-router-dom";

interface TagNavLinkProps {
    _class?: string;
    _style?: React.CSSProperties;
    children?: React.ReactNode;
    href: string;
    title?: string;

}

const TagNavLink = (props: TagNavLinkProps) => {

    let tagNavLinkStyle = `nav-item`;
    let tabNavLinkStyle = `nav-link ${props._class}`;
    return (
        <div className={tagNavLinkStyle} style={props._style}>
            <NavLink className={tabNavLinkStyle} to={props.href} title={props.title}>
                {props.children}
            </NavLink>
        </div>        
    );
}
export default TagNavLink;