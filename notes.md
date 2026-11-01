## import Image from "next/image";
- this component is used to display the image. 
- It provides optimized image loading and resizing for better performance and user experience.

    ## <Image src={logoImg} alt="Super Noddles logo" />
    - this image component is used to display the image in the particular component

## import Link from "next/link";
- this component allows the user to navigate to different pages of the website.

    ## <li><Link href="/about">About</Link></li>
    - we use Link component to navigate between pages in Next.js, which allows for client-side navigation and prefetching of linked pages for better performance.


## import styles from "./HomeBody.module.css";
- this line imports the styles from the HomeBody.module.css file, 
which contains the CSS classes used in this component.

## Creating a slide Show
- ```tsx
    {images.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={item.alt}
            className={index === currentImageIndex ? styles.active : ''}
          />
        ))}
    ```
    - this code makes the images to be displayed in a slideshow format, with the current image being highlighted using the "active" class from the CSS module. 
    - The "key" prop is used to uniquely identify each image in the list for efficient rendering.

## import useEffect from "react";
- this is a react hook that allows you to perform side effects in your components. 
- It takes a function as an argument and runs it after the component renders. You can also specify dependencies for the effect, so it only runs when those dependencies change.

## App Route
    - In the App Router, every component is a Server Component by default. 
    - Server Components run on the server only, so they can’t use useState or useEffect, which need the browser. Your slideshow uses both (to remember the current image and to change it every 6 seconds), so it must be a Client Component.
    -you need to use "use client"

## breadcrumb
  - one component reads the current URL and builds it automatically. 
  e.g. 
  You open	Breadcrumb shows
/	        nothing
/account	Home > My Account
```tsx
     function formatLabel(segment: string) {
        return segment  
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
```
- this function takes a segment of the URL path and formats it into a more readable label. It splits the segment by hyphens, capitalizes the first letter of each word, and then joins them back together with spaces. For example, "my-page" would become "My Page".

```tsx
 <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link href="/">Home</Link>
        {segments.map((segment, index) => {
           const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;
            return (
                <span key={href}>
            <span className={styles.separator}>&gt;</span>
            {isLast ? (
              <span className={styles.current}>{formatLabel(segment)}</span>
            ) : (
              <Link href={href}>{formatLabel(segment)}</Link>
            )}
          </span>
            );
        })}
```
-  this funtion create a navigation breadcrumb based on the current path, 
- allowing users to easily navigate back to previous pages. It splits the pathname into segments, formats them for display, and generates links for each segment except the last one, which is displayed as plain text to indicate the current page. e.g. Home>My Account



