import React from "react";

export default class Banner extends React.PureComponent { //un pur component n'a pas de state mais d props
    render() {
        return <h1>{this.props.content}</h1>
    }
}