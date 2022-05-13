import { Link } from "react-router-dom";

import Image from "@atoms/Image";
import InputSearch from "@molecules/InputSearch";

import Logo_ML from "@images/Logo_ML.png";

export default function Header() {

  return (
    <>
      <nav className="main-navigation" aria-label="Main navigation">
        <div className="container">
          <Link className="main-navigation__brand" to="/">
            <Image alt="Mercado Libre Logo" width={53} height={36} image={Logo_ML}/>
          </Link>
          <InputSearch />
        </div>
      </nav>
  </>
  );
}