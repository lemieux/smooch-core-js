/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.0.0
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
import AppleAllOf from './AppleAllOf';
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';

/**
 * The Apple model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Apple
 * @version 14.0.0
 */
class Apple {
    /**
     * Constructs a new <code>Apple</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Apple
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     * @param businessId {String} Apple Messages for Business ID.
     * @param apiSecret {String} Your Apple API secret which is tied to your Messaging Service Provider.
     * @param mspId {String} Your Messaging Service Provider ID.
     */
    constructor(type, businessId, apiSecret, mspId) { 
        Integration.initialize(this, type);AppleAllOf.initialize(this, businessId, apiSecret, mspId);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Apple.initialize(this, type, businessId, apiSecret, mspId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, businessId, apiSecret, mspId) { 
        obj['businessId'] = businessId;
        obj['apiSecret'] = apiSecret;
        obj['mspId'] = mspId;
    }

    /**
     * Constructs a <code>Apple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Apple} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Apple} The populated <code>Apple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Apple();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            AppleAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('businessId')) {
                obj['businessId'] = ApiClient.convertToType(data['businessId'], 'String');
            }
            if (data.hasOwnProperty('apiSecret')) {
                obj['apiSecret'] = ApiClient.convertToType(data['apiSecret'], 'String');
            }
            if (data.hasOwnProperty('mspId')) {
                obj['mspId'] = ApiClient.convertToType(data['mspId'], 'String');
            }
            if (data.hasOwnProperty('authenticationMessageSecret')) {
                obj['authenticationMessageSecret'] = ApiClient.convertToType(data['authenticationMessageSecret'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponder')) {
                obj['defaultResponder'] = DefaultResponderDefaultResponder.constructFromObject(data['defaultResponder']);
            }
        }
        return obj;
    }

/**
     * Returns To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     * @param {String} type To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Apple Messages for Business ID.
     * @return {String}
     */
    getBusinessId() {
        return this.businessId;
    }

    /**
     * Sets Apple Messages for Business ID.
     * @param {String} businessId Apple Messages for Business ID.
     */
    setBusinessId(businessId) {
        this['businessId'] = businessId;
    }
/**
     * Returns Your Apple API secret which is tied to your Messaging Service Provider.
     * @return {String}
     */
    getApiSecret() {
        return this.apiSecret;
    }

    /**
     * Sets Your Apple API secret which is tied to your Messaging Service Provider.
     * @param {String} apiSecret Your Apple API secret which is tied to your Messaging Service Provider.
     */
    setApiSecret(apiSecret) {
        this['apiSecret'] = apiSecret;
    }
/**
     * Returns Your Messaging Service Provider ID.
     * @return {String}
     */
    getMspId() {
        return this.mspId;
    }

    /**
     * Sets Your Messaging Service Provider ID.
     * @param {String} mspId Your Messaging Service Provider ID.
     */
    setMspId(mspId) {
        this['mspId'] = mspId;
    }
/**
     * Returns A secret used to create the state value when sending Apple authentication 2.0 messages
     * @return {String}
     */
    getAuthenticationMessageSecret() {
        return this.authenticationMessageSecret;
    }

    /**
     * Sets A secret used to create the state value when sending Apple authentication 2.0 messages
     * @param {String} authenticationMessageSecret A secret used to create the state value when sending Apple authentication 2.0 messages
     */
    setAuthenticationMessageSecret(authenticationMessageSecret) {
        this['authenticationMessageSecret'] = authenticationMessageSecret;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     */
    setDefaultResponderId(defaultResponderId) {
        this['defaultResponderId'] = defaultResponderId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder}
     */
    getDefaultResponder() {
        return this.defaultResponder;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
     */
    setDefaultResponder(defaultResponder) {
        this['defaultResponder'] = defaultResponder;
    }

}

/**
 * To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'apple'
 */
Apple.prototype['type'] = 'apple';

/**
 * Apple Messages for Business ID.
 * @member {String} businessId
 */
Apple.prototype['businessId'] = undefined;

/**
 * Your Apple API secret which is tied to your Messaging Service Provider.
 * @member {String} apiSecret
 */
Apple.prototype['apiSecret'] = undefined;

/**
 * Your Messaging Service Provider ID.
 * @member {String} mspId
 */
Apple.prototype['mspId'] = undefined;

/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
Apple.prototype['authenticationMessageSecret'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Apple.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Apple.prototype['defaultResponder'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement AppleAllOf interface:
/**
 * To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'apple'
 */
AppleAllOf.prototype['type'] = 'apple';
/**
 * Apple Messages for Business ID.
 * @member {String} businessId
 */
AppleAllOf.prototype['businessId'] = undefined;
/**
 * Your Apple API secret which is tied to your Messaging Service Provider.
 * @member {String} apiSecret
 */
AppleAllOf.prototype['apiSecret'] = undefined;
/**
 * Your Messaging Service Provider ID.
 * @member {String} mspId
 */
AppleAllOf.prototype['mspId'] = undefined;
/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
AppleAllOf.prototype['authenticationMessageSecret'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;




export default Apple;

