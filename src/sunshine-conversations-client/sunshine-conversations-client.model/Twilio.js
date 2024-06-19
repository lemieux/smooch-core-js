/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.1
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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';
import TwilioAllOf from './TwilioAllOf';

/**
 * The Twilio model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Twilio
 * @version 12.6.1
 */
class Twilio {
    /**
     * Constructs a new <code>Twilio</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Twilio
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param accountSid {String} Twilio Account SID.
     * @param authToken {String} Twilio Auth Token.
     */
    constructor(type, accountSid, authToken) { 
        Integration.initialize(this, type);TwilioAllOf.initialize(this, accountSid, authToken);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Twilio.initialize(this, type, accountSid, authToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, accountSid, authToken) { 
        obj['accountSid'] = accountSid;
        obj['authToken'] = authToken;
    }

    /**
     * Constructs a <code>Twilio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Twilio} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Twilio} The populated <code>Twilio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Twilio();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            TwilioAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accountSid')) {
                obj['accountSid'] = ApiClient.convertToType(data['accountSid'], 'String');
            }
            if (data.hasOwnProperty('authToken')) {
                obj['authToken'] = ApiClient.convertToType(data['authToken'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberSid')) {
                obj['phoneNumberSid'] = ApiClient.convertToType(data['phoneNumberSid'], 'String');
            }
            if (data.hasOwnProperty('messagingServiceSid')) {
                obj['messagingServiceSid'] = ApiClient.convertToType(data['messagingServiceSid'], 'String');
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
     * Returns To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Twilio Account SID.
     * @return {String}
     */
    getAccountSid() {
        return this.accountSid;
    }

    /**
     * Sets Twilio Account SID.
     * @param {String} accountSid Twilio Account SID.
     */
    setAccountSid(accountSid) {
        this['accountSid'] = accountSid;
    }
/**
     * Returns Twilio Auth Token.
     * @return {String}
     */
    getAuthToken() {
        return this.authToken;
    }

    /**
     * Sets Twilio Auth Token.
     * @param {String} authToken Twilio Auth Token.
     */
    setAuthToken(authToken) {
        this['authToken'] = authToken;
    }
/**
     * Returns SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @return {String}
     */
    getPhoneNumberSid() {
        return this.phoneNumberSid;
    }

    /**
     * Sets SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @param {String} phoneNumberSid SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     */
    setPhoneNumberSid(phoneNumberSid) {
        this['phoneNumberSid'] = phoneNumberSid;
    }
/**
     * Returns SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @return {String}
     */
    getMessagingServiceSid() {
        return this.messagingServiceSid;
    }

    /**
     * Sets SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @param {String} messagingServiceSid SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     */
    setMessagingServiceSid(messagingServiceSid) {
        this['messagingServiceSid'] = messagingServiceSid;
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
 * To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'twilio'
 */
Twilio.prototype['type'] = 'twilio';

/**
 * Twilio Account SID.
 * @member {String} accountSid
 */
Twilio.prototype['accountSid'] = undefined;

/**
 * Twilio Auth Token.
 * @member {String} authToken
 */
Twilio.prototype['authToken'] = undefined;

/**
 * SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} phoneNumberSid
 */
Twilio.prototype['phoneNumberSid'] = undefined;

/**
 * SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} messagingServiceSid
 */
Twilio.prototype['messagingServiceSid'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Twilio.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Twilio.prototype['defaultResponder'] = undefined;


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
// Implement TwilioAllOf interface:
/**
 * To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'twilio'
 */
TwilioAllOf.prototype['type'] = 'twilio';
/**
 * Twilio Account SID.
 * @member {String} accountSid
 */
TwilioAllOf.prototype['accountSid'] = undefined;
/**
 * Twilio Auth Token.
 * @member {String} authToken
 */
TwilioAllOf.prototype['authToken'] = undefined;
/**
 * SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} phoneNumberSid
 */
TwilioAllOf.prototype['phoneNumberSid'] = undefined;
/**
 * SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} messagingServiceSid
 */
TwilioAllOf.prototype['messagingServiceSid'] = undefined;
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




export default Twilio;

