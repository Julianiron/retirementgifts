document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the blog index page
    if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }
    
    // Check if we're on a single blog post page
    if (document.querySelector('.related-posts-grid')) {
        loadRelatedPosts();
    }
    
    // Add event listener for comment form if it exists
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmission);
    }
});

// Sample blog posts data (in a real implementation, this would come from a database)
const blogPosts = [
	{
        id: 1,
        slug: 'retirement-gift-etiquette',
        title: 'Retirement Gift Etiquette: What is appropriate?',
        excerpt: 'Learn how to plan an unforgettable retirement party with our comprehensive guide covering venues, themes, gifts, and more.',
        date: 'February 7, 2025',
        author: 'Admin',
        image: '/images/gifts1.jpg',
        tags: ['Retirement', 'Gifts', 'Celebration']
    },
    {
        id: 2,
        slug: 'retirement-party-guide',
        title: 'Planning the Perfect Retirement Party: A Complete Guide',
        excerpt: 'Learn how to plan an unforgettable retirement celebration with our comprehensive guide covering venues, themes, gifts, and more.',
        date: 'February 14, 2025',
        author: 'Admin',
        image: '/images/celebration1.jpg',
        tags: ['Retirement', 'Party Planning', 'Celebration']
    },
    {
        id: 3,
        slug: 'fulfilling-hobbies-retirement',
        title: 'Fulfilling Hobbies to Explore in Retirement',
        excerpt: 'Explore enriching activities and hobbies that can make your retirement years more meaningful, social, and enjoyable.',
        date: 'February 21, 2025',
        author: 'Admin',
        image: 'C/images/hobbies1.jpg',
        tags: ['Retirement', 'Hobbies', 'Lifestyle']
    },
	{
        id: 4,
        slug: 'best-travel-destination',
        title: 'Best Travel Destinations for Retirees',
        excerpt: 'Discover the critical financial planning steps you need to take before retiring to ensure financial security and peace of mind.',
        date: 'February 28, 2025',
        author: 'Admin',
        image: '/images/vacation1.jpg',
        tags: ['Retirement', 'Financial Planning', 'Investing']
	},
    {
        id: 5,
        slug: '10-financial-planning-steps',
        title: '10 Essential Financial Planning Steps for Retirement',
        excerpt: 'Planning for retirement is one of the most important financial endeavors. A secure retirement requires careful planning, disciplined saving, and strategic investment decisions.',
        date: 'February 10, 2025',
        author: 'Admin',
        image: '/images/finance1.jpg',
        tags: ['Retirement', 'Gifts', 'Celebration']
    },
	{
	     id: 6,
        slug: 'volunteering-in-retirement',
        title: 'Volunteering in Retirement: Giving Back and Finding Purpose',
        excerpt: 'Retirement offers a unique opportunity to give back to the community while finding renewed purpose.',
        date: 'February 10, 2025',
        author: 'Admin',
        image: '/images/volunteer1.jpg',
        tags: ['Retirement', 'Healthcare', 'Insurance']
    },
	{
	     id: 7,
        slug: '12-gifts-for-men',
        title: '12 Great Retirement Gifts for Men',
        excerpt: 'Finding the perfect gift can help him enjoy his newfound freedom and pursue passions he may not have had time for before.',
        date: 'March 10, 2025',
        author: 'Admin',
        image: '/images/gifts2.jpg',
        tags: ['Retirement', 'Gifts', 'Men']
    },
];

// Function to load blog posts on the main blog page
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    
    blogPosts.forEach(post => {
        const postElement = createBlogPostCard(post);
        blogPostsContainer.appendChild(postElement);
    });
}

// Function to create a blog post card
function createBlogPostCard(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    
    // Use a placeholder image if the image doesn't exist
    const imageUrl = post.image || '../images/placeholder.jpg';
    
    article.innerHTML = `
        <div class="blog-card-image" style="background-image: url('${imageUrl}')"></div>
        <div class="blog-card-content">
            <h2><a href="articles/${post.slug}.html">${post.title}</a></h2>
            <div class="blog-card-meta">
                <span class="blog-card-date">${post.date}</span>
                <span class="blog-card-author">By ${post.author}</span>
            </div>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <a href="articles/${post.slug}.html" class="read-more">Read More →</a>
        </div>
    `;
    
    return article;
}

// Function to load related posts on a single blog post page
function loadRelatedPosts() {
    const relatedPostsContainer = document.querySelector('.related-posts-grid');
    
    // Get the current post slug from the URL
    const currentSlug = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Filter out the current post and get up to 3 related posts
    const relatedPosts = blogPosts
        .filter(post => post.slug !== currentSlug)
        .slice(0, 3);
    
    relatedPosts.forEach(post => {
        const postElement = createRelatedPostCard(post);
        relatedPostsContainer.appendChild(postElement);
    });
}

// Function to create a related post card
function createRelatedPostCard(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    
    // Use a placeholder image if the image doesn't exist
    const imageUrl = post.image || '../../images/placeholder.jpg';
    
    article.innerHTML = `
        <div class="blog-card-image" style="background-image: url('${imageUrl}')"></div>
        <div class="blog-card-content">
            <h2><a href="${post.slug}.html">${post.title}</a></h2>
            <div class="blog-card-meta">
                <span class="blog-card-date">${post.date}</span>
            </div>
            <a href="${post.slug}.html" class="read-more">Read More →</a>
        </div>
    `;
    
    return article;
}

