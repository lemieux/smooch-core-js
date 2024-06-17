/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import App from './App';

/**
 * The AppResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppResponse
 * @version 12.6.0
 */
class AppResponse {
    /**
     * Constructs a new <code>AppResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse
     */
    constructor() { 
        
        AppResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} The populated <code>AppResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppResponse();

            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], App);
            }
        }
        return obj;
    }

/**
     * Returns The app.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/App}
     */
    getApp() {
        return this.app;
    }

    /**
     * Sets The app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/App} app The app.
     */
    setApp(app) {
        this['app'] = app;
    }

}

/**
 * The app.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/App} app
 */
AppResponse.prototype['app'] = undefined;






export default AppResponse;

