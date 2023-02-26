import React from 'react';
import { ReactNode } from 'react';

interface SearchFormProps {
  children: ReactNode;
}

const SearchForm = ({ children }: SearchFormProps) => {
  return <form>{children}</form>;
};

export default SearchForm;
