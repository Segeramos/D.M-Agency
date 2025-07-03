'use strict';

/**
 * service-a controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-a.service-a');
