import { getCollection } from "astro:content";

export default async function getDraftBlogPosts() {
    const posts = await getCollection("blog", ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true;
    }
    );
    return posts;
}