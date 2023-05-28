import StyledSearchbar from './Searchbar.component';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ querystring }) => {
  return (
    <StyledSearchbar>
      <StyledSearchbar.Form>
        <StyledSearchbar.Input
          type="text"
          name="query"
          autoFocus
          placeholder="Search films..."
          defaultValue={querystring}
        />
        <StyledSearchbar.Button type="submit">
          <BsSearch />
        </StyledSearchbar.Button>
      </StyledSearchbar.Form>
    </StyledSearchbar>
  );
};

export default Searchbar;
