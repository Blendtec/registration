#!/bin/sh
echo "Deploying to Shopify..."
node ./.travis/shopify_stage.js $1
exit 0
