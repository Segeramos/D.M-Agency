'use strict';

/**
 * service-a router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-a.service-a');
