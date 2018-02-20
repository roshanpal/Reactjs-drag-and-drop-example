import React, { Component } from 'react';
import _ from 'lodash';

export default class Board extends Component {

    state = {
        cards: [
            {
                type: "text",
                value: "some text here"
            }
        ]
    }

    constructor(props) {
        super(props);

        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(e) {
        const card = {type: e.dataTransfer.getData("text"), value:"some value"};
        const temp = this.state.cards;
        temp.push(card);
        this.setState({cards: temp});
    }

    allowDrop(e) {
        e.preventDefault();
    }

    showCards() {
        return _.map(this.state.cards, (card) => {
            return (
                <div style={this.styles.card}>
                    <label>{card.type}</label>
                    <input type="text" />
                </div>
            )
        });
    }

    render() {
        return (
        <div style={this.styles.outerDiv} onDrop={this.onDrop} onDragOver={this.allowDrop}>
            {this.showCards()}
        </div>
        );
    }

    styles = {
        outerDiv: {
            flex: 4,
            border: "1px solid #ccc"
        },
        card: {
            border: "1px solid",
            margin: "25px",
            padding: "25px",
            display: "inline-block"
        }
    }
}