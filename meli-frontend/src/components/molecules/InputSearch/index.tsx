import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Image from "@atoms/Image";
import Button from "@atoms/Button";
import Input from "@atoms/Input";

import ic_Search from "@images/ic_Search.png";

export default function InputSearch() {
  const [ searchInput, setSearchInput ] = useState('');
  const navigate = useNavigate();

  // WHEN FORM SUBMIT URL THE INPUT SERACH IS CAPTURED IN URL AND NAVIGATE TO THIS ROUTE
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchInput != '') navigate(`/items?search=${decodeURI(searchInput)}`);
    else navigate('/');
  }

  return (
    <>
      <form className="main-navigation__form" onSubmit={handleSubmit}>
        <div className="main-navigation__input-group">
          <Input
            type="text"
            name="search"
            placeholder="Buscar productos, marcas y más…"
            onChange={(e: any) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <Button type="submit" id="button-search"> 
            <Image alt="Buscar icono" width={18} height={18} image={ic_Search}/>
          </Button>
        </div>
      </form>
    </>
  );
}