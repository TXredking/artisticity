import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../Navbar';
import Carousel from '../Carousel/Carousel';
import Jumbotron from '../Jumbotron';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
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
