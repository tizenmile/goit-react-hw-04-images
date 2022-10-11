import React, { useEffect, useState } from "react";
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import axios from 'axios';

export const App = () => {
  const [apiResponse, setApiResponse] = useState([])
  const [search, setSearch] = useState(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '29059571-ec18f33066846ba93eec17670',
        q: search,
        image_type: `photo`,
        orientation: 'horizontal',
        per_page: 12,
        page
      }
    })
      .then(async res => {
        if (search === null || search === '') return
        res.data.hits.length ? setIsError(true) : setIsError(false)
        await setApiResponse((prevState) => ([...prevState, ...res.data.hits]));
      })
      .finally(() => {
        setIsError(false)
        setLoading(false)
      });
  }, [search, page]);


  const searchQuery = async (event) => {
    event.preventDefault()
    setLoading(true)
    setApiResponse('')
    setPage(1)
    await setSearch(event.target.search.value)
  }

  const loadMore = async () => {
    setLoading(true)
    await setPage(prev => (prev += 1))
  }

  return (
    <div>
      <SearchBar searchQuery={searchQuery} />
      {apiResponse.length ? <ImageGallery result={apiResponse} /> : <></>}
      {loading && <Loader />}
      {apiResponse.length || isError ? <Button loadMore={loadMore} /> : <></>}

    </div>
  )

}
