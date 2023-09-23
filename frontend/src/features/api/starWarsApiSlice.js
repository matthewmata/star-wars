import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () => "/api/star-wars/films",
    }),
    getPeople: build.query({
      query: () => "/api/star-wars/people",
    }),
  }),
});

export const { useGetFilmsQuery, useGetPeopleQuery } = starWarsApi;
