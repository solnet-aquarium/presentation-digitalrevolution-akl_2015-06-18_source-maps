# Source Maps

In which we look at how to make them, how they work, and how to use them

## What

> "De-referenced" uglified code

 -- http://stackoverflow.com/a/21719713/187954
 
> it's a way to map a combined/minified file back to an unbuilt state

 -- http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-realworld
 
## How

See `Gruntfile.js` or `gulpfile.js` in this repository to learn how to create them.

Notice that both methods add a line like this to the bottom of the mangled file:

`//# sourceMappingURL=/path/to/file.js.map`

This enables developer tools to map calls back to their location in original source files.

You may use the following header as an alternative:

`X-SourceMap: /path/to/file.js.map`

The source map file will only be downloaded if you have source maps enabled and your developer tools open. You'll also need to upload your original files to production so the developer tools can reference and display them when necessary.

These files will not be downloaded for users who do not have developer tools open.

### How they work

```JSON
{
    version : 3,
    file: "out.js",
    sourceRoot : "",
    sources: ["foo.js", "bar.js"],
    names: ["src", "maps", "are", "fun"],
    mappings: "AAgBC,SAAQ,CAAEA"
}
```

Above you can see that a source map is an object literal containing lots of juicy info:

 - Version number that the source map is based off
 - The file name of the generated code (Your minifed/combined production file)
 - sourceRoot allows you to prepend the sources with a folder structure – this is also a space saving technique
 - sources contains all the file names that were combined
 - names contains all variable/method names that appear throughout your code.
 - Lastly the mappings property is where the magic happens using Base64 VLQ values.

VLQ (Variable Length Quantity) is used along with encoding the value into a Base64 value. 

 - The mappings property is a big string. Within this string are semicolons (;) that represent a line number within the generated file. 
 -Within each line there are commas (,) that represent each segment within that line. 
 - Each of these segments is either 1, 4 or 5 in variable length fields. Some may appear longer but these contain continuation bits. 
 - Each segment builds upon the previous, which helps reduce the file size as each bit is relative to its previous segments. [Learn how Base64 VLQ keeps sourcemaps small][base64-vlq]

## Combining sourcemaps (Coffeescript + Normal JS)

Try https://github.com/rich-harris/sorcery, let me know how you get on :)

## Caveat

As Bennet discovered, breakpoints in Chrome will not work until a sourcemap has been loaded. This can make debugging events that happen at or shortly after page load tricky. In this case, you can disable souremaps temporarily in Chrome.

## References

 - http://www.html5rocks.com/en/tutorials/developertools/sourcemaps
 - https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

[base64-vlq]: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-base64vlq
