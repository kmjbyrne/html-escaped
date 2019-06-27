[![Build Status](https://travis-ci.org/kmjbyrne/html-escaped.svg?branch=master)](https://travis-ci.org/kmjbyrne/html-escaped)

# HTML Escaped

Micro utility package for escaping coded HTML blocks.

The script can be used automatically using a class reference or manually
using JavaScript code on the fly.

A common usage for this type of escaping is documenting HTML within HTML pages
without relying on server side rendering. The library manages whitespace before
the desired nodes so that pre/code blocks can be used and no further work is
required to have the desired output.

## Usage

### Automatically

Consider the following example for an outer div with an inner div that requires
escaping. By declaring *html-escaped-code-block* the entire tree from that
node downwards will be broken into escaped character format.

```html

<div class="container">
    <div class="inner-class html-escaped-code-block">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </div>
</div>
```

Turns into

```html

<div class="container">
    <div class="inner-class html-escaped-code-block">
        &lt;section&gt;&lt;/section&gt;
        &lt;section&gt;&lt;/section&gt;
        &lt;section&gt;&lt;/section&gt;
        &lt;section&gt;&lt;/section&gt;
    </div>
</div>
```

### Manually

```javascript

// Will escape the entire body of the document
HTMLEscape.do(document.body);


// Will escape the html for and including the div with some id
HTMLEscape.do(document.getElementById('some-id-on-an-element'));
