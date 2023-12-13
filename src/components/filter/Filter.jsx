import { Container, FilterItem,} from "./Filter.styled";

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

// export const Filter = ({ onFilter, initValue }) => {
export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filter);
    
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
                value={filter}
                onChange={ (targetValue) => dispatch(changeFilter(targetValue)) }/>
            </FilterItem>
        </Container>
    )
};