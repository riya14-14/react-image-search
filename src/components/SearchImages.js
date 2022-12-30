import { useState, useEffect } from "react";
import axios from "axios";

function SearchImages() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    return axios.get("https://api.unsplash.com/photos/?client_id=VQ2OP-A4M6v6tnc7PlEm5QWEAcgsJDuWZ2amoHG1wZc").then((response) => {
      setImages(response.data);
    });
  };

  useEffect(() => {
    fetchImages();
  }, [images]);

  return images;
}

function LoadImage(query) {
  const [state, setState] = useState([]);

  const Search = () => {
    return axios.get("https://api.unsplash.com/search/photos?query=" + query + "&client_id=VQ2OP-A4M6v6tnc7PlEm5QWEAcgsJDuWZ2amoHG1wZc").then((response) => {
      setState(response.data.results);
    });
  };

  useEffect(() => {
    Search();
  }, [query]);

  return state;
}

export { SearchImages, LoadImage };
