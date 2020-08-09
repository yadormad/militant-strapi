'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        afterFind([data]) {
            data.fullImageUrl = `${data.image.url}`;
            data.overlayImageUrl = `${data.image.formats.thumbnail.url}`;
        },
    },
};
