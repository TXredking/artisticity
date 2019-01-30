import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../Gallery';
import ProfileCard from '../ProfileCard/ProfileCard'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Gallery />);
});

it('shows six Profile Cards',  () => {
    expect(wrapped.find(ProfileCard).length).toEqual(6);
});
