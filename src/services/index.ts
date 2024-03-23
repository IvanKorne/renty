"use server";

import request, { gql } from "graphql-request";
export const getCars = async () => {
  const query = gql`
    query CarLists {
      carLists(first: 100) {
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

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storeLocations {
        address
      }
    }
  `;

  const result = await request(process.env.GRAPHQL_URL as string, query);
  return result;
};

export const createBooking = async ({ formValues }: any) => {
  const contact = formValues?.contact;

  const id = formValues?.carId?.connect?.id;
  const pTime = formValues?.pickupTime;
  const pDate = formValues?.pickupDate;
  const dTime = formValues?.dropoffTime;
  const dDate = formValues?.dropoffDate;
  const location = formValues?.location;
  const mutationQuery =
    gql`
    mutation MyMutation {
      createBooking(
        data: {
          contact: "` +
    contact +
    `"
          dropoffDate: "` +
    dDate +
    `"
          dropoffTime: "` +
    dTime +
    `"
          location: "` +
    location +
    `"
          pickupDate: "` +
    pDate +
    `"
          pickupTime: "` +
    pTime +
    `"
          carId: { connect: { id: "` +
    id +
    `" } }
        }
      ) {
        id
      }
    }
  `;
  const result = await request(
    process.env.GRAPHQL_URL as string,
    mutationQuery
  );
  return result;
};
