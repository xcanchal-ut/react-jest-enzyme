import React, { PropTypes } from 'react';
import './checkbox.scss';

const Checkbox = (props) => (
    <div className="checkbox">
        <label>
            <input
                type="checkbox"
                defaultChecked={props.defaultChecked}
                onClick={() => props.onClick()}
            >
            </input>
            {props.label}
        </label>
    </div>
);

Checkbox.propTypes = {
    defaultChecked: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

Checkbox.defaultProps = {
    defaultChecked: false,
    label: 'Check me',
};

export default Checkbox;
