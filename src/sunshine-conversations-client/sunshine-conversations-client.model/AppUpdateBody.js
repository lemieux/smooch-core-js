/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.6.0
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
import AppSettings from './AppSettings';

/**
 * The AppUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody
 * @version 9.6.0
 */
class AppUpdateBody {
    /**
     * Constructs a new <code>AppUpdateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody
     */
    constructor() { 
        
        AppUpdateBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} The populated <code>AppUpdateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppUpdateBody();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = AppSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The friendly name of the app.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets The friendly name of the app.
     * @param {String} displayName The friendly name of the app.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings}
     */
    getSettings() {
        return this.settings;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} settings
     */
    setSettings(settings) {
        this['settings'] = settings;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The friendly name of the app.
 * @member {String} displayName
 */
AppUpdateBody.prototype['displayName'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} settings
 */
AppUpdateBody.prototype['settings'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
AppUpdateBody.prototype['metadata'] = undefined;






export default AppUpdateBody;

