import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { filmsAdded, peopleAdded } from "../select/selectSlice";
import { photos } from "../../utils/pictureLinks";

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () => "/api/star-wars/films",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(filmsAdded(data));
      },
    }),
    getPeople: build.query({
      query: () => "/api/star-wars/people",
      transformResponse: (responseData) => {
        return responseData.map((character) => {
          character.image = photos[character.name];
          return character;
        });
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(peopleAdded(data));
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetPeopleQuery } = starWarsApi;
