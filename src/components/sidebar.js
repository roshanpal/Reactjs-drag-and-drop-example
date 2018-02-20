import React, { Component } from 'react';

export default class Sidebar extends Component {

    drag(e, param = "") {
        e.dataTransfer.setData("text", param);
    }

    render() {
        const styles = this.styles;
        return (
        <div style={styles.outerDiv}>
            <span style={styles.span} onDragStart={e => { this.drag(e, "text") }} draggable="true">Text</span>
            <span style={styles.span} onDragStart={e => { this.drag(e, "video") }} draggable="true">Video</span>
            <span style={styles.span} onDragStart={e => { this.drag(e, "audio") }} draggable="true">Audio</span>   
        </div>
        );
    }

    styles = {
        outerDiv: {
            flex: 1,
            border: "1px solid #ccc"
        },
        span: {
            display: "block",
            margin: "20px",
            border: "1px solid"
        }
    }

}