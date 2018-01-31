import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }
    }

    onChangeEvent(e) {

        this.setState({
            search: e.target.value
        }, () => {
            this.props.updateSearchTerm(this.state.search)
        });
    }

    render() {
        return (
            <input 
                type="text"
                className="col-sm-8"
                style={{
                    margin: '20px 0'
                }}
                onChange={e => this.onChangeEvent(e)}
                value={this.state.search}
            />
        )
    }
}