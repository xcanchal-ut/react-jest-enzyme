import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../../app/components/Filters/';

// COMPONENT TEST
const props = {
    filters: [
        { text: 'Red', className: 'red' },
        { text: 'Green', className: 'green' },
        { text: 'Blue', className: 'blue' },
        { text: 'Yellow', className: 'yellow' },
    ],
    enabled: true,
    selected: { text: 'Red', className: 'red' },
    onClick: () => false,
}

// Rendering
it('Should render a list of four filters with "red" as default selected (traditional approach)', () => {
    const wrapper = shallow(
        <Filters {...props} />
    );
    const filters = wrapper.find('li');
    const selectedFilter = wrapper.find('.selected.red');
    expect(filters.length).toEqual(4);
    expect(selectedFilter.length).toBe(1);
});