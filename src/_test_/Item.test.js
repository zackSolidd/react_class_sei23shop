import React from "react"
import {shallow} from "enzyme"
import Item from "../Item"

describe("<Item /> check", ()=>{
    let ItemWrapper;

    beforeAll(()=>{
        ItemWrapper = shallow(<Item item={{imgurl: "https://sg-test-11.slatic.net/p/mdc/862ffe45ece925628e4a1d6c52374ceb.png",
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
});