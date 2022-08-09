import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  apiVersion: process.env.API_VERSION,
  useCdn: true,
  token: process.env.TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
