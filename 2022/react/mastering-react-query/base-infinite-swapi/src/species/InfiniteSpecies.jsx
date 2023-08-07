import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from 'react-query';

import { Species } from "./Species";

const initialUrl = "https://swapi.dev/api/species/";

const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const { data, fetchNextPage, isLoading, isFetching, hasNextPage, isError } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl}) => fetchUrl(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next
      }
    }
    );

    if(isLoading) return <div className="loading">Loading species...</div>
    if(isError) return <div>Error trying to get species...</div>
  
  return (
    <>
    {isFetching && <div className="loading">Loading species...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map(pageData => {
          return pageData.results.map(specie => {
            return (
              <Species  
                averageLifespan={specie.average_lifespan}
                language={specie.language}
                name={specie.name}
                key={specie.name}
              />
            )
          })
        })}
      </InfiniteScroll>
    </>
  )
}
