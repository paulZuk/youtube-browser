import React, { Component } from 'react';
import searchYT from 'youtube-search-api-with-axios';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';

const API_KEY = 'AIzaSyCIH-ndr0B_cqK0qDpjdBja_3WGJ_wQCXM'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: ""
        }
    }

    componentDidMount() {

        this.search('');

    }

    search(term) {
        searchYT({key: API_KEY, q: term, maxResults: 5}, (data) => {
            this.setState({
                data
            });
        });
    }

    updateSearchTerm(search) {
        this.setState({
            search
        }, () => {
            this.search(search);
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchBar updateSearchTerm={search => this.updateSearchTerm(search)} />
                </div>
                <div className="row">
                    <VideoPlayer />
                    <VideoList data={data} />
                </div>
            </div>
        )
    }

}