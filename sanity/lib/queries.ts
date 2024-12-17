import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "homeServices"]{ _id, title, body, button_text, button_link, image, socialAltText }
`);

export const HOME_ABOUT_QUERY =
  defineQuery(`*[_type == "homepageAbout"]{ _id, title, body, socialAltText, socialLinks }
`);

export const ABOUT_QUERY =
  defineQuery(`*[_type == "aboutPage"]{ _id, title, description, imageLeft, imageSrc }
`);
