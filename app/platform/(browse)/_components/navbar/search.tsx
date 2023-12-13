"use client";

import React, { useState } from "react";
import qs from "query-string";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const debounce = (fn: any, delay: number) => {
    let timeoutId: any;

    return function (...args: any) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedSearch = debounce((searchTerm: any) => {
    const url = qs.stringifyUrl(
      {
        url: "/platform/search",
        query: { term: searchTerm },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  }, 500);

  const onSearchChange = (e: any) => {
    const searchTerm = e.target.value;

    setValue(searchTerm);
    debouncedSearch(searchTerm);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/platform/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url); // ? example: localhost:3000?term=value
  };

  const onClear = () => setValue("");

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full flex items-center lg:w-[400px]"
    >
      <Input
        value={value}
        onChange={onSearchChange}
        placeholder="Search..."
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          onClick={onClear}
          className="absolute top-3 right-14 h-4 w-4 text-muted-foreground cursor-pointer hover:opacity-75 transition"
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
