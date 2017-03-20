import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../app/components/Title/';

// Shallow rendering w/snapshot
it('Should render an h1 with the "Apply filter" text', () => {
    const wrapper = shallow(
        <Title title="Apply filter" />
    );
    expect(wrapper).toMatchSnapshot();
});
