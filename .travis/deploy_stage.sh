#!/bin/sh
echo "Deploying to Shopify..."
node ./.travis/shopify_stage.js
exit 0
