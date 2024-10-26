// Sample data for blog updates with release date
const blogData = [
  {
    title: "First update ①",
    content: "This site has been radically changed by ell. All rights reserved to Faisal and Hamad",
    releaseDate: "2024-10-25",
    version: "1.1"
  },
  {
    title: "Second update ②",
    content: "A game found in the menu button called Hamad G has been added",
    releaseDate: "2024-10-26",
    version: "1.2"
  },
    
  ];
  
  // Function to calculate days since release
  function getDaysSinceRelease(releaseDate) {
    const today = new Date();
    const release = new Date(releaseDate);
    const timeDifference = today.getTime() - release.getTime();
    const daysSinceRelease = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysSinceRelease;
  }
  
  // Function to render blog posts
  function renderBlogPosts(data) {
    const blogContainer = document.getElementById("blogContainer");
  
    data.forEach(post => {
      const daysSinceRelease = getDaysSinceRelease(post.releaseDate);
      const blogPost = document.createElement("div");
      blogPost.classList.add("blog-post");
      blogPost.innerHTML = `
        <h2>${post.title}</h2>
        <h4>${post.content}</h4>
        <h6>Version: ${post.version}</h6>
        <h6>Released: ${post.releaseDate}</h6>
        <h6>Days Since Release: ${daysSinceRelease} days ago</h6>
      `;
      blogContainer.appendChild(blogPost);
    });
  }
  
  // Render the blog posts
  renderBlogPosts(blogData);