
# Tutorial

## Index.html
Page title  
`<title>About u :D</title>`  
Change this to update the browser tab name.

Profile info  
`<h2>@username</h2>`  
`<div class="status">Status</div>`  
`<p>Share a short bio or tagline here.</p>`  
Replace with your actual username, status, and a short description.

Profile picture  
`<img src="https://tr.rbxcdn.com/..."/>`  
Change the `src` to your profile picture URL.

Social links  
`<a href="#" ...>`  
Update the `href` attributes for Discord Server, GitHub, Socials with your real URLs.

Audio playlist  
Inside the `<script type="application/json" id="playlist-data">`  section
Replace the song titles and URLs with your own MP3s.

Media section  
`<img src="..." alt="Media Image" />`  
`<p>- Interest one</p>`  
Swap the image and list your actual interests.

Blog button  
`<button id="openBlog">Open Blog</button>`  
Controlled by `overlays.js`. Modify that script if you want the button to load something custom.

## Blog.html
Blog data source  
`fetch('../lib/blogs.json')`  (Recommended)
Update the path if your JSON file is located elsewhere.

Post structure  
Blog post content is rendered from JSON with these fields:  
- `post.title` → shown in `<h2>`
- `post.date` → shown in `.date`
- `post.content` → supports `[img]...[/img]` syntax for images

To display custom posts, modify `blogs.json` or create automation.

Custom image embedding  
Use `[img]URL[/img]` inside `post.content` to insert images.  
Handled by the `parseContent()` function.

Style customization  
Edit the `<style>` block to adjust fonts, colors, layout, or image styles.

Responsive behavior  
The `@media` rule adjusts fonts and padding for small screens.  
Modify if mobile styling needs to be changed.

## styles.css

This file contains the main styling components. All details and explanations are inside the CSS comments.

Key areas:
- Color/theme variables (:root)
- Layout (.grid, side/main containers)
- Header & audio player styles
- Profile & social links
- Media section styling
- Main content sections
- Iframe modal popup
- Keyboard focus outlines

## player.js

### work in progress lol
