/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.6.2
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
import MessagebirdAllOf from './MessagebirdAllOf';
import Status from './Status';

/**
 * The Messagebird model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Messagebird
 * @version 12.6.2
 */
class Messagebird {
    /**
     * Constructs a new <code>Messagebird</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Messagebird
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     * @param accessKey {String} The public API key of your MessageBird account.
     * @param signingKey {String} The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param originator {String} Sunshine Conversations will receive all messages sent to this phone number.
     */
    constructor(type, accessKey, signingKey, originator) { 
        Integration.initialize(this, type);MessagebirdAllOf.initialize(this, accessKey, signingKey, originator);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Messagebird.initialize(this, type, accessKey, signingKey, originator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, accessKey, signingKey, originator) { 
        obj['accessKey'] = accessKey;
        obj['signingKey'] = signingKey;
        obj['originator'] = originator;
    }

    /**
     * Constructs a <code>Messagebird</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Messagebird} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Messagebird} The populated <code>Messagebird</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Messagebird();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            MessagebirdAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accessKey')) {
                obj['accessKey'] = ApiClient.convertToType(data['accessKey'], 'String');
            }
            if (data.hasOwnProperty('signingKey')) {
                obj['signingKey'] = ApiClient.convertToType(data['signingKey'], 'String');
            }
            if (data.hasOwnProperty('originator')) {
                obj['originator'] = ApiClient.convertToType(data['originator'], 'String');
            }
            if (data.hasOwnProperty('webhookSecret')) {
                obj['webhookSecret'] = ApiClient.convertToType(data['webhookSecret'], 'String');
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
     * Returns To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     * @param {String} type To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The public API key of your MessageBird account.
     * @return {String}
     */
    getAccessKey() {
        return this.accessKey;
    }

    /**
     * Sets The public API key of your MessageBird account.
     * @param {String} accessKey The public API key of your MessageBird account.
     */
    setAccessKey(accessKey) {
        this['accessKey'] = accessKey;
    }
/**
     * Returns The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @return {String}
     */
    getSigningKey() {
        return this.signingKey;
    }

    /**
     * Sets The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param {String} signingKey The signing key of your MessageBird account. Used to validate the webhooks' origin.
     */
    setSigningKey(signingKey) {
        this['signingKey'] = signingKey;
    }
/**
     * Returns Sunshine Conversations will receive all messages sent to this phone number.
     * @return {String}
     */
    getOriginator() {
        return this.originator;
    }

    /**
     * Sets Sunshine Conversations will receive all messages sent to this phone number.
     * @param {String} originator Sunshine Conversations will receive all messages sent to this phone number.
     */
    setOriginator(originator) {
        this['originator'] = originator;
    }
/**
     * Returns The secret that is used to configure webhooks in MessageBird.
     * @return {String}
     */
    getWebhookSecret() {
        return this.webhookSecret;
    }

    /**
     * Sets The secret that is used to configure webhooks in MessageBird.
     * @param {String} webhookSecret The secret that is used to configure webhooks in MessageBird.
     */
    setWebhookSecret(webhookSecret) {
        this['webhookSecret'] = webhookSecret;
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
 * To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
 * @member {String} type
 * @default 'messagebird'
 */
Messagebird.prototype['type'] = 'messagebird';

/**
 * The public API key of your MessageBird account.
 * @member {String} accessKey
 */
Messagebird.prototype['accessKey'] = undefined;

/**
 * The signing key of your MessageBird account. Used to validate the webhooks' origin.
 * @member {String} signingKey
 */
Messagebird.prototype['signingKey'] = undefined;

/**
 * Sunshine Conversations will receive all messages sent to this phone number.
 * @member {String} originator
 */
Messagebird.prototype['originator'] = undefined;

/**
 * The secret that is used to configure webhooks in MessageBird.
 * @member {String} webhookSecret
 */
Messagebird.prototype['webhookSecret'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Messagebird.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Messagebird.prototype['defaultResponder'] = undefined;


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
// Implement MessagebirdAllOf interface:
/**
 * To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
 * @member {String} type
 * @default 'messagebird'
 */
MessagebirdAllOf.prototype['type'] = 'messagebird';
/**
 * The public API key of your MessageBird account.
 * @member {String} accessKey
 */
MessagebirdAllOf.prototype['accessKey'] = undefined;
/**
 * The signing key of your MessageBird account. Used to validate the webhooks' origin.
 * @member {String} signingKey
 */
MessagebirdAllOf.prototype['signingKey'] = undefined;
/**
 * Sunshine Conversations will receive all messages sent to this phone number.
 * @member {String} originator
 */
MessagebirdAllOf.prototype['originator'] = undefined;
/**
 * The secret that is used to configure webhooks in MessageBird.
 * @member {String} webhookSecret
 */
MessagebirdAllOf.prototype['webhookSecret'] = undefined;
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




export default Messagebird;

