import React from 'react';
import { shallow } from 'enzyme';
import Gallery from 'components/Gallery/Gallery';
import ProfileCard from 'components/Gallery/ProfileCard/ProfileCard'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Gallery />);
});

it('shows six Profile Cards',  () => {
    expect(wrapped.find(ProfileCard).length).toEqual(6);
});
