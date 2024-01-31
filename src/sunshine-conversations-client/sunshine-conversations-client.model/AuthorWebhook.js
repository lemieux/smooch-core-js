/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.2
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
import User from './User';

/**
 * The AuthorWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook
 * @version 12.2.2
 */
class AuthorWebhook {
    /**
     * Constructs a new <code>AuthorWebhook</code>.
     * The author of the activity.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum} The `type` of the author.
     */
    constructor(type) { 
        
        AuthorWebhook.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>AuthorWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} The populated <code>AuthorWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthorWebhook();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
        }
        return obj;
    }

/**
     * Returns The `type` of the author.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The `type` of the author.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum} type The `type` of the author.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The id of the user. Only supported when author `type` is `user`.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user. Only supported when author `type` is `user`.
     * @param {String} userId The id of the user. Only supported when author `type` is `user`.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns The user that authored the message or activity. `profile` is included in the payload if the `includeFullUser` option is enabled.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user that authored the message or activity. `profile` is included in the payload if the `includeFullUser` option is enabled.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user that authored the message or activity. `profile` is included in the payload if the `includeFullUser` option is enabled.
     */
    setUser(user) {
        this['user'] = user;
    }

}

/**
 * The `type` of the author.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum} type
 */
AuthorWebhook.prototype['type'] = undefined;

/**
 * The id of the user. Only supported when author `type` is `user`.
 * @member {String} userId
 */
AuthorWebhook.prototype['userId'] = undefined;

/**
 * The user that authored the message or activity. `profile` is included in the payload if the `includeFullUser` option is enabled.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
AuthorWebhook.prototype['user'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AuthorWebhook['TypeEnum'] = {

    /**
     * value: "business"
     * @const
     */
    "business": "business",

    /**
     * value: "user"
     * @const
     */
    "user": "user"
};



export default AuthorWebhook;

