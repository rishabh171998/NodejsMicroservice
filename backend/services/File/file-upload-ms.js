const {ExpressApp}=require('../../base/base-ms');
const {createErrorResponse}=require('../../utils/error-util');
const { initMongoConnect } = require('../../utils/mongoDB-util');

const asMain=(require.main===module)

async function initResources(context)
{
    return await initMongoConnect(context);
}
const COLLECTION_NAME='PINS';
class FileApp extends ExpressApp
{
    constructor(context)
    {
        super(context);
        this.options=context;
        this.db=context.db;
    }
    registerRoutes()
    {
        super.registerRoutes();
        const invokeAsync=this.invokeAsync.bind(this);
        this.router.post('/uploadFile',invoke(this.handleFileUpload()));

    }
}