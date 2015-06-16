# Source Maps

In which we look at how to make them, how they work, and how to use them

## What

> "De-referenced" uglified code

 -- http://stackoverflow.com/a/21719713/187954
 
> it's a way to map a combined/minified file back to an unbuilt state

 -- http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-realworld
 
## How

Using `grunt`, the `grunt-contrib-concat` and `grunt-contrib-uglify` tasks must be combined to ensure redictable order of script inclusion.
