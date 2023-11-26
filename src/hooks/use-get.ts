import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiTypes } from "../models/StartWars";
import { getPage } from "../utils/star-wars";
import { API_URL } from "../config";

type Page = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const useGetStarWarsDataById = (id: string, type: ApiTypes) => {
  return useQuery({
    queryKey: [type, id],
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/${type}/${id}`);
      return data;
    },
    staleTime: Infinity,
  });
};
