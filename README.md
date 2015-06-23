# OpenWriter
### A free theme for Ghost

I created this theme as a way to learn how Ghost works. It is available for free. If you use the theme or have any suggestions for improvements, do tweet me at [@ireaderinokun](https://twitter.com/ireaderinokun)!

[Demo](https://ireaderinokun.ghost.io)

![OpenWriter Example](http://www.ireaderinokun.com/openwriter-images/1.png)

![OpenWriter Example](http://www.ireaderinokun.com/openwriter-images/8.png)


## Getting Started

If you are completely new to Ghost, you should read their [documentation here first](https://github.com/tryghost/Ghost). Otherwise, continue reading!

To install this theme, simply download this repo as a zip file, extract, and place in your themes directory. In your Ghost backend, go to 'settings' and select the OpenWriter theme.


## Key features

- Clean design with parallax scroll
- Fully responsive design
- Ready to use, no configuration needed
- Support for all main ghost features - author pages, tag pages, etc.
- Default cover image
- Cover image size smaller on subsequent archive pages
- Contact form pre-installed
- Support for private blogs *NEW*


### Contact Form

Thanks to [Formspree](http://formspree.io), I was able to include a free contact form. Because Ghost no longer allows themes to have direct access to your remail for security reasons, you will need to add your email address manually. To do this, follow these steps:

1. Find "contact.hbs" in the partials folder of the theme
2. Place your email address in the specified section on line 2
3. Save the file and activate OpenWriter as your theme
4. Create a new post
5. Title the post 'Contact' and make sure the post URL is also 'contact'
6. Under the settings, check the box that says "Turn this post into a static page"
7. Publish the page
8. Visit the Contact page and fill in the form once to activate it with Formspree


![OpenWriter Example](http://www.ireaderinokun.com/openwriter-images/5.png)

### Cover Images

Each page features a cover image. This is determined by the following hierarchy:

1. The individual page's cover image
2. The blog's cover image
3. The default cover image bundled with the theme

Special thanks to [The Stocks](http://thestocks.im/) for providing the default cover image under the Creative Commons Zero licence.

![OpenWriter Example](http://www.ireaderinokun.com/openwriter-images/6.png)


