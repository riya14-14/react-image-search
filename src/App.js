import { useState } from "react";
import "./App.css";
import Images from "./components/Images";
import { LoadImage, SearchImages } from "./components/SearchImages";
import { DebounceInput } from "react-debounce-input";

function App() {
  const data = SearchImages();
  const [searchQ, setSearch] = useState([]);

  const searchData = LoadImage(searchQ);

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="header">
          <h1>Photo Gallery Search</h1>
        </div>
        <div className="mt-3">
          <DebounceInput
            className="searchbox"
            placeholder="Search any photos"
            minLength={3}
            debounceTimeout={300}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></DebounceInput>
        </div>
      </div>

      <div className="prodetails">
        {searchQ.length === 0 ? <h2 style={{ color: "red" }}>No images found</h2> : null}
        {searchData.map((img, key) => {
          return <Images src={img.urls.small} key={key} alt="" />;
        })}
      </div>
    </div>
  );
}

export default App;
