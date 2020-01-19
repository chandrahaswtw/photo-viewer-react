import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './../Components/Home/Home';
import NavBar from './../Components/NavBar/NavBar';
import MainForm from './../Components/MainForm/MainForm';

import Footer from './../Components/Footer/Footer';
configure({adapter : new Adapter()});
var wrapper = ""

beforeEach(()=>{
    wrapper = shallow(<Home></Home>);
})

describe("<NavBar/>",()=>{
    it("<Home/> SHOULD RENDER THE NAVBAR", ()=>{
        expect(wrapper.find(NavBar)).toHaveLength(1);
    })
})

describe("<MainForm/>",()=>{
    it("<Home/> SHOULD RENDER THE MAIN FORM", ()=>{
        expect(wrapper.find(MainForm)).toHaveLength(1);
    })
})

describe("<Footer/>",()=>{
    it("<Home/> SHOULD RENDER THE FOOTER", ()=>{
        expect(wrapper.find(Footer)).toHaveLength(1);
    })
})