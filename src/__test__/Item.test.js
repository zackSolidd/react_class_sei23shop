import React from "react"
import {shallow, mount} from "enzyme"
import Item from "../Item"

describe("<Item /> check", ()=>{
    let ItemWrapper;

    beforeAll(()=>{
        ItemWrapper = mount(<Item item={{imgurl: "https://sg-test-11.slatic.net/p/mdc/862ffe45ece925628e4a1d6c52374ceb.png",
        name: "coffee beans",
        price: 350
        }} 
        />
        );
    });

    beforeEach(()=> {
        ItemWrapper.setState({ show: false});
    });

    test("simulate true click", ()=> {
        ItemWrapper.find(".showPrice").simulate("click");
        expect(ItemWrapper.find(".itemPrice")).toHaveLength(1)
    });

    test("simulate false click", ()=> {
        ItemWrapper.setState({show: true});

        ItemWrapper.find(".showPrice").simulate("click");
        expect(ItemWrapper.find(".itemPrice")).toHaveLength(0);
    });

    test("check if price is equal to price from props", ()=>{
        ItemWrapper.find(".showPrice").simulate("click");

        let price = ItemWrapper.prop("item").price
        //check whats in the div with class .itemPrice
        expect(Number(ItemWrapper.find(".itemPrice").text())).toBe(price);
    })
});