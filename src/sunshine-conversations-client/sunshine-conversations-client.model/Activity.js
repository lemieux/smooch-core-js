/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.4
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
import ActivityAllOf from './ActivityAllOf';
import ActivityTypes from './ActivityTypes';
import AuthorWebhook from './AuthorWebhook';
import SourceWebhook from './SourceWebhook';

/**
 * The Activity model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Activity
 * @version 14.3.4
 */
class Activity {
    /**
     * Constructs a new <code>Activity</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Activity
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf
     */
    constructor() { 
        ActivityTypes.initialize(this);ActivityAllOf.initialize(this);
        Activity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} The populated <code>Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Activity();
            ActivityTypes.constructFromObject(data, obj);
            ActivityAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWebhook);
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = AuthorWebhook.constructFromObject(data['author']);
            }
        }
        return obj;
    }

/**
     * Returns If the author type is `user`, only `conversation:read` is supported.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets If the author type is `user`, only `conversation:read` is supported.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity.TypeEnum} type If the author type is `user`, only `conversation:read` is supported.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The source of the activity.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the activity.
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
     */
    setAuthor(author) {
        this['author'] = author;
    }

}

/**
 * If the author type is `user`, only `conversation:read` is supported.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity.TypeEnum} type
 */
Activity.prototype['type'] = undefined;

/**
 * The source of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
Activity.prototype['source'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
 */
Activity.prototype['author'] = undefined;


// Implement ActivityTypes interface:
/**
 * If the author type is `user`, only `conversation:read` is supported.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum} type
 */
ActivityTypes.prototype['type'] = undefined;
// Implement ActivityAllOf interface:
/**
 * The source of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
ActivityAllOf.prototype['source'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
 */
ActivityAllOf.prototype['author'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Activity['TypeEnum'] = {

    /**
     * value: "conversation:read"
     * @const
     */
    "conversation:read": "conversation:read",

    /**
     * value: "typing:start"
     * @const
     */
    "typing:start": "typing:start",

    /**
     * value: "typing:stop"
     * @const
     */
    "typing:stop": "typing:stop"
};



export default Activity;

