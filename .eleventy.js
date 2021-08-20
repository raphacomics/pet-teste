module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/bootstrap.min.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');


    return {
        dir: {
          input: "src",
          output: "public"
        }
      }
      
}