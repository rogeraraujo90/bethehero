const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function() {
    return celebrate({
        [Segments.BODY]: {
            id: Joi.string().required(),    
        }
    });
}