const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function() {
    return celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown()
    });
}