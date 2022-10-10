import React, { Component } from "react";
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import axios from 'axios';

export class App extends Component {
  state = {
    apiResponse: [],
    search: null,
    page: 1,
    loading: false,
    isError: false
  }

  fetchFromPixabay = async () => {
    axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '29059571-ec18f33066846ba93eec17670',
        q: this.state.search,
        image_type: `photo`,
        orientation: 'horizontal',
        per_page: 12,
        page: this.state.page
      }
    })
      .then(async res => {
        res.data.hits.length ? this.setState({ isError: true }) : this.setState({ isError: false })
        await this.setState((prevState) => ({
          apiResponse: [...prevState.apiResponse, ...res.data.hits]
        }));
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }


  searchQuery = async (event) => {
    event.preventDefault()
    this.setState({ loading: true, apiResponse: '' })
    await this.setState({ search: event.target.search.value })
    await this.fetchFromPixabay()
  }

  loadMore = async () => {
    this.setState({ loading: true })
    await this.setState(prev => ({ page: prev.page += 1 }))
    await this.fetchFromPixabay()
  }
  render() {
    return (
      <div>
        <SearchBar searchQuery={this.searchQuery} />
        {this.state.apiResponse.length ? <ImageGallery result={this.state.apiResponse} /> : <></>}
        {this.state.loading && <Loader />}
        {this.state.apiResponse.length || this.state.isError ? <Button loadMore={this.loadMore} /> : <></>}

      </div>
    )
  }
}
