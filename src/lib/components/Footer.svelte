<script>
    import { siteAuthor } from '$lib/config';
</script>

<footer>
    <nav>
        <ul>
            <div class="footer-meta">
                <li>
                    <a 
                        href="/api/rss.xml" 
                        target="_blank" 
                        aria-label="RSS Feed"
                        data-sveltekit-reload
                    >
                        rss
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/Benkaz3/sveltekit-blog" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub Source Code"
                    >
                        source
                    </a>
                </li>
                <li>
                    <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
                </li>
            </div>
        </ul>
    </nav>
</footer>