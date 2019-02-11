import React from 'react';
import { shallow } from 'enzyme';
import Home from 'components/home';
import Carousel from 'components/home/Carousel';
import Gallery from 'components/home/Gallery';
import Jumbotron from 'components/home/Jumbotron';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Home />);
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
