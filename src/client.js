import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  apiVersion: process.env.REACT_APP_API_VERSION,
  useCdn: true,
  token: process.env.REACT_APP_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
