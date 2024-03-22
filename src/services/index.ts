"use server";

import request, { gql } from "graphql-request";
export const getCars = async () => {
  const query = gql`
    query CarLists {
      carLists {
        createdAt
        id
        mpg
        name
        price
        publishedAt
        seat
        updatedAt
        carType
        carBrand
        image {
          url
        }
      }
    }
  `;

  const result = await request(process.env.GRAPHQL_URL as string, query);
  return result;
};
