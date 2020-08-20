import React, { Component } from 'react'
import Item from "./Item"

export default class AllItem extends Component {
    state = {
        items: []
    }
    render() {
        return (
            <div className="AllItem">
                <div>All Items</div>
                {
                    this.state.items.map((item,i)=>(
                        <Item key={i} item={item} />
                    ))
                }
            </div>
        )
    }
}
