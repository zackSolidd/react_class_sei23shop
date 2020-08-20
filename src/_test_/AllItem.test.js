import React from "react"
import {shallow} from "enzyme"
import AllItem from "../AllItem"
import Item from "../Item"

describe("<AllItem /> tests", () => {

    let AllItemWrapper;
    beforeAll(()=> {
        AllItemWrapper = shallow(<AllItem />);
    });

    test("Check if there is a class of .AllItem", () => {

    });
    test("state returns the correct things", () => {
        //this.state()
        AllItemWrapper.setState({
            items :[{},{},{},{}]
        })
        expect(AllItemWrapper.find(Item)).toHaveLength(4);
    });
    test("state returns the correct things", () => {
        AllItemWrapper.setState({
            items :[{},{},{}]
        })
        expect(AllItemWrapper.find(Item)).toHaveLength(3);
    });

});