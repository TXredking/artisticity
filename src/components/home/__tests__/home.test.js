import React from 'react';
import { shallow } from 'enzyme';
import Home from 'components/home';
import Navbar from 'components/common/Navbar';
import Carousel from 'components/home/Carousel';
import Jumbotron from 'components/home/Jumbotron';
import Gallery from 'components/home/Gallery';
import Footer from 'components/common/Footer';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Home />);
});

it('shows a Navbar',  () => {
    expect(wrapped.find(Navbar).length).toEqual(1);
});

it('shows a Carousel',  () => {
    expect(wrapped.find(Carousel).length).toEqual(1);
});

it('shows a Jumbotron',  () => {
    expect(wrapped.find(Jumbotron).length).toEqual(1);
});

it('shows a Gallery',  () => {
    expect(wrapped.find(Gallery).length).toEqual(1);
});

it('shows a Footer',  () => {
    expect(wrapped.find(Footer).length).toEqual(1);
});
