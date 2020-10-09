**Responsive Web Design**

Use the following HTML structure to create a page. You can fill up the page with ANY content that you like. But you need to maintain the HTML structure and use all HTML tags in this structure. You are allowed to add more HTML tags.

 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <header>
    </header>
    <main>
        <section>
            <article>
            </article>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
        <aside>
            <img>
            <img>
        </aside>
   </main>
   <footer>
   </footer>
</body>
</html>
```



**Step 1: Add a media query (3 pt)**

In this step, you’ll add a media query to the page so it provides for tablets in portrait orientation. When you’re done, the page will look different when the width of the browser window is reduced.

1. Add a meta element to the HTML that sets the width property for the viewport to the device width and the initial zoom factor to 1.
2. Code a media query for the screen media type that has a maximum width of 850 pixels.
3. Within the media query, change the base font size for the page so it’s 90% of the default font size.
 
**Step 2 Create a fluid layout and scalable images. When you’re done, the page will change its look when the width of the browser window is reduced. (4 pt)**

1. Reduce the width of the browser window so it’s less than the width of the page. That way, you’ll be able to see how the page changes as you adopt a fluid design.
2. Modify the CSS for the body so it takes up 98% of the browser window and so its maximum width is the current width.
3. Set the widths of the section, the aside, and the li elements within the navigation menu to percentages.
4. Set any left or right margins or padding to percentages. (Hint: If any measurements are specified in ems, you can set them to pixels by multiplying by 16 since that’s the base font size.)
5. Make the image in the article scalable so it’s always 50 percent of the width of the article.
 

**Step 3:  Format the home page for printing (3 pt)**

1. In the HTML file, add a link element for the print.css file and be sure to specify that the medium is “print”.
2. In the CSS file, delete all of the rule sets and rules that you don’t need to override, and code the rule sets or rules that will stop the display of the navigation menu and the images in the sidebar.
3. Increase the font size in the body element to 100% so the page will be easier to read when it’s printed.
4. Modify or add styles to the home_print.css file until the printed page looks like the one below.
5. Add CSS code developed in this section to the JSBin CSS tab and comment the code out after
this line:

`/* print.css */`


**I would also encourage you to do these two steps:**

Follow CSUN Identity Guideline for your CSS to maintain a consistent styling for similar elements in this assignment. https://www.csun.edu/identity/design-guidelines (Links to an external site.)
Use a Google Font by using Google Fonts API https://developers.google.com/fonts/docs/getting_started (Links to an external site.)
 

*Estimated time: 90 to 120 minutes.*
 

**Submission Instruction**

You will be graded according to each requirement. Be sure you have met all of the criteria. You will use JSBin to submit your assignment. Once you have modified your HTML page as directed above, lock a copy of it by using the Share menu in JSBin. This will provide a locked URL that represents your work.  Submit this URL for grading. Failure to adhere to this submission instruction will be grounds for rejection of work.
