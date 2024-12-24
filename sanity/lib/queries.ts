import { defineQuery } from "next-sanity";

export const SERVICES_QUERY =
  defineQuery(`*[_type == "homeServices"]{_id, title, body, button_text, button_link, image, socialAltText}
`);

export const HOME_ABOUT_QUERY =
  defineQuery(`*[_type == "homepageAbout"]{ _id, title, body, socialAltText, socialLinks }
`);

export const ABOUT_QUERY =
  defineQuery(`*[_type == "aboutPage"]{ _id, title, description, imageLeft, imageSrc }
`);

export const BLOG_INDEX_QUERY =
  defineQuery(`*[_type == "post"]{ _id, title, mainImage, publishedAt, intro, slug, categories[] -> {title}, author -> {name} }
`);

export const SINGLE_BLOG_POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{_id, title, mainImage, publishedAt, intro, readTime, main_content, slug, categories[] -> {title}, author -> {name, role, image} }
`);

export const SERVICE_PAGE_QUERY =
  defineQuery(`*[_type == "service"]{_id, heroImage, title, heroText, intro, approach, keyElements, chooseUs, hook}
`);

export const SINGLE_SERVICE_PAGE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{_id, heroImage, title, heroText, intro, approach, keyElements, chooseUs, hook }
`);
