var fs = require("fs");
var path = require("path");
var ShopifyAPI = require("shopify-node-api");

var pageId = process.env.SHOPIFY_PAGE_ID;
var Shopify = new ShopifyAPI({
    shop: process.env.SHOPIFY_SHOP,
    shopify_api_key: process.env.SHOPIFY_API_KEY,
    access_token: process.env.SHOPIFY_API_PASSWORD
});

var indexPagePath = path.join(__dirname, "..", "dist", "index.html");
fs.readFile(indexPagePath, "utf-8", function (err, data) {
    if (!err) {
        data = "<script> window.imageStorage = '"+process.argv[2]+"'; window.liveSite = true; </script>" + data;
        data = data.replace(/<base\shref=[^>]*>/gi, '<base href="/pages/product-registration"/>');
        var put_data = {
            page: {
                body_html: data
            }
        };
        Shopify.put("/admin/pages/" + pageId + ".json", put_data, function (err, data, headers) {
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

