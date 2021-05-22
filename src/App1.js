import React, { Component } from 'react'

export default class App1 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("called component did mount");
    }

    render() {
        return (
            <div>
                <p>hi</p>
            </div>
        )
    }
}
