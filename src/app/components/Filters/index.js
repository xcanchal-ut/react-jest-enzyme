import React, { PropTypes } from 'react';
import './filters.scss';

const Filters = (props) => (
    <ul className="filters">
        {props.filters.map((filter) => (
            <li
                key={filter.className}
                className={`${filter.className} ${props.selected.className === filter.className ? 'selected' : ''} ${props.enabled ? '' : 'disabled'}`}
                onClick={() => props.onClick(filter.className)}
            >
                {filter.text}
            </li>
        ))}
    </ul>
);

Filters.propTypes = {
    filters: PropTypes.array.isRequired,
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.object,
};

Filters.defaultProps = {
    filters: [],
    enabled: true,
    onClick: () => false,
};

export default Filters;
