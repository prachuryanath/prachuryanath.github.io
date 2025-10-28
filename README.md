# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It's designed to be a clean, minimal, and professional showcase of your work, experience, and interests.

## How to Update Your Website Content

Almost all the content on this website can be updated by editing a single file: `constants.ts`. This file acts as a database for your portfolio. Below are instructions for updating each section.

### 1. Personal Information

Open `constants.ts` and find the `PROFILE` object.

```javascript
export const PROFILE = {
  name: 'Jane Doe',
  title: 'Senior Software Engineer at Google',
  summary: "I'm a software engineer specializing in building exceptional digital experiences...",
  avatar: 'URL_TO_YOUR_PHOTO.jpg', // Replace with a link to your photo
  contact: {
    email: 'jane.doe@example.com',
    phone: '+1 123-456-7890',
  },
  socials: [
    // ... social links
  ],
};
```

-   **`name`**: Your full name.
-   **`title`**: Your current job title or headline.
-   **`summary`**: The introductory paragraph on your homepage.
-   **`avatar`**: Replace the placeholder URL with a direct link to your profile picture.
-   **`contact`**: Update your email and phone number.
-   **`socials`**: Edit the social media links. You can add or remove links. The `icon` property should match an icon component exported from `components/Icons.tsx`.

### 2. Education

Find the `EDUCATION` array in `constants.ts`. Each object in the array represents an educational institution.

```javascript
export const EDUCATION: Education[] = [
  {
    institution: 'Stanford University',
    degree: 'M.S. in Computer Science, specialization in AI',
    duration: '2020 - 2022',
    location: 'Stanford, CA'
  },
  // Add more education objects here
];
```

To add a new entry, copy an existing object and modify its values.

### 3. Experience

Find the `EXPERIENCE` array. Each object represents a job or role.

```javascript
export const EXPERIENCE: Experience[] = [
  {
    company: 'Google',
    role: 'Senior Software Engineer',
    duration: '2022 - Present',
    description: [
      'Led the development of a new machine learning platform...',
      'Collaborated with cross-functional teams...',
    ],
  },
  // Add more experience objects here
];
```

-   The `description` is an array of strings, where each string is a bullet point.

### 4. Projects

Find the `PROJECTS` array.

```javascript
export const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'The very website you are looking at...',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/your-repo', // Optional link
  },
  // Add more project objects here
];
```

-   `technologies`: A list of technologies used. They will be displayed as tags.
-   `link`: An optional URL to the project's repository or live demo.

### 5. Publications

Find the `PUBLICATIONS` array.

```javascript
export const PUBLICATIONS: Publication[] = [
  {
    title: 'Attention Is All You Need',
    authors: ['Ashish Vaswani', 'Noam Shazeer', ...],
    venue: 'NIPS',
    year: 2017,
    description: 'Proposed the Transformer, a novel network architecture...',
    link: 'https://arxiv.org/abs/1706.03762',
  },
  // Add more publication objects here
];
```

### 6. Blog Posts

Find the `BLOG_POSTS` array. To add a new post, create a new object.

```javascript
export const BLOG_POSTS: BlogPost[] = [
  {
    title: "A Deep Dive into React's new 'use' Hook",
    slug: 'deep-dive-react-use-hook', // A unique URL-friendly identifier
    date: 'October 10, 2023',
    excerpt: 'React 19 is bringing a lot of exciting new features...',
    content: [
      'This is the first paragraph of the full blog post.',
      'This is the second paragraph. Each string in this array will be rendered as a separate paragraph on the post detail page.',
    ],
  },
  // Add more blog post objects here
];
```
-   **`slug`**: This is very important. It must be unique for each post and should only contain lowercase letters, numbers, and hyphens. It's used to create the URL for the post (e.g., `/#/blog/deep-dive-react-use-hook`).
-   **`excerpt`**: A short summary shown on the homepage and blog list page.
-   **`content`**: An array of strings. Each string is a full paragraph for the detailed blog post view.

### 7. Photography

Find the `PHOTOGRAPHY_IMAGES` array.

```javascript
export const PHOTOGRAPHY_IMAGES: Photo[] = [
  { 
    id: 1, 
    src: 'URL_TO_YOUR_IMAGE.jpg', // Direct link to the image
    alt: 'A descriptive caption for accessibility', 
    caption: 'Misty mountains' 
  },
  // Add more photo objects here
];
```

-   `src`: Replace with a direct URL to your photo. You can use an image hosting service like Imgur or a cloud storage provider.
-   `alt`: A short description of the image for screen readers.
-   `caption`: The text that appears when hovering over the image in the gallery.

---

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages.

### Step 1: Set Your Repository Name

Open the `vite.config.ts` file. You **must** update the `base` property to match your GitHub repository name. For a URL like `https://prachuryanath.github.io/`, the repository name is `prachuryanath.github.io`.

```javascript
// vite.config.ts
export default defineConfig({
  // ...
  base: '/prachuryanath.github.io/', // <-- IMPORTANT: Change this!
});
```

### Step 2: Build the Project

Run the following command in your terminal. This will create a `dist` folder with all the optimized files for your website.

```bash
npm install && npm run build
```

*(Note: You may need to define the `build` script in `package.json` if it doesn't exist: `"build": "vite build"`)*

### Step 3: Push the `dist` Folder to GitHub

Push your entire project, including the newly created `dist` folder, to your GitHub repository.

### Step 4: Configure GitHub Pages

1.  Go to your repository on GitHub.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
5.  For the **Branch**, select your main branch (e.g., `main` or `master`) and choose the `/dist` folder from the dropdown.
6.  Click **Save**.

GitHub will now build and deploy your site. It might take a few minutes. Your portfolio will be live at the URL provided on that page (e.g., `https://your-username.github.io/your-repo-name/`).
