// Posts.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchString,
  setCurrentPage,
  setSearchResults,
  setLastPage,
} from "../redux/Action";
import ChakraCard from "./ChakraCard";
import { Button, Input } from "@chakra-ui/react";
import Lottie from "lottie-react";
import LoadingLot from "../lottieFiles/LoadingLot.json";

const defaultThumbnail =
  "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png";

function Posts() {
  const searchString = useSelector((state) => state.searchString);
  const currentPage = useSelector((state) => state.currentPage);
  const lastPage = useSelector((state) => state.lastPage);
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from the API based on the Redux state
    const fetchData = async () => {
      try {
        const query = searchString ? `q=${searchString}&` : "";
        const response = await fetch(
          `https://content.guardianapis.com/search?api-key=test&${query}show-fields=thumbnail,headline&page=${currentPage}&page-size=15`
        );
        const data = await response.json();
        // Update Redux state
        dispatch(setSearchResults(data.response.results));
        dispatch(setLastPage(Math.ceil(data.response.pages)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchString, currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchString(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Reset to the first page when a new search is submitted
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      {searchResults ? (
        <>
          <div>
            <form
              onSubmit={handleSearchSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <input
          type="text"
          placeholder="Search for posts"
          value={searchString}
          onChange={handleSearchChange}
        /> */}

              <Input
                variant="flushed"
                placeholder="Search for Posts / Article"
                width={"50%"}
                value={searchString}
                onChange={handleSearchChange}
                type="text"
              />
              <Button colorScheme="green" type="submit" marginLeft={29}>
                Search
              </Button>
            </form>
            <div
              style={{
                borderColor: "black",
                borderWidth: 4,
                margin: 17,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  style={{
                    borderColor: "black",
                    borderWidth: 2,
                    margin: 17,
                    width: "45%",
                  }}
                >
                  <a
                    href={result.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ChakraCard
                      ImageSrc={result.fields.thumbnail || defaultThumbnail}
                      Heading={result.webTitle}
                      Text={result.fields.headline}
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  margin: 9,
                }}
                colorScheme={currentPage === 1 ? "gray" : "orange"}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                {"<<"}
              </Button>
              <Button
                style={{
                  margin: 9,
                }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                colorScheme={currentPage === 1 ? "gray" : "orange"}
              >
                {"<"}
              </Button>
              {/* {[...Array(10).keys()].map((number) => ( */}
              <Button
                colorScheme="cyan"
                style={{
                  margin: 9,
                }}
                // key={number}
                // onClick={() => handlePageChange(number + currentPage)}
              >
                {currentPage}
              </Button>
              {/* ))} */}
              <Button
                style={{
                  margin: 9,
                }}
                colorScheme={currentPage === lastPage ? "gray" : "orange"}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
              >
                {">"}
              </Button>
              <Button
                style={{
                  margin: 9,
                }}
                onClick={() => handlePageChange(lastPage)}
                disabled={currentPage === lastPage}
                colorScheme={currentPage === lastPage ? "gray" : "orange"}
              >
                {">>"}
              </Button>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              marginLeft: "25%",
              height: "40%",
              width: "40%",
            }}
          >
            <Lottie animationData={LoadingLot} loop={true} autoplay />
          </div>
        </>
      )}
    </>
  );
}

export default Posts;
