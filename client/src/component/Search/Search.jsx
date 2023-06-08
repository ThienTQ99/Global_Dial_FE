import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchComponent = () => {
  return (
    <Search className=" hidden lg:block" placeholder="Search here..." onSearch={onSearch} enterButton />
  );
};

export default SearchComponent;
