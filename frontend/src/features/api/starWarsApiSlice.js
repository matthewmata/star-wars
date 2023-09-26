import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { filmsAdded, peopleAdded } from "../select/selectSlice";
import { photos } from "../../utils/pictureLinks";
import { v4 as uuidv4 } from "uuid";

export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/star-wars",
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () => "/films",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(filmsAdded(data));
      },
    }),
    getPeople: build.query({
      query: () => "/people",
      transformResponse: (responseData) => {
        return responseData.map((character, index) => {
          character.image = photos[character.name];
          character.id = uuidv4();
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
