document.addEventListener("DOMContentLoaded", function() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

// Modal functions
function openModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modalOverlay');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// =======================
// 2ND QUARTER ICT LESSONS (CSS)
// =======================
const lessonData = {
    // 2nd Quarter - CSS Lessons
    1: {
        title: "Lesson 1: Introduction to CSS",
        content: `
            <p><strong>CSS</strong> stands for <em>Cascading Style Sheets</em>. It's the language used to style and design web pages. CSS controls how HTML elements appear on screen, paper, or other media. It separates content from design, making websites easier to maintain and more visually appealing.</p>
            <h3>Why Use CSS?</h3>
            <ul>
                <li>Defines styles for layout, colors, and fonts</li>
                <li>Improves consistency across web pages</li>
                <li>Saves time by applying styles to multiple pages</li>
                <li>Enhances responsiveness and accessibility</li>
            </ul>
            <h3>Layers of a Webpage</h3>
            <ol>
                <li><strong>Content Layer</strong> – HTML structure and content</li>
                <li><strong>Presentation Layer</strong> – CSS styling and layout</li>
                <li><strong>Behavior Layer</strong> – JavaScript interactions</li>
            </ol>
            <h3>Sample Code:</h3>
            <pre><code><!DOCTYPE html>
<html>
<head>
    <title>My First CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first styled paragraph.</p>
</body>
</html></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <h1 style="color: #333;">Hello World!</h1>
                <p style="color: #666;">This is my first styled paragraph.</p>
            </div>
            <h3>What I learnt?</h3>
            <p>I learned that CSS is like the clothes of a website—it makes everything look cool and organized. HTML is the bones, and CSS is the style. I didn't know that you could use one CSS file to change the look of a whole website. That's super useful!</p>
        `
    },
    2: {
        title: "Lesson 2: CSS Structure and Style Sheets",
        content: `
            <p>CSS uses a set of rules to style HTML elements. Each rule includes a <strong>selector</strong>, <strong>property</strong>, and <strong>value</strong>. These rules are grouped into <strong>declaration blocks</strong> and can be written in different ways.</p>
            <h3>Parts of CSS</h3>
            <ul>
                <li><strong>Selector</strong> – the HTML element to style</li>
                <li><strong>Property</strong> – the style attribute (e.g., color)</li>
                <li><strong>Value</strong> – the setting for the property (e.g., red)</li>
                <li><strong>Declaration</strong> – one property-value pair</li>
                <li><strong>Declaration Block</strong> – group of declarations</li>
            </ul>
            <h3>Types of Style Sheets</h3>
            <ul>
                <li><strong>External</strong> – stored in a separate .css file</li>
                <li><strong>Embedded</strong> – placed inside the <head> of HTML</li>
                <li><strong>Inline</strong> – written directly in the HTML tag</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code>/* External Style Sheet (style.css) */
p {
  color: green;
  font-family: Comic Sans MS;
  font-size: 18px;
}

h1 {
  color: blue;
  text-align: center;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <h1 style="color: blue; text-align: center;">Centered Heading</h1>
                <p style="color: green; font-family: Comic Sans MS; font-size: 18px;">This is green text in Comic Sans font.</p>
            </div>
            <h3>What I learnt?</h3>
            <p>Before this, I thought CSS was just random code. Now I know it has a structure with selectors and properties. I also learned that there are three ways to use CSS—external, embedded, and inline. I think external is the coolest because you can change everything with one file!</p>
        `
    },
    3: {
        title: "Lesson 3: CSS Basics, Display, Span, and Div Tags",
        content: `
            <p>CSS provides various ways to control how elements are displayed on a webpage. Understanding the <strong>display</strong> property is essential for layout control.</p>
            <h3>Display Property Values</h3>
            <ul>
                <li><strong>block</strong> – Element takes full width, starts on new line</li>
                <li><strong>inline</strong> – Element takes only necessary width, no new line</li>
                <li><strong>inline-block</strong> – Combines features of both</li>
                <li><strong>flex</strong> – Creates flexible container</li>
                <li><strong>grid</strong> – Creates grid layout</li>
                <li><strong>none</strong> – Element is hidden</li>
            </ul>
            <h3>Span and Div Tags</h3>
            <ul>
                <li><strong><div></strong> – Block-level container for grouping elements</li>
                <li><strong><span></strong> – Inline container for styling parts of text</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code><div style="display: block; background: lightblue;">
    This is a block-level div.
</div>

<span style="display: inline; background: lightgreen;">
    This is an inline span.
</span>

<div style="display: inline-block; padding: 10px; 
     background: pink; width: 150px;">
    Inline-Block Box
</div></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <div style="display: block; background: lightblue; padding: 10px; margin-bottom: 10px;">
                    This is a block-level div.
                </div>
                <span style="display: inline; background: lightgreen; padding: 5px;">
                    This is an inline span.
                </span>
                <div style="display: inline-block; padding: 10px; background: pink; width: 150px; margin-top: 10px;">
                    Inline-Block Box
                </div>
            </div>
            <h3>What I learnt?</h3>
            <p>I learned that the display property is super important for layout. The difference between block and inline was confusing at first, but now I understand. div is like a box that holds things, while span is for highlighting words inside a sentence!</p>
        `
    },
    4: {
        title: "Lesson 4: CSS Rules and Classes",
        content: `
            <p>CSS rules determine how HTML elements are styled. <strong>Classes</strong> allow you to apply the same style to multiple elements.</p>
            <h3>CSS Rule Structure</h3>
            <pre><code>selector {
    property: value;
}</code></pre>
            <h3>Classes vs IDs</h3>
            <ul>
                <li><strong>Class (.classname)</strong> – Can be used on multiple elements</li>
                <li><strong>ID (#idname)</strong> – Used only once per page</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code><style>
.highlight {
    background-color: yellow;
    padding: 5px;
}

#special {
    color: red;
    font-weight: bold;
}
</style>

<p class="highlight">This paragraph has highlight class.</p>
<p>This is normal.</p>
<p id="special">This has a special ID.</p></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p style="background-color: yellow; padding: 5px;">This paragraph has highlight class.</p>
                <p>This is normal.</p>
                <p style="color: red; font-weight: bold;">This has a special ID.</p>
            </div>
            <h3>What I learnt?</h3>
            <p>I learned that classes are like nicknames you can give to elements. You can use the same class on many things! IDs are like your birth certificate—only one person has it. Classes are way more flexible!</p>
        `
    },
    5: {
        title: "Lesson 5: CSS Positioning",
        content: `
            <p>CSS positioning allows you to control where elements are placed on a webpage.</p>
            <h3>Position Values</h3>
            <ul>
                <li><strong>static</strong> – Default positioning, follows normal flow</li>
                <li><strong>relative</strong> – Positioned relative to its normal position</li>
                <li><strong>absolute</strong> – Positioned relative to nearest positioned ancestor</li>
                <li><strong>fixed</strong> – Positioned relative to viewport</li>
                <li><strong>sticky</strong> – Toggles between relative and fixed</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code>.relative-box {
    position: relative;
    left: 30px;
    top: 20px;
    background: lightblue;
    padding: 20px;
}

.fixed-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: coral;
    padding: 10px;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9; position: relative; height: 150px;">
                <div style="position: relative; left: 30px; top: 20px; background: lightblue; padding: 20px; display: inline-block;">
                    Relative Box (moved 30px right, 20px down)
                </div>
                <div style="position: absolute; bottom: 10px; right: 10px; background: coral; padding: 10px;">
                    Fixed Box (stays at bottom-right)
                </div>
            </div>
            <h3>What I learnt?</h3>
            <p>Positioning was tricky at first! I now understand that relative is like moving something a little bit from where it normally is. Absolute is like putting something exactly where you want it on the page. Fixed is great for menus that stay at the top!</p>
        `
    },
    6: {
        title: "Lesson 6: CSS Dimensions and Pseudo-Classes",
        content: `
            <p>CSS allows you to control the dimensions of elements and use pseudo-classes for special effects.</p>
            <h3>Dimension Properties</h3>
            <ul>
                <li><strong>width</strong> – Sets element width</li>
                <li><strong>height</strong> – Sets element height</li>
                <li><strong>max-width</strong> – Maximum width limit</li>
                <li><strong>min-width</strong> – Minimum width limit</li>
            </ul>
            <h3>Pseudo-Classes</h3>
            <ul>
                <li><strong>:hover</strong> – When mouse is over element</li>
                <li><strong>:active</strong> – When element is being clicked</li>
                <li><strong>:focus</strong> – When element has focus</li>
                <li><strong>:first-child</strong> – First child of parent</li>
                <li><strong>:last-child</strong> – Last child of parent</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code>.box {
    width: 200px;
    height: 100px;
    background: lightgreen;
    transition: background 0.3s;
}

.box:hover {
    background: green;
    cursor: pointer;
}

input:focus {
    border: 3px solid blue;
    outline: none;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <div style="width: 200px; height: 100px; background: lightgreen; transition: background 0.3s; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                    Hover Me!
                </div>
                <input type="text" placeholder="Click me!" style="border: 3px solid blue; padding: 8px; width: 200px;">
            </div>
            <h3>What I learnt?</h3>
            <p>I learned that pseudo-classes are like secret powers! :hover makes things change when you touch them. It's so cool for making buttons that change color when you put your mouse over them. Dimensions help make things the right size!</p>
        `
    }
};

// =======================
// 1ST QUARTER ICT LESSONS (Hyperlinks & Forms)
// =======================
const lesson1stQuarter = {
    1: {
        title: "Lesson 1: Introduction to Hyperlinks",
        content: `
            <h3>What is a Hyperlink?</h3>
            <p>A hyperlink (or link) is a connection from one web page to another web page or different sections within the same page. It allows users to navigate between pages.</p>
            <h3>Types of Hyperlinks</h3>
            <ul>
                <li><strong>Absolute Hyperlink</strong> – Contains the full URL including protocol (http:// or https://)</li>
                <li><strong>Relative Hyperlink</strong> – Points to a file relative to the current page location</li>
                <li><strong>Named Anchor</strong> – Links to a specific section within the same page using #id</li>
            </ul>
            <h3>Sample Code:</h3>
            <pre><code><!-- Absolute Link -->
<a href="https://www.google.com">Google</a>

<!-- Relative Link -->
<a href="about.html">About Us</a>

<!-- Named Anchor -->
<a href="#section1">Go to Section 1</a></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <a href="https://www.google.com" style="color: blue; text-decoration: underline;">Google</a><br><br>
                <a href="about.html" style="color: blue; text-decoration: underline;">About Us</a><br><br>
                <a href="#section1" style="color: blue; text-decoration: underline;">Go to Section 1</a>
            </div>
        `
    },
    2: {
        title: "Lesson 2: Target Attributes and Email Links",
        content: `
            <h3>Target Attribute Values</h3>
            <ul>
                <li><strong>_blank</strong> – Opens in a new tab or window</li>
                <li><strong>_self</strong> – Opens in the same frame (default)</li>
                <li><strong>_parent</strong> – Opens in the parent frame</li>
                <li><strong>_top</strong> – Opens in the full body of the window</li>
            </ul>
            <h3>Email Links</h3>
            <p>To create a link that opens the user's email client:</p>
            <h3>Sample Code:</h3>
            <pre><code><!-- Opens in new tab -->
<a href="https://www.youtube.com" target="_blank">YouTube</a>

<!-- Email Link -->
<a href="mailto:student@school.edu">Email Me</a></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <a href="https://www.youtube.com" target="_blank" style="color: blue; text-decoration: underline;">YouTube (Opens in New Tab)</a><br><br>
                <a href="mailto:student@school.edu" style="color: blue; text-decoration: underline;">Email Me</a>
            </div>
        `
    },
    3: {
        title: "Lesson 3: HTML Links, Dead Links, and Forms",
        content: `
            <h3>Using Images as Links</h3>
            <pre><code><a href="page.html">
    <img src="image.gif" alt="Click here">
</a></code></pre>
            <h3>Creating Forms</h3>
            <pre><code><.phpform action="submit" method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <input type="submit" value="Submit">
</form></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <form style="background: white; padding: 15px; border: 1px solid #ddd;">
                    Name: <input type="text" name="name" style="margin: 5px 0;"><br>
                    Email: <input type="email" name="email" style="margin: 5px 0;"><br>
                    <input type="submit" value="Submit" style="margin-top: 10px;">
                </form>
            </div>
        `
    },
    4: {
        title: "Lesson 4: HTML5 Input Types",
        content: `
            <h3>HTML5 Input Types</h3>
            <pre><code><input type="color">
<input type="date">
<input type="email">
<input type="number">
<input type="range">
<input type="search">
<input type="url">
<input type="tel"></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <label>Color: </label><input type="color"><br><br>
                <label>Date: </label><input type="date"><br><br>
                <label>Email: </label><input type="email"><br><br>
                <label>Number: </label><input type="number"><br><br>
                <label>Range: </label><input type="range">
            </div>
        `
    },
    5: {
        title: "Lesson 5: Input Element Types and Attributes",
        content: `
            <h3>Textboxes and Text Areas</h3>
            <pre><code><input type="text" name="username" 
    placeholder="Enter username">

<textarea name="message" rows="4" cols="30">
</textarea></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <label>Username: </label>
                <input type="text" placeholder="Enter username" style="display: block; margin: 5px 0;"><br>
                <label>Message: </label>
                <textarea rows="4" cols="30" style="display: block; margin: 5px 0;"></textarea>
            </div>
        `
    },
    6: {
        title: "Lesson 6: Radio Buttons, Checkboxes, and Dropdowns",
        content: `
            <h3>Radio Buttons</h3>
            <pre><code><input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female</code></pre>
            <h3>Checkboxes</h3>
            <pre><code><input type="checkbox" name="hobby" value="reading"> Reading
<input type="checkbox" name="hobby" value="gaming"> Gaming</code></pre>
            <h3>Dropdown</h3>
            <pre><code><select name="country">
    <option value="ph">Philippines</option>
    <option value="us">USA</option>
</select></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p><strong>Gender:</strong>
                <input type="radio" name="gender" value="male"> Male
                <input type="radio" name="gender" value="female"> Female</p>
                <p><strong>Hobbies:</strong>
                <input type="checkbox" name="hobby" value="reading"> Reading
                <input type="checkbox" name="hobby" value="gaming"> Gaming</p>
                <p><strong>Country:</strong>
                <select><option>Philippines</option</option></select><option>USA></p>
            </div>
        `
    },
    7: {
        title: "Lesson 7: Feedback Forms and File Upload",
        content: `
            <h3>Feedback Form</h3>
            <pre><code><form>
  Name: <input type="text" name="name"><br>
  Message: <textarea name="message"></textarea><br>
  <input type="submit" value="Send">
</form></code></pre>
            <h3>File Upload</h3>
            <pre><code><input type="file" name="myfile" accept=".pdf,.doc,.docx"></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <form>
                    Name: <input type="text" style="margin: 5px 0;"><br>
                    Message: <textarea style="margin: 5px 0;"></textarea><br>
                    File: <input type="file" style="margin: 5px 0;">
                </form>
            </div>
        `
    }
};

// =======================
// 3RD QUARTER ICT LESSONS (Typography & Box Model)
// =======================
const lesson3rdQuarter = {
    1: {
        title: "Lesson 1: Typography",
        content: `
            <h3>CSS Font Properties</h3>
            <pre><code>p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: purple;
    font-weight: bold;
    font-style: italic;
}</code></pre>
            <h3>Text Properties</h3>
            <pre><code>h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-decoration: underline;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <h1 style="text-align: center; text-transform: uppercase; letter-spacing: 5px; text-decoration: underline;">Heading Text</h1>
                <p style="font-family: Arial, sans-serif; font-size: 18px; color: purple; font-weight: bold; font-style: italic;">
                    This is sample paragraph text with multiple font properties applied.
                </p>
            </div>
        `
    },
    2: {
        title: "Lesson 2: Indenting Text",
        content: `
            <h3>Text Indent</h3>
            <pre><code>p.indent {
    text-indent: 30px;
    line-height: 1.8;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p style="text-indent: 30px; line-height: 1.8;">
                    This is the first line of text with an indent. The text-indent property indents only the first line of a block-level element. The line-height property controls the spacing between lines of text.
                </p>
            </div>
        `
    },
    3: {
        title: "Lesson 3: Box Model",
        content: `
            <h3>Box Model Properties</h3>
            <pre><code>.box {
    margin: 20px;
    padding: 15px;
    border: 5px solid blue;
    background: lightyellow;
    width: 200px;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <div style="margin: 20px; padding: 15px; border: 5px solid blue; background: lightyellow; width: 200px;">
                    Content Area
                </div>
                <p style="font-size: 14px;"><strong>Box Model:</strong> Margin (outer) → Border → Padding → Content (inner)</p>
            </div>
        `
    },
    4: {
        title: "Lesson 4: Formatting Borders and Tables",
        content: `
            <h3>Background Properties</h3>
            <pre><code>.container {
    background-color: lightblue;
    background-image: url('pattern.png');
    background-repeat: repeat-x;
    background-position: center top;
}</code></pre>
            <h3>Float Property</h3>
            <pre><code>.image-float {
    float: left;
    margin-right: 15px;
}</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <div style="float: left; margin-right: 15px; padding: 10px; background: lightblue; border: 1px solid blue;">
                    Floating Box
                </div>
                <p>This text wraps around the floating box. The float property allows elements to be positioned to the left or right of their container.</p>
                <div style="clear: both;"></div>
            </div>
        `
    }
};

// =======================
// 4TH QUARTER ICT LESSONS (JavaScript)
// =======================
const lesson4thQuarter = {
    1: {
        title: "Lesson 1: Introduction to JavaScript",
        content: `
            <h3>JavaScript Basics</h3>
            <pre><code><script>
    document.write("Hello World!");
    alert("Welcome to my page!");
</script></code></pre>
            <h3>Variables in JavaScript</h3>
            <pre><code>var name = "John";
var age = 15;
var isStudent = true;

document.write("Name: " + name);</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p id="demo" style="color: blue; font-weight: bold;">Click the button to see JavaScript!</p>
                <button onclick="document.getElementById('demo').innerHTML = 'Hello World!'">Click Me</button>
            </div>
        `
    },
    2: {
        title: "Lesson 2: More About JavaScript",
        content: `
            <h3>JavaScript Functions</h3>
            <pre><code>function greet(name) {
    return "Hello, " + name + "!";
}

var message = greet("Student");
document.write(message);</code></pre>
            <h3>Events in JavaScript</h3>
            <pre><code><button onclick="alert('Button clicked!')">
    Click Me
</button></code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <button onclick="alert('Button clicked!')" style="padding: 10px 20px; background: blue; color: white; border: none;">Click Me!</button>
                <p id="output"></p>
            </div>
        `
    },
    3: {
        title: "Lesson 3: JavaScript Syntax",
        content: `
            <h3>DOM Methods</h3>
            <pre><code>// Get element by ID
var element = document.getElementById("myId");

// Write to document
document.write("New content");

// Change HTML content
element.innerHTML = "New text";</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p id="changeMe" style="color: red;">Original Text</p>
                <button onclick="document.getElementById('changeMe').innerHTML = 'Changed Text!'">Change Text</button>
            </div>
        `
    },
    4: {
        title: "Lesson 4: Variables and Operators",
        content: `
            <h3>Variables and Operators</h3>
            <pre><code>var x = 10;
var y = 5;
var sum = x + y;      // Addition
var diff = x - y;     // Subtraction
var product = x * y;  // Multiplication
var quotient = x / y; // Division

document.write("Sum: " + sum);</code></pre>
            <h3>String Concatenation</h3>
            <pre><code>var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;</code></pre>
            <h3>Sample Output:</h3>
            <div style="border: 1px solid #ccc; padding: 20px; background: #f9f9f9;">
                <p id="calcResult">Click to calculate!</p>
                <button onclick="document.getElementById('calcResult').innerHTML = '10 + 5 = 15'">Calculate</button>
            </div>
        `
    }
};

// Event content data for 2nd Quarter
const eventData = {
    1: {
        title: "Buwan ng Wika",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned that using our own language shows love and respect for our country and culture.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can use Filipino more when talking and writing, and encourage others to be proud of it too.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I helped decorate our classroom with Filipino designs and joined the program.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Buwan ng Wika helps us remember that our language is part of who we are as Filipinos.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps students understand the subject better and gives a fun way to apply what we learn.</li>
            </ol>
        `,
        image: "images/BW1.jpg"
    },
    2: {
        title: "Intramurals",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned that teamwork and effort are more important than just winning.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can work better with others and stay positive even if things don't go my way.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I joined my section's cheering team and supported my classmates in their matches.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Intramurals teaches you teamwork and discipline while keeping you active and healthy.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps us learn lessons like cooperation, leadership, and sportsmanship in a real setting.</li>
            </ol>
        `,
        image: "images/intra1.jpg"
    },
    3: {
        title: "Science Month",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned that science is everywhere and affects everything we do in our daily lives.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can observe things around me more carefully and ask questions about how things work.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I joined the science quiz and helped with our exhibit booth.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Science Month shows us how amazing and interesting science can be!</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It makes learning fun and helps us remember what we study in class.</li>
            </ol>
        `,
        image: "images/science1.jpg"
    },
    4: {
        title: "AP Month",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned about our country's history and the importance of being an active citizen.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can stay informed about current events and participate in community activities.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I joined the poster making contest and learned a lot about our nation.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say AP Month helps us understand our rights and responsibilities as Filipinos.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps us connect what we learn to real-world situations.</li>
            </ol>
        `,
        image: "images/ap1.jpg"
    },
    5: {
        title: "Teacher's Day",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned to appreciate all the hard work and dedication our teachers put in every day.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can show respect to all my teachers and always do my best in class.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I helped organize the program and gave letters to our teachers.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Teacher's Day is our way of saying thank you to those who teach us.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps us value each subject and the people who teach them.</li>
            </ol>
        `,
        image: "images/teacher1.jpg"
    },
    6: {
        title: "Cluster Meet",
        date: "October, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned that working with other schools helps us learn new things and make new friends.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can collaborate with others and be open to learning from different people.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I joined the athletic events and represented our school.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Cluster Meet is a fun way to compete and connect with other schools.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps us develop skills beyond the classroom.</li>
            </ol>
        `,
        image: "images/cluster1.jpg"
    },
    // 4th Quarter Events
    7: {
        title: "BOTB (Battle of the Bands)",
        date: "March, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned that music brings people together and showcases the talent of our fellow students.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can appreciate different genres of music and support my peers in their artistic pursuits.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I attended the event and cheered for the participating bands.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say BOTB is a competition where bands showcase their musical talents and creativity.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps students express themselves through arts and music.</li>
            </ol>
        `,
        image: "images/botb.jpg"
    },
    8: {
        title: "Noli Me Tangere",
        date: "March, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned about the significance of Jose Rizal's novel in Philippine history and its lessons about justice and patriotism.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can apply the lessons from Noli Me Tangere about fighting injustice and standing up for what is right.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I participated in the theatrical presentation and learned my role thoroughly.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Noli Me Tangere is a novel that exposes the injustices during Spanish colonization and inspires reform.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps bring literature to life and makes learning more engaging.</li>
            </ol>
        `,
        image: "images/noli.JPG"
    },
    9: {
        title: "Ped Xing (Pedestrian Crossing)",
        date: "March, 2025",
        reflection: `
            <h3>Reflection Questions</h3>
            <ol>
                <li><b>What is the most important thing I learned from the event?</b><br>
                I learned about road safety and the importance of following pedestrian rules to prevent accidents.</li><br>
                <li><b>How can I apply what I learned in real-life situations?</b><br>
                I can always use crosswalks and pedestrian lanes, and encourage others to do the same.</li><br>
                <li><b>Did I actively participate in the event? How?</b><br>
                Yes, I helped organize the safety awareness campaign and distributed flyers.</li><br>
                <li><b>If I were to teach this topic to a classmate, how would I explain it?</b><br>
                I'd say Ped Xing is an event that teaches students about pedestrian safety and responsible road behavior.</li><br>
                <li><b>Why is it important to have an event per subject?</b><br>
                It helps students understand practical safety rules that they can use every day.</li>
            </ol>
        `,
        image: "images/ped.jpg"
    }
};

// Functions to open modals for different quarters
function openLessonModal(num) {
    const lesson = lessonData[num];
    if (!lesson) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content;
        openModal();
    }
}

