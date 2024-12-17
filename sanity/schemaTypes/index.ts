import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homeServices } from "./homeServicesType";
import { homepageAbout } from "./homepageAboutType";
import { aboutPage } from "./aboutPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homeServices,
    homepageAbout,
    aboutPage,
  ],
};
