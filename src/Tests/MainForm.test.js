import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainForm from './../Components/MainForm/MainForm';
import Albums from './../Components/MainForm/Albums/Albums';
import Photos from './../Components/MainForm/Photos/Photos';

import Footer from './../Components/Footer/Footer';
configure({adapter : new Adapter()});
var wrapper = ""

beforeEach(()=>{
    wrapper = shallow(<MainForm></MainForm>);
})

describe("<NavBar/>",()=>{
    it("<Home/> SHOULD NOT RENDER THE ALBUMS BY DEFAULT", ()=>{
        expect(wrapper.find(Albums)).toHaveLength(0);
    })
})

describe("<MainForm/>",()=>{
    it("<Home/> SHOULD NOT RENDER THE PHOTOS BY DEFAULT", ()=>{
        expect(wrapper.find(Photos)).toHaveLength(0);
    })
})