import { Form, Formik } from "formik";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import { debounce } from "underscore";

interface ISearchProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconColor?: string;
}

const Search: React.FC<ISearchProps> = (props) => {
  const { onSearch, placeholder = "Search here..." } = props;
  const [params, setParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(params.get("q") ?? "");

  useEffect(() => {
    const q = params.get("q") as string;
    if (q !== searchInput) {
      setSearchInput(q);
    }
  }, [params]);

  const handleSubmit = (data: Record<string, string>) => {
    const value = data.search;
    setSearchInput(value);
    setParams((prev) => {
      const oldPrev = new URLSearchParams(prev);
      oldPrev.set("q", value);
      return oldPrev;
    });
    if (onSearch) {
      onSearch(value);
    }
  };

  const onChange = useRef(
    debounce(
      (
        e: ChangeEvent<HTMLInputElement>,
        setSearchParam: SetURLSearchParams
      ) => {
        if (!e.target.value) {
          /**/
        }
        setSearchParam((prev) => {
          const oldPrev = new URLSearchParams(prev);
          oldPrev.delete("q");
          return oldPrev;
        });
      },
      500
    )
  ).current;

  const initialValues = {
    search: searchInput,
  };

  return (
    <div className="relative">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <>
            <Form className="w-full relative">
              <input
                type="search"
                placeholder={placeholder}
                name="search"
                value={formik.values.search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  onChange(e, setParams);
                  formik.handleChange(e);
                }}
                className="px-8 !rounded-md !w-full !py-[10px] placeholder:text-xs bg-[#F9FAFB] text-sm !focus:bg-transparent text-gray-500 !border-none outline-none"
              />
              <FaSearch className="absolute top-3 text-[#5D5FEF] left-2 text-sm" />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Search;
