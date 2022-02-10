import { useRouter } from "next/router";



const BlogPostPage = () => {
    const route = useRouter();

    console.log(route.query);

    return (
        <div>
            <h1>The Blog Posts</h1>
        </div>
    )
}


export default BlogPostPage;