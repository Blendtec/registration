#!/bin/sh
echo "Deploying to Shopify..."
node ./.travis/shopify.js $1
exit 0
