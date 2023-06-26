import { FiSearch } from 'react-icons/fi';
import { BtnSearch, SearchFormStyled, SearchField } from './SearhForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
    const [film, setFilm] = useState('');
    const handleChange = (evt) => {
        setFilm(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(film);
        setFilm('');

    }

    return (
        <SearchFormStyled onSubmit={handleSubmit}>
            <SearchField type="text" value={film} onChange={handleChange} />
            <BtnSearch type="submit">
                Search_
                <FiSearch size="16px" />
            </BtnSearch>
        </SearchFormStyled>
    );
};
