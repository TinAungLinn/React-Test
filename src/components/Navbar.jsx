import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const nav = useNavigate();

  const [search,setSearch] =useState('');
  
  const formHandler = e => {
    e.preventDefault();
    nav("/search/" + search);
  }

  return (
    <div className=" flex justify-around p-7 shadow rounded-lg">
      <Link to={"/"}>
        <GiKnifeFork className=" text-3xl" />
      </Link>
      <div>
        <form onSubmit={formHandler}>
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" className=" outline-none border-b-2 " />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
