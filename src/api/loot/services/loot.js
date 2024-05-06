'use strict';

/**
 * loot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loot.loot');
