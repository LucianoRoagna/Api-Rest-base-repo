const ExpServer = require('./server/expServer')
const config = require('../config');
const logger = require('./logger')
module.exports = async () => {
    const server = new ExpServer()
    logger.info('Express loaded')
    server.start();
    logger.info(`Server listening on port ${config.port}`)
}