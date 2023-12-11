import { Container, FilterItem,} from "./Filter.styled";

export const Filter = ({ onFilter, initValue }) => {
    return (
        <Container>
            <FilterItem>
                <h2>Contacts</h2>
            </FilterItem>
            <FilterItem>
                <label htmlFor="filter">Filter</label>
                <input 
                id="filter"
                name="filter" 
                placeholder="Enter name" 
                value={initValue}
                onChange={ (searchValue) => {onFilter(searchValue)}}/>
            </FilterItem>
        </Container>
    )
};