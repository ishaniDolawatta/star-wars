import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { API_URL } from "../config";
import { ApiTypes } from "../models/StartWars";

const getPage = (url?: string) => {
  const match = url?.match(/page=(\d+)/);
  return match ? parseInt(match[1]) : undefined;
};

type Page = {
  results: any[];
  next?: string;
  previous?: string;
};

const fetchData = async (type: string, search: string, pageParam: unknown) => {
  const { data } = await axios.get(
    `${API_URL}/${type}?page=${pageParam}&search=${search}`
  );
  return {
    results: data.results,
    next: data.next,
    previous: data.previous,
  };
};

export const useGetStartWarsData = (type: ApiTypes, search: string) => {
  return useInfiniteQuery<Page, Error>({
    queryKey: [type, search],
    queryFn: ({ pageParam = 1 }) => fetchData(type, search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: Page) => getPage(lastPage.next),
  });
};
