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


 - Author Pages
 - Greenhouse app integration
 - Add placeholder content to About and Build
 - Add placeholder content to team and build
 - Pricing Page
 - ROI Calculator
 - Add highlight functionality to subnav
 - Pretty up the filter nav
 - faqs section
 - platforms section
 - Add option to open callout in nav dropdown in new tab.
 
 - Integrations Pages 
 - CMS Guides 
 - Partner Pages
 - Resources Pages
 - Legal Pages 
 - Blog pagination

Idea for Docs Templates
We create global types for each "component" the client wants. These globals are then assembled into content typoes of "page" for the team.

All of these publish to the same place. We then identify the relevant component by the key of its data type and build the template on the fly from those pieces.

So at gatsby-node, we load all of the graphQl fragments, then iterate through them. And the docs fragment is one huge query that pushes to a single template that has a place where we key each piece of the object to a template. then profit.