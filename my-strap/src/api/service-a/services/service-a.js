'use strict';

/**
 * service-a service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-a.service-a');
