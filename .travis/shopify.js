var fs = require("fs");
var path = require("path");
var ShopifyAPI = require("shopify-node-api");
var striptags = require('striptags');
var args = process.argv.slice(2);

var Shopify = new ShopifyAPI({
  shop: args[0],
  shopify_api_key: args[1],
  access_token: args[2]
});

var indexPagePath = path.join(__dirname, "..", "dist", "index.html");
fs.readFile(indexPagePath, "utf-8", function (err, data) {
  if (!err) {
    var put_data = {
      page: {
        body_html: striptags(data, ['app-root', 'base', 'script'])
      }
    };
    Shopify.put("/admin/pages/" + args[3]+ ".json", put_data, function (err, data, headers) {
      if (err) {
        console.error("Failed to Deploy during API call");
        return 0;
      } else {
        console.log("Deploy Success");
        return 1;
      }
    });
  } else {
    console.error("Error reading file: ", err);
  }
});
