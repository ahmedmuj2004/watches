Watch Website Development Project.
Home-Page
 
Shop-page
 
Contact page 
 

Revised Wireframes: Justification for Changes
Throughout the process of designing the APA Watches site, various modifications have been made to the wireframes of Assignment 1. The reason for making these modifications was to simplify the designs and increase the site’s usability.
simplification of the Layout
Switched to “Clean Grid” grid layout.
The previous layout complexity resulted in “cognitive overload,” which made it difficult for new users, such as Zayn, to understand what buttons to press. The simplicity of the new layout allows the user to concentrate only on the watches.
Accessibility Improvements (WCAG 2.1)
Change Made: Transitioned from a "Standard" Layout to a "Clean Grid" Layout

The original layout had buttons that were too small and used low contrast colours for the text in the footer and sidebar.

Change Made: Enlarged the size of hit targets and adopted a high contrast color scheme (i.e., dark background with white/gold text).

Justification: This will make the website easy to use by both disabled and mobile users, which fulfills the technical requirement .
Design
This project involves developing a professional, responsive retail website for APA Watches. The site transitions the business from a physical-only shop to a competitive online platform, allowing customers to browse, filter, and inquire about luxury watches.
Objectives and Purpose
Main Objective: To create a website that will make APA Watches more competitive compared to existing brands such as Witchfinder & Co.
Objective: To give consumers access to an online directory from which they can compare different watch collections, view the price lists, and even communicate with the company.
Target Market: New customers and loyal customers who intend to acquire certain models of the watches, and die-hard watch collectors.
Main Functions: Accessibility, Brand Filtering, and Communication.
User Stories:
First-Time Visitor (Zayn): "As a first-time visitor, I want to browse different watches easily so that I can explore the options available and decide on a style."
Returning Visitor (Sarah): "As a returning visitor, I want to search for a specific watch so that I can quickly find and purchase it."
Frequent Visitor (Zahra): "As a watch collector, I want to filter watches by price and brands so that I can quickly compare different models."
Justification for Revisions:
Navigation & Search
After performing the competitive analysis of Witchfinder & Co, I revised the header design by adding a search bar in the centre and a sticky menu for easy navigation. This meets the needs of Sarah, who wants to locate her desired product.



Filtering system
The product list page was revised to add filters in the sidebar. This caters to Zahra, who wishes to sort the watches based on their cost and brands without needing to refresh the page.
Interactive controls
Custom controls were incorporated for the banner to satisfy the needs.
Accessibility 
Based on WCAG 2.1 standards, I enhanced the contrast of the “Add to Cart” buttons and provided ARIA labels for the search box to cater to visually challenged individuals.

Development
Tools & Technologies:
The website was developed with custom HTML5 and CSS3. CSS Grid was used for styling the product cards, while Media Queries were employed to make the website responsive, especially for mobile devices.
Interactive Features:
A [e.g., Weather API/Map API or Custom JS Filter] was included to add dynamic content.
Key Decisions:
Consistent indentation and comments (e.g., /* --- Header Styles --- */) were added to ensure readability and maintainability.
Challenges & Resolutions:
The filter panel was occupying more space on mobile devices.
Resolution: I employed a CSS media query to make the filter panel invisible on screens less than 768 pixels wide and included a 'Filter' button that slides out the menu when clicked.
Website Repository link:  https://github.com/ahmedmuj2004/watches
Live website link:  file:///Users/ahmedmujtaba/Desktop/watches/index.html
Testing
User Story	Task Tested	Result
First time Visitor	Navigated from home page to shop page by clicking the button	Test passed the button worked, and the user went from one page to the other.
Returning Visitor	Used the search bar to find Tissot watch	Test passed the user searched and the Tissot watch came up.
Collector 	Applied the filter to find the Apa watch only	Test passed after using the filter only Apa watch appeared.

Contact form Test	The user tried to send the message without typing the email	Test passed the website gave an error and said type in the email to send message.

Automated Testing:
W3C HTML Validator: Validated with 0 errors.
W3C CSS Validator: All custom CSS passed validation.
Lighthouse: Accessibility: 80/100
Bug tracking:
Issue Fixed: External links were opening in the same tab. Fix: All external links were given target="_blank".
Issue Fixed: The contrast ratio was low in the footer text. Fix: Text colour was changed from light grey to white (#FFFFFF).
Bugs Unfixed: When you type something in the search bar, it takes you to the shop page, which is good and bad as well. It is good because you can see the images in the shop section, and it is bad because you can’t search for the watches on the homepage using the search bar.


references 
Marcotte, E. (2010) Responsive Web Design. Available at: https://alistapart.com/article/responsive-web-design/ (Accessed: 25 April 2026).
World Wide Web Consortium (W3C) (2023) Web Content Accessibility Guidelines (WCAG) 2.1. Available at: https://www.w3.org/TR/WCAG21/ (Accessed: 27 April 2026).
World Wide Web Consortium (W3C) CSS3 Specification. Available at: https://www.w3.org/Style/CSS/ (Accessed: 25 April 2026).
GitHub (no date) GitHub Pages Documentation. Available at: https://docs.github.com/en/pages
Google (no date) Lighthouse. Available at: https://developers.google.com/web/tools/lighthouse (Accessed: 30 April 2026).
