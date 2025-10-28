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

## Deployment to GitHub Pages (Automated)

This project uses GitHub Actions to automatically build and deploy your website whenever you push changes to the `main` branch.

### Step 1: Push Your Code

Make sure all your latest changes, including the `.github/workflows/deploy.yml` file, are pushed to your GitHub repository's `main` branch.

```bash
git add .
git commit -m "Set up automated deployment"
git push origin main
```

### Step 2: Configure GitHub Pages Settings

1.  Go to your repository on GitHub.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", for the **Source**, select **GitHub Actions**.

That's it! GitHub will now look for the `deploy.yml` workflow. After your first push with this new file, go to the **Actions** tab in your repository. You will see the workflow running. Once it completes successfully (it might take a minute or two), your website will be live at `https://prachuryanath.github.io/`.

From now on, you just need to push your code changes, and the site will update automatically.
