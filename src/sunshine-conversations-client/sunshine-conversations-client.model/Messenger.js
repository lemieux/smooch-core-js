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
import MessengerAllOf from './MessengerAllOf';
import Status from './Status';

/**
 * The Messenger model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Messenger
 * @version 12.6.2
 */
class Messenger {
    /**
     * Constructs a new <code>Messenger</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @param pageAccessToken {String} A Facebook Page Access Token.
     * @param appId {String} A Facebook App ID.
     * @param appSecret {String} A Facebook App Secret.
     */
    constructor(type, pageAccessToken, appId, appSecret) { 
        Integration.initialize(this, type);MessengerAllOf.initialize(this, pageAccessToken, appId, appSecret);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Messenger.initialize(this, type, pageAccessToken, appId, appSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, pageAccessToken, appId, appSecret) { 
        obj['pageAccessToken'] = pageAccessToken;
        obj['appId'] = appId;
        obj['appSecret'] = appSecret;
    }

    /**
     * Constructs a <code>Messenger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger} The populated <code>Messenger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Messenger();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            MessengerAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('appSecret')) {
                obj['appSecret'] = ApiClient.convertToType(data['appSecret'], 'String');
            }
            if (data.hasOwnProperty('pageId')) {
                obj['pageId'] = ApiClient.convertToType(data['pageId'], 'Number');
            }
            if (data.hasOwnProperty('pageName')) {
                obj['pageName'] = ApiClient.convertToType(data['pageName'], 'String');
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
     * Returns Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @param {String} type Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns A Facebook Page Access Token.
     * @return {String}
     */
    getPageAccessToken() {
        return this.pageAccessToken;
    }

    /**
     * Sets A Facebook Page Access Token.
     * @param {String} pageAccessToken A Facebook Page Access Token.
     */
    setPageAccessToken(pageAccessToken) {
        this['pageAccessToken'] = pageAccessToken;
    }
/**
     * Returns A Facebook App ID.
     * @return {String}
     */
    getAppId() {
        return this.appId;
    }

    /**
     * Sets A Facebook App ID.
     * @param {String} appId A Facebook App ID.
     */
    setAppId(appId) {
        this['appId'] = appId;
    }
/**
     * Returns A Facebook App Secret.
     * @return {String}
     */
    getAppSecret() {
        return this.appSecret;
    }

    /**
     * Sets A Facebook App Secret.
     * @param {String} appSecret A Facebook App Secret.
     */
    setAppSecret(appSecret) {
        this['appSecret'] = appSecret;
    }
/**
     * Returns A Facebook page ID.
     * @return {Number}
     */
    getPageId() {
        return this.pageId;
    }

    /**
     * Sets A Facebook page ID.
     * @param {Number} pageId A Facebook page ID.
     */
    setPageId(pageId) {
        this['pageId'] = pageId;
    }
/**
     * Returns A Facebook page name.
     * @return {String}
     */
    getPageName() {
        return this.pageName;
    }

    /**
     * Sets A Facebook page name.
     * @param {String} pageName A Facebook page name.
     */
    setPageName(pageName) {
        this['pageName'] = pageName;
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
 * Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
 * @member {String} type
 * @default 'messenger'
 */
Messenger.prototype['type'] = 'messenger';

/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
Messenger.prototype['pageAccessToken'] = undefined;

/**
 * A Facebook App ID.
 * @member {String} appId
 */
Messenger.prototype['appId'] = undefined;

/**
 * A Facebook App Secret.
 * @member {String} appSecret
 */
Messenger.prototype['appSecret'] = undefined;

/**
 * A Facebook page ID.
 * @member {Number} pageId
 */
Messenger.prototype['pageId'] = undefined;

/**
 * A Facebook page name.
 * @member {String} pageName
 */
Messenger.prototype['pageName'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Messenger.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Messenger.prototype['defaultResponder'] = undefined;


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
// Implement MessengerAllOf interface:
/**
 * Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
 * @member {String} type
 * @default 'messenger'
 */
MessengerAllOf.prototype['type'] = 'messenger';
/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
MessengerAllOf.prototype['pageAccessToken'] = undefined;
/**
 * A Facebook App ID.
 * @member {String} appId
 */
MessengerAllOf.prototype['appId'] = undefined;
/**
 * A Facebook App Secret.
 * @member {String} appSecret
 */
MessengerAllOf.prototype['appSecret'] = undefined;
/**
 * A Facebook page ID.
 * @member {Number} pageId
 */
MessengerAllOf.prototype['pageId'] = undefined;
/**
 * A Facebook page name.
 * @member {String} pageName
 */
MessengerAllOf.prototype['pageName'] = undefined;
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




export default Messenger;

