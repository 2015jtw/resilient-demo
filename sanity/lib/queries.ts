import { defineQuery } from "next-sanity";

// DATA FOR HERO SECTION
export const HERO_QUERY = defineQuery(
  `*[_type == "hero"]{_id, title, missionStatement, additionalText, image}`
);

// DATA FOR HOMEPAGE SERVICES TWO COLUMN SECTION
export const SERVICES_QUERY =
  defineQuery(`*[_type == "service"]{_id, title, slug, homepageContent, homepageImage}
`);

// DATA FOR HOMEPAGE ABOUT SECTION
export const HOME_ABOUT_QUERY =
  defineQuery(`*[_type == "homepageAbout"]{ _id, title, body, socialAltText, socialLinks }
`);

// DATA FOR ABOUT PAGE
export const ABOUT_QUERY =
  defineQuery(`*[_type == "aboutPage"]{ _id, title, InspirationalQuote, description, imageLeft, imageSrc }
`);

// DATA FOR FOOTER SOCIALS
export const FOOTER_QUERY =
  defineQuery(`*[_type == "homepageAbout"]{socialLinks, socialAltText}
`);

// DATA FOR BLOG INDEX PAGE
export const BLOG_INDEX_QUERY =
  defineQuery(`*[_type == "post"]{ _id, title, mainImage, publishedAt, intro, slug, categories[] -> {title}, author -> {name} }
`);

// DATA FOR RECENT BLOGS
export const RECENT_BLOGS_QUERY =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) [0...$limit]{ _id, title, mainImage, publishedAt, intro, slug, categories[] -> {title, _id}, author -> {name} }
`);

// DATA FOR SINGLE BLOG POST
export const SINGLE_BLOG_POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{_id, title, mainImage, publishedAt, intro, readTime, main_content, slug, categories[] -> {title}, author -> {name, role, image} }
`);

// DATA FOR SERVICE SECTION ON HOMEPAGE
export const SERVICE_PAGE_QUERY =
  defineQuery(`*[_type == "service"]{_id, heroImage, title, heroText, intro, slug, approach, keyElements, chooseUs, hook}
`);

// DATA FOR SINGLE SERVICE PAGE
export const SINGLE_SERVICE_PAGE_QUERY =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{_id, heroImage, slug, title, heroText, intro, approach, keyElements, chooseUs, hook}
`);

// DATA FOR NAVBAR
export const NAVBAR_QUERY =
  defineQuery(`*[_type == "service"] | order(title asc){_id, title, slug, icon, NavDescription}
`);

// DATA FOR PROFESSIONAL AFFILIATIONS
export const AFFILIATIONS_QUERY =
  defineQuery(`*[_type == "afiliations"]{_id, title, url, logo}
`);
