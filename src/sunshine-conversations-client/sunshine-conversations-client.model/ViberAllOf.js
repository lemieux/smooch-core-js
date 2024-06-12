/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.1
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

/**
 * The ViberAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
 * @version 12.5.1
 */
class ViberAllOf {
    /**
     * Constructs a new <code>ViberAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
     * @param token {String} Viber Public Account token.
     */
    constructor(token) { 
        
        ViberAllOf.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>ViberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf} The populated <code>ViberAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViberAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Viber Public Account token.
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * Sets Viber Public Account token.
     * @param {String} token Viber Public Account token.
     */
    setToken(token) {
        this['token'] = token;
    }
/**
     * Returns Unique URI of the Viber account.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets Unique URI of the Viber account.
     * @param {String} uri Unique URI of the Viber account.
     */
    setUri(uri) {
        this['uri'] = uri;
    }
/**
     * Returns Unique ID of the Viber account.
     * @return {String}
     */
    getAccountId() {
        return this.accountId;
    }

    /**
     * Sets Unique ID of the Viber account.
     * @param {String} accountId Unique ID of the Viber account.
     */
    setAccountId(accountId) {
        this['accountId'] = accountId;
    }

}

/**
 * To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'viber'
 */
ViberAllOf.prototype['type'] = 'viber';

/**
 * Viber Public Account token.
 * @member {String} token
 */
ViberAllOf.prototype['token'] = undefined;

/**
 * Unique URI of the Viber account.
 * @member {String} uri
 */
ViberAllOf.prototype['uri'] = undefined;

/**
 * Unique ID of the Viber account.
 * @member {String} accountId
 */
ViberAllOf.prototype['accountId'] = undefined;






export default ViberAllOf;

