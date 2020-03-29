const { celebrate, Segments, Joi } = require('celebrate');

const validateHeader = {
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}

module.exports = {
    listValidator() {
        return celebrate({
            ...validateHeader,
            [Segments.QUERY]: {
                page: Joi.number(),
            }
        });  
    },

    createValidator() {
        return celebrate({
            ...validateHeader,
            [Segments.BODY]: {
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().required()
            }
        });
    },

    deleteValidator() {
        return celebrate({
            ...validateHeader,
            [Segments.PARAMS]: {
                id: Joi.number().required(),
            }
        });
    }
}