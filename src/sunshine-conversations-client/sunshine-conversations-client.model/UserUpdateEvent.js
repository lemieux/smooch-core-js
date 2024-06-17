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
import EventSubSchema from './EventSubSchema';
import UserUpdateEventAllOf from './UserUpdateEventAllOf';
import UserUpdateEventAllOfPayload from './UserUpdateEventAllOfPayload';

/**
 * The UserUpdateEvent model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEvent
 * @version 12.6.0
 */
class UserUpdateEvent {
    /**
     * Constructs a new <code>UserUpdateEvent</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEvent
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/EventSubSchema
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOf
     */
    constructor() { 
        EventSubSchema.initialize(this);UserUpdateEventAllOf.initialize(this);
        UserUpdateEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdateEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEvent} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEvent} The populated <code>UserUpdateEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateEvent();
            EventSubSchema.constructFromObject(data, obj);
            UserUpdateEventAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = UserUpdateEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
     * @param {String} id The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
     * @param {String} type The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @return {String}
     */
    getCreatedAt() {
        return this.createdAt;
    }

    /**
     * Sets A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @param {String} createdAt A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     */
    setCreatedAt(createdAt) {
        this['createdAt'] = createdAt;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
 * @member {String} id
 */
UserUpdateEvent.prototype['id'] = undefined;

/**
 * The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
 * @member {String} type
 */
UserUpdateEvent.prototype['type'] = undefined;

/**
 * A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
 * @member {String} createdAt
 */
UserUpdateEvent.prototype['createdAt'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} payload
 */
UserUpdateEvent.prototype['payload'] = undefined;


// Implement EventSubSchema interface:
/**
 * The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
 * @member {String} id
 */
EventSubSchema.prototype['id'] = undefined;
/**
 * The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
 * @member {String} type
 */
EventSubSchema.prototype['type'] = undefined;
/**
 * A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
 * @member {String} createdAt
 */
EventSubSchema.prototype['createdAt'] = undefined;
// Implement UserUpdateEventAllOf interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} payload
 */
UserUpdateEventAllOf.prototype['payload'] = undefined;




export default UserUpdateEvent;

