import React, { Fragment } from "react";
import "./styles.scss";

interface Props {
    children: any
}

const Layout = (props: Props) => {
    return <Fragment>{props.children}</Fragment>;
};

export default Layout;
