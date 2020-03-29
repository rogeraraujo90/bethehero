const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function() {
    return celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            whatsapp: Joi.string().required().min(10).max(13),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        }
    });
}