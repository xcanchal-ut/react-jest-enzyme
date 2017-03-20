import React, { Component } from 'react';
import { find } from 'lodash';
import Title from '../../components/Title';
import Filters from '../../components/Filters/';
import Checkbox from '../../components/Checkbox/';
import './main-page.scss';

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            filters: [
                { text: 'Red', className: 'red' },
                { text: 'Green', className: 'green' },
                { text: 'Blue', className: 'blue' },
                { text: 'Yellow', className: 'yellow' },
            ],
            selectedFilter: {},
            filtersEnabled: true,
        };
        this.selectFilter = this.selectFilter.bind(this);
        this.toggleFiltering = this.toggleFiltering.bind(this);
    }

    selectFilter(className) {
        if (this.state.filtersEnabled) {
            this.setState({ selectedFilter: find(this.state.filters, { className }) });
        }
        return false;
    }

    toggleFiltering() {
        this.setState({ filtersEnabled: !this.state.filtersEnabled });
    }

    render() {
        const { selectedFilter, filtersEnabled } = this.state;

        return (
            <div id="main-page">
                <div className={`filter-layer ${selectedFilter.className}`} />
                <div className="filters-content">
                    <Title title="Apply filter" />
                    <Filters 
                        filters={this.state.filters} 
                        selected={this.state.selectedFilter} 
                        enabled={this.state.enabled}
                        onClick={(className) => this.selectFilter(className)}
                    />
                    <Checkbox
                        defaultChecked={this.state.filtersEnabled}
                        label={`Filters ${this.state.filtersEnabled ? 'enabled' : 'disabled'}`}
                        onClick={this.toggleFiltering}
                    />
                </div>
            </div>
        );
    }
}
