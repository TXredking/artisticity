import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from 'components/App';
import Home from 'components/home';
import About from 'components/about';
import Contact from 'components/contact';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';

let wrapped;

it('shows a Navbar',  () => {
    wrapped = shallow(<App />);
    expect(wrapped.find(Navbar).length).toEqual(1);
});

it('shows a Footer',  () => {
    wrapped = shallow(<App />);
    expect(wrapped.find(Footer).length).toEqual(1);
});

it('shows the Home app for the root path',  () => {
    wrapped = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    )

    expect(wrapped.find(Home).length).toEqual(1);
});

it('shows the About app for the about path',  () => {
    wrapped = mount(
        <MemoryRouter initialEntries={['/about']}>
            <App />
        </MemoryRouter>
    )

    expect(wrapped.find(About).length).toEqual(1);
});

it('shows the Contact app for the contact path',  () => {
    wrapped = mount(
        <MemoryRouter initialEntries={['/contact']}>
            <App />
        </MemoryRouter>
    )

    expect(wrapped.find(Contact).length).toEqual(1);
});
