const {constants} = require("../constants")

const errorHandler = (err, req, res, next) =>{
    
    const statusCode = res.statusCode ? res.statusCode :500;
    res.json({message:err.message, stackTrace:err.stack});
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({title:"not found", message:err.message, stackTrace:err.stack});
            break;
        case constants.VALIDATION_ERR:
            res.json({title:"validation failed", message:err.message, stackTrace:err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title:"un authorized", message:err.message, stackTrace:err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title:"forbidden", message:err.message, stackTrace:err.stack});
            break;
        case constants.SERVER_ERR:
            res.json({title:"servor error", message:err.message, stackTrace:err.stack});
            break;
    
        default:
            console.log("no error");
            break;
    }
};

module.exports = errorHandler;