<!-- Blog.svelte -->
<script>
    import PostsList from '$lib/components/PostsList.svelte'
    import Pagination from '$lib/components/Pagination.svelte'
    import { siteDescription } from '$lib/config'
    import { formatDate } from '$lib/assets/js/formatDate.js';
	import Divider from '$lib/components/Divider.svelte';

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
        <a href="/blog/{featuredPost.slug}" class="featured-post-link">
            {#if featuredPost.coverImage}
                <div class="featured-image-container">
                    <img
                        class="featured-image"
                        src={featuredPost.coverImage}
                        alt={featuredPost.coverImageAlt}
                        width={featuredPost.coverWidth}
                        height={featuredPost.coverHeight}
                    />
                </div>
            {/if}
            <div class="featured-content">
                <h2>{featuredPost.title}</h2>
                <p class="excerpt">{featuredPost.excerpt.slice(0, 100)}</p>
                <time>{formatDate(featuredPost.date)}</time>
            </div>
        </a>
    </article>
    <Divider />
{/if}

<!-- Regular Posts -->
<div class="posts-grid">
    {#each regularPosts as post}
        <article class="post-card">
            <a href="/blog/{post.slug}" class="post-card-link">
                <div class="post-content">
                    <h3>{post.title}</h3>
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
            </a>
        </article>
        <Divider />
    {/each}
</div>

<Pagination currentPage={1} totalPosts={data.total} />

<style>
	
    .featured-post {
        margin: 1.5rem auto; 
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }

    .featured-image-container {
        flex: 1;
       max-width: 50%; /* Reduced from 50% for smaller width */
        min-width: 0;
        aspect-ratio: 3 / 2; /* New ratio */
    }

    .featured-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center; /* Controls which part of image to focus */
        border-radius: 4px;
    }

    .featured-content {
        flex: 1;
        min-width: 0; /* Prevents flex item from overflowing */
        padding: 0;
        border-bottom: none;
        display: flex;
        flex-direction: column;
        /* gap: 1rem; */
    }
    .featured-content h2 {
        margin: 0 !important;
        font-size: 1.65rem;
        line-height: 1.2;
    }

    .featured-content h2 a {
        color: var(--darker);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .featured-content h2 a:hover {
        color: var(--accent);
    }

    .featured-content .excerpt {
        margin: 0;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .featured-content time {
        font-family: var(--dateFont);
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--slate);
        margin-top: auto;
    }
	.featured-post-link,
    .post-card-link {
        text-decoration: none;
        color: inherit;
        display: flex;
        width: 100%;
        gap: inherit;
        transition: all 0.2s ease;
    }

    .featured-post-link {
        gap: 2rem;
    }

    .post-card-link {
        gap: 1rem;
    }

    .featured-post-link:hover,
    .post-card-link:hover {
        color: inherit;
        transform: translateY(-2px);
    }

    .featured-content h2 {
        color: var(--darker);
        margin: 0 !important;
        font-size: 1.65rem;
        line-height: 1.2;
    }

    .post-content h3 {
        color: var(--darker);
        margin: 0 0 0.5rem 0;
        font-size: 1.45rem;
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
       .featured-post {
            flex-direction: column;
            gap: 1rem;
            margin-top: 0;
        }

        .featured-image-container {
            max-width: 100%;
            width: 100vw;
            margin-left: 50%;
            transform: translateX(-50%);
        }

        .featured-image {
            border-radius: 0;
        }

        .featured-content {
            padding: 0.25rem 1rem 1rem 1rem;
        }

        .featured-content h2 {
            font-size: 1.5rem;
            margin: 1rem 0;
        }

        .featured-content .excerpt {
            font-size: 1rem;
            margin: 0.5rem 0;
        }

        .post-content h3 {
            font-size: 1rem;
        }

        .post-card {
            padding: 1rem;
        }
		.featured-post-link {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>