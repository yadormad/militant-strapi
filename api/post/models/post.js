'use strict';
var os = require("os");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        afterFind(data, params) {
            console.log(params);
            data.forEach(post => {
                post.image = {
                    fullImageUrl: `${post.image.url}`,
                    overlayImageUrl: `${post.image.formats.thumbnail.url}`,
                }
            });
        },
        afterFindOne(post) {
            post.image = {
                fullImageUrl: `${post.image.url}`,
                overlayImageUrl: `${post.image.formats.thumbnail.url}`,
            }
        },
    },
};
