let one = 
`&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;title&gt;Document

&lt;body&gt;
    guvi
    &lt;/title&gt;
    &lt;/head&gt;
    &lt;div&gt;
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        &lt;div&gt;
            &lt;div&gt;
                Guvi Geek Network
            &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;`;

let oneAns = 
`&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;title&gt;
        Document guvi
    &lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div&gt;
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    &lt;/div&gt;
    &lt;div&gt;
        Guvi Geek Network
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;`

let two = 
`&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;title&gt;Document

&lt;body&gt;
    guvi
    &lt;/head&gt;
    &lt;div&gt;
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        &lt;div&gt;
            &lt;div&gt;
                Guvi Geek Network
            &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;

`

document.getElementById('one').innerHTML = one;
document.getElementById('oneAns').innerHTML = oneAns;

document.getElementById('two').innerHTML = two;
document.getElementById('twoAns').innerHTML = oneAns;