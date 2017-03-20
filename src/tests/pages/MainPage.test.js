import React from 'react';
import { mount } from 'enzyme';
import MainPage from '../../app/pages/MainPage/';

// PAGE TEST
let wrapper;
beforeEach(() => {
    wrapper = mount(<MainPage />);   
});

// Rendering
it('Should render a Title component, with an h1 inside that contains "Apply filter" (snapshot approach)', () => {
    const Title = wrapper.find('Title');
    expect(Title).toMatchSnapshot(); // initial render
}); 

it('Should render the four filters defined in the page state (traditional approach)', () => {
    const FiltersComponent = wrapper.find('Filters');
    const filters = FiltersComponent.find('li');
    expect(FiltersComponent.prop('filters')).toEqual(wrapper.state().filters);
    expect(filters.length).toEqual(4);
});

// Interaction
it('Should apply the red filter when clicking on the "red" button (snapshot approach)', () => {
    const filterLayer = wrapper.find('.filter-layer');
    const redFilter = wrapper.find('Filters').find('li.red');
    expect(filterLayer).toMatchSnapshot(); // initial unfiltered state (no className)
    redFilter.simulate('click');
    expect(filterLayer).toMatchSnapshot(); // after selecting one filter (className should be 'red')
});

it('Should toggle the checkbox value when clicking it (snapshot approach)', () => {
    const CheckboxComponent = wrapper.find('Checkbox').find('input');
    expect(CheckboxComponent).toMatchSnapshot(); // initial enabled state
    CheckboxComponent.simulate('click');
    expect(CheckboxComponent).toMatchSnapshot(); // after disabling filters
});

it('Should toggle the checkbox value when clicking it (traditional approach)', () => {
     const CheckboxComponent = wrapper.find('Checkbox').find('input');
     expect(CheckboxComponent.prop('defaultChecked')).toBeTruthy(); // initial enabled state
     CheckboxComponent.simulate('click');
     expect(CheckboxComponent.prop('defaultChecked')).toBeFalsy(); // after disabling filters
}); 