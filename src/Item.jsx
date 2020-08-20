import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        show: false,
    };

    showPriceInformation = () => {
        this.setState({show : !this.state.show});
        // this.setState(prevState=> ({show:!prevState}));
    }

    render() {
        return (
            <div>
                <h1>Item</h1>
                <button onClick={this.showPriceInformation} className = "showPrice">Show Price</button>
                {this.state.show && <div className="itemPrice">price</div>}
            </div>
        )
    }
}
