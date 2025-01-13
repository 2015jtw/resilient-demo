import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homepageAbout } from "./homepageAboutType";
import { aboutPage } from "./aboutPageType";
import { ServiceType } from "./serviceType";
import { heroType } from "./heroType";
import { afiliationsType } from "./afiliationsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroType,
    homepageAbout,
    aboutPage,
    ServiceType,
    afiliationsType,
  ],
};
