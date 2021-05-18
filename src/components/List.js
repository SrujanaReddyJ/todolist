import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                <ul>
            {this.props.listItems.map((data, index) => (
            <li>{data}</li>
            ))}
            </ul>
            </div>
        )
    }
}

export default List