function openLesson1stQuarterModal(num) {
    const lesson = lesson1stQuarter[num];
    if (!lesson) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content;
        openModal();
    }
}

function openLesson3rdQuarterModal(num) {
    const lesson = lesson3rdQuarter[num];
    if (!lesson) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content;
        openModal();
    }
}

function openLesson4thQuarterModal(num) {
    const lesson = lesson4thQuarter[num];
    if (!lesson) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content;
        openModal();
    }
}

function openEventModal(num) {
    const event = eventData[num];
    if (!event) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalTitle && modalBody) {
        modalTitle.textContent = event.title;
        modalBody.innerHTML = `
            <p><strong>Date:</strong> ${event.date}</p>
            <div class="reflection-box">
                ${event.reflection}
            </div>
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
        `;
        openModal();
    }
}

// Original loadLesson function for AP content (kept for compatibility)
function loadLesson(num) {
    const contentBox = document.getElementById("lessonContent");
    if (!contentBox) return;

    switch (num) {
        case 1:
            contentBox.innerHTML = `
        <h2>Lesson 1: Mga Konsepto ng Pambansang Kaunlaran</h2>
        <ul>
          <li>Pagbabago – proseso ng pag-iiba sa lipunan at ekonomiya</li>
          <li>Pag-unlad – pagbabago tungo sa mataas na antas ng pamumuhay</li>
          <li>Pagsulong – pag-usad tungo sa layunin, pagpapaunlad ng kakayahan</li>
          <li>Ebolusyon – pagbabago sa loob ng mahabang panahon</li>
        </ul>
      `;
            break;

        case 2:
            contentBox.innerHTML = `
        <h2>Lesson 2: Dalawang Konsepto ng Pag-unlad (Todaro & Smith, 2012)</h2>
        <ul>
          <li>Tradisyunal – patuloy na pagtaas ng income per capita</li>
          <li>Makabago – malawakang pagbabago sa buong sistemang panlipunan</li>
        </ul>
      `;
            break;

        case 3:
            contentBox.innerHTML = `
        <h2>Lesson 3: Mga Salik at Palatandaan ng Pag-unlad</h2>
        <h3>Mga Salik</h3>
        <ul>
          <li>Likas na yaman</li>
          <li>Yamang-tao</li>
          <li>Kapital</li>
          <li>Teknolohiya at Inobasyon</li>
        </ul>
        <h3>Mga Palatandaan</h3>
        <ul>
          <li>Makatwiran at dinamikong kaayusan ng panlipunan</li>
          <li>Kasaganaan at kasarinlan</li>
          <li>Kalayaan sa kahirapan, hanapbuhay para sa lahat</li>
          <li>Sapat na mga lingkurang panlipunan</li>
          <li>Katarungang panlipunan</li>
        </ul>
      `;
            break;

        case 4:
            contentBox.innerHTML = `
        <h2>Lesson 4: Antas ng Kaunlaran ng Bansa</h2>
        <ul>
          <li>Maunlad na Bansa – mataas na GDP, income per capita, HDI</li>
          <li>Umuunlad na Bansa – may industriyang pinauunlad, hindi pantay ang GDP at HDI</li>
          <li>Papaunlad na Bansa – mababang antas ng agrikultura, GDP, income per capita, HDI</li>
        </ul>
      `;
            break;

        case 5:
            contentBox.innerHTML = `
        <h2>Lesson 5: Mga Tungkulin at Gampanin ng Mamamayan</h2>
        <h3>Tungkulin</h3>
        <ul>
          <li>Suportahan ang pamahalaan</li>
          <li>Sundin at igalang ang batas</li>
          <li>Alagaan ang kapaligiran</li>
          <li>Tumulong sa pagpuksa sa korapsyon</li>
          <li>Maging produktibo</li>
          <li>Tangkilikin ang produktong Pilipino</li>
        </ul>
        <h3>Gampanin</h3>
        <ul>
          <li>Pagbabayad ng buwis</li>
          <li>Tamang pagboto</li>
          <li>Pagnenegosyo at kooperatiba</li>
          <li>Pakikilahok sa pamamahala</li>
        </ul>
      `;
            break;

        case 6:
            contentBox.innerHTML = `
        <h2>Lesson 6: Agrikultura</h2>
        <p>Isang agham at sining na may kinalaman sa pagpaparami ng mga hayop at halaman.</p>
        <h3>Mga Gawain</h3>
        <ul>
          <li>Pagsasaka</li>
          <li>Pangingisda</li>
          <li>Paghahayupan</li>
          <li>Paggugubat</li>
        </ul>
        <h3>Kahalagahan</h3>
        <ul>
          <li>Pinagmumulan ng pagkain</li>
          <li>Hilaw na materyales</li>
          <li>Trabaho para sa Pilipino</li>
          <li>Dolyar para sa bansa</li>
        </ul>
      `;
            break;

        case 7:
            contentBox.innerHTML = `
        <h2>Lesson 7: Industriya</h2>
        <p>Tumutukoy sa pagproseso ng hilaw na materyal at paggawa ng produkto.</p>
        <h3>Sub-sektor</h3>
        <ul>
          <li>Pagmimina</li>
          <li>Pagmamanupaktura</li>
          <li>Konstruksyon</li>
          <li>Utilities</li>
        </ul>
      `;
            break;

        case 8:
            contentBox.innerHTML = `
        <h2>Lesson 8: Sektor ng Paglilingkod</h2>
        <p>Ang sektor na umaalalay sa produksyon, distribusyon, kalakalan, at pagkonsumo ng mga produkto sa loob o labas ng bansa.</p>
        <h3>Pormal na Sektor</h3>
        <ul>
          <li>Transportasyon, komunikasyon, imbakan</li>
          <li>Kalakalan</li>
          <li>Pananalapi (bangko, insurance, pamumuhunan)</li>
          <li>Paupahang bahay at real estate</li>
          <li>Paglilingkod ng pribado at pampubliko</li>
        </ul>
        <h3>Mga Ahensiya</h3>
        <ul>
          <li>DOLE – pangangalaga sa manggagawa</li>
          <li>OWWA – kapakanan ng OFW</li>
          <li>POEA – programa sa trabaho abroad</li>
          <li>TESDA – pagsasanay at kasanayan</li>
          <li>PRC – propesyonal na manggagawa</li>
          <li>CHED – pamatasan at kolehiyo</li>
        </ul>
        <h3>Mga Batas</h3>
        <ul>
          <li>Holiday Pay, Overtime Pay, Night Shift Differential</li>
          <li>RA 6727 – Wage Rationalization Act</li>
          <li>RA 1161 – Maternity Leave</li>
          <li>RA 8187 – Paternity Leave</li>
          <li>PD 851 – 13th Month Pay</li>
        </ul>
      `;
            break;

        case 9:
            contentBox.innerHTML = `
        <h2>Lesson 9: Impormal na Sektor</h2>
        <p>Sektor ng ekonomiya na walang pormal na dokumento o rehistro, kilala rin bilang underground economy.</p>
        <h3>Halimbawa</h3>
        <ul>
          <li>Nagtitinda sa kalsada</li>
          <li>Pedicab driver</li>
          <li>Karpintero</li>
          <li>Hindi rehistradong pampublikong sasakyan</li>
        </ul>
        <h3>Katangian</h3>
        <ul>
          <li>Hindi nakarehistro sa pamahalaan</li>
          <li>Hindi nagbabayad ng buwis</li>
          <li>Walang legal na balangkas</li>
        </ul>
        <h3>Kahalagahan</h3>
        <ul>
          <li>Sinasalo ang mamamayan na walang regular na trabaho</li>
          <li>Nagbibigay ng pagkakataon sa hanapbuhay</li>
          <li>Mura ang produkto at serbisyo</li>
        </ul>
        <h3>Mga Batas at Programa</h3>
        <ul>
          <li>RA 8425 – Social Reform and Poverty Alleviation Act</li>
          <li>RA 9710 – Magna Carta of Women</li>
          <li>PD 422 – Labor Code</li>
          <li>RA 7796 – TESDA Act</li>
          <li>RA 8282 – Social Security Act</li>
          <li>RA 7875 – National Health Insurance Act</li>
          <li>4Ps, DILP, SEA-K, ISLA, Cash-for-Work</li>
        </ul>
      `;
            break;

        case 10:
            contentBox.innerHTML = `
        <h2>Lesson 10: Kalakalang Panlabas</h2>
        <p>Palitan ng produkto at serbisyo sa pagitan ng mga bansa. Walang bansa ang kayang tugunan ang lahat ng pangangailangan nang walang tulong mula sa iba.</p>
        <h3>Uri</h3>
        <ul>
          <li>Bilateral – 2 bansa</li>
          <li>Bloc – organisasyon at bansa (APEC, ASEAN)</li>
        </ul>
        <h3>Dahilan</h3>
        <ul>
          <li>Pagkakaiba ng teknolohiya</li>
          <li>Pagkakaiba sa yaman</li>
          <li>Pagkakaiba sa panlasa</li>
          <li>Pagkakaiba sa halaga ng produksyon</li>
        </ul>
        <h3>Patakaran</h3>
        <ul>
          <li>Taripa – buwis sa inaangkat</li>
          <li>Kota – limitasyon sa produkto</li>
          <li>Subsidy – tulong ng gobyerno</li>
        </ul>
        <h3>Mga Organisasyon</h3>
        <ul>
          <li>WTO – World Trade Organization</li>
          <li>APEC – Asia-Pacific Economic Council</li>
          <li>ASEAN – Association of Southeast Asian Nations</li>
        </ul>
        <h3>Kabutihan</h3>
        <ul>
          <li>Mas maraming produkto sa pamilihan</li>
          <li>Mas mataas ang kalidad</li>
          <li>Lumalawak ang pamilihan</li>
        </ul>
        <h3>Di-kabutihan</h3>
        <ul>
          <li>Pagiging palaasa sa imported</li>
          <li>Pagkawala ng sariling pagkakakilanlan</li>
        </ul>
      `;
            break;
    }
}

