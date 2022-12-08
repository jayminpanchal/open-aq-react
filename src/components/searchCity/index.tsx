import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Search, SearchProps } from "semantic-ui-react";
import useDebounce from "../../hooks/useDebounce";
import { getSearchCity } from "../../store/actions";
import { getIsLoading } from "../../store/selectors";
import { Props } from "./interface";

const SearchCity: FunctionComponent<Props> = (props) => {
  const { cityIndex } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading(cityIndex));
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getSearchCity(debouncedSearchTerm, cityIndex));
    }
  }, [debouncedSearchTerm, dispatch, cityIndex]);

  function handleSearch(
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    data: SearchProps
  ) {
    setSearchQuery(data.value || "");
  }

  return (
    <Search
      loading={isLoading}
      placeholder="Search city..."
      onSearchChange={handleSearch}
      size="large"
      showNoResults={false}
    />
  );
};

export default SearchCity;
