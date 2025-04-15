<!-- Blog.svelte -->
<script>
    import PostsList from '$lib/components/PostsList.svelte'
    import Pagination from '$lib/components/Pagination.svelte'
    import { siteDescription } from '$lib/config'
    import { formatDate } from '$lib/assets/js/formatDate.js';

    export let data;
    
    // Get the first post as featured post
    const featuredPost = data.posts[0];
    // Get the rest of the posts
    const regularPosts = data.posts.slice(1);
</script>

<svelte:head>
    <title>Blog</title>
    <meta data-key="description" name="description" content={siteDescription}>
</svelte:head>
<!-- Featured Post -->
{#if featuredPost}
    <article class="featured-post">
        {#if featuredPost.coverImage}
            <img
                class="featured-image"
                src={featuredPost.coverImage}
                alt={featuredPost.coverImageAlt}
                width={featuredPost.coverWidth}
                height={featuredPost.coverHeight}
            />
        {/if}
        <div class="featured-content">
            <h2><a href={featuredPost.path}>{featuredPost.title}</a></h2>
            <p class="excerpt">{featuredPost.excerpt.slice(0, 100)}</p>
            <time>{formatDate(featuredPost.date)}</time>
        </div>
    </article>
{/if}

<!-- Regular Posts -->
<div class="posts-grid">
    {#each regularPosts as post}
        <article class="post-card">
            <div class="post-content">
                <h3><a href={post.path}>{post.title}</a></h3>
                <p class="excerpt">{post.excerpt.slice(0, 100)}</p>
                <time>{formatDate(post.date)}</time>
            </div>
            {#if post.coverImage}
                <div class="post-image">
                    <img
                        src={post.coverImage}
                        alt={post.coverImageAlt}
                        width="72"
                        height="72"
                    />
                </div>
            {/if}
        </article>
    {/each}
</div>

<Pagination currentPage={1} totalPosts={data.total} />

<style>
	article {
		margin-bottom: 1.5rem !important;
	}
    .featured-post {
        margin-bottom: 4rem;
    }

    .featured-image {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
		border-radius: 0;
    }

    .featured-content {
        padding: 0.25rem 1rem 1rem 1rem ;
		border-bottom: 1px solid var(--lightGrey);
    }

    .featured-content h2 {
        margin: 1rem 0;
        font-size: 2rem; 
    }

    .featured-content h2 a {
        color: var(--darker);
        text-decoration: none;
    }

    .featured-content time {
		font-family: var(--dateFont);
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--slate);
    }

    .posts-grid {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-bottom: 2rem;
    }

    .post-card {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--lightGrey);
    }

    .post-content {
        flex: 1;
    }

   .post-content h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.45rem; 
    }

    .post-content h3 a {
        color: var(--darker);
        text-decoration: none;
    }

    .post-content time {
        color: var(--slate);
        font-size: 0.75rem;
    }

    .excerpt {
        color: var(--dark);
        margin: 0.5rem 0;
        line-height: 1.5;
    }

    .post-image img {
        width: 72px;
        height: 72px;
        object-fit: cover;
        border-radius: 4px;
    }

     @media (max-width: 768px) {
        .featured-content h2 {
            font-size: 1.5rem; 
        }

        .post-content h3 {
            font-size: 1rem; 
        }

        .post-card {
            padding: 1rem;
        }
    }
</style>