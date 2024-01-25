---
title: Markdown Cheat Sheet
description: Syntaxbeschreibung Markdown
permalink: posts/{{ page.fileSlug | slug }}.html
date: 2022-10-06
tags:
- text
- www
---

This Markdown [cheat sheet](https://www.markdownguide.org/cheat-sheet/) provides a quick overview of all the Markdown syntax elements. 
It can’t cover every edge case, so if you need more information about any of these elements, 
refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) 
and [extended syntax](https://www.markdownguide.org/extended-syntax).


## Basic Syntax

These are the elements outlined in John Gruber’s original design document. 
All Markdown applications support these elements.
```
# H1 Heading
## H2 Heading
### H3 Heading
**bold text**
*italicized text*
> blockquote
`code`
1. ordered item 
- unordered item
[Link text](https://www.example.com)
[Link text][number]
[number]: <https://www.example.com> "link title"
![alt image text](https://www.example.com/images/tux.png)
--- (Horizontal Rule)
```

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.
```
~~Strikethru text~~
==highlighted text==.
(Subscript) H~2~O
(Superscript) X^2^
(Emoji) :joy:

definition term
: definition text

| Table | Header  |
| ----- | ------- |
| row   | content |
| row   | content |

	```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
	```
- [x] task list checked
- [ ] task list unchecked

Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.
```
---

### Extension working in Eleventy

~~Strikethru text~~  
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
| Table | Header |
| ----- | ------ |
| row   | content |
| row   | content |

### Extension failing in Eleventy

==highlighted text==  
(Subscript) H~2~O  
(Superscript) X^2^  
(Emoji) :joy:  

definition term  
: definition text

- [x] task list checked
- [ ] task list unchecked

Here's a sentence with a footnote. [^1]  
[^1]: This is the footnote.
