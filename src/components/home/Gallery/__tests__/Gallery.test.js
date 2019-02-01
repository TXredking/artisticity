import React from 'react';
import { shallow } from 'enzyme';
import Gallery from 'components/home/Gallery';
import ProfileCard from 'components/home/Gallery/ProfileCard'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Gallery />);
});

it('shows six Profile Cards',  () => {
    expect(wrapped.find(ProfileCard).length).toEqual(6);
});
