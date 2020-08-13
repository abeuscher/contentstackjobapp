# Contentstack.com
## Public Website

v 1.0.0

Built on top of Gatsby starter.

To run:
  1. Install gatsby-cli
  2. Update gatsby-config.js with local site settings.
  3. run gatsby build
  4. install docker and docker-compose
  5. populate.env file with these variables:
    
    SERVER_HOSTNAME= <- Server hostname
    PATH_TO_CONF= <- path to Nginx config. Sample configs in /proxy/config/
    PATH_TO_CERTS= <- path to SSL Certs.

  6. docker-compose up -d

Components:
Gatsby
https://gatsbyjs.org/
Swiper JS
https://swiperjs.com/

To Do:

Build:
 - Author Pages
 - FAQ Page
 - Trust Page
 - Pricing Page
 - ROI Calculator 
 - Careers Page / Greenhouse app integration
 - About Page

 
 Finish:
 - Integrations Pages 
 - CMS Guides 
 - Partner Pages
 - Resources Pages
 - Legal Pages 
 - Blog pagination

Tasks:
 - Add scrolling highlight functionality to subnav
 - Pretty up the filter nav
 - Add option to open callout in nav dropdown in new tab.
 - Polish everything / First Round mobile testing