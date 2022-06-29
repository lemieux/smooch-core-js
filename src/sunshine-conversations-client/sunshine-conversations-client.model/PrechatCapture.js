/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.8.0
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
import Field from './Field';

/**
 * The PrechatCapture model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture
 * @version 9.8.0
 */
class PrechatCapture {
    /**
     * Constructs a new <code>PrechatCapture</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture
     */
    constructor() { 
        
        PrechatCapture.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrechatCapture</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} The populated <code>PrechatCapture</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrechatCapture();

            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('enableEmailLinking')) {
                obj['enableEmailLinking'] = ApiClient.convertToType(data['enableEmailLinking'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [Field]);
            }
        }
        return obj;
    }

/**
     * Returns Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     * @return {String}
     */
    getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
     * Sets Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     * @param {String} avatarUrl Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     */
    setAvatarUrl(avatarUrl) {
        this['avatarUrl'] = avatarUrl;
    }
/**
     * Returns If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
     * @return {Boolean}
     */
    getEnabled() {
        return this.enabled;
    }

    /**
     * Sets If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
     * @param {Boolean} enabled If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
     */
    setEnabled(enabled) {
        this['enabled'] = enabled;
    }
/**
     * Returns f true and Mailgun is integrated, will automatically link submitted emails.
     * @return {Boolean}
     */
    getEnableEmailLinking() {
        return this.enableEmailLinking;
    }

    /**
     * Sets f true and Mailgun is integrated, will automatically link submitted emails.
     * @param {Boolean} enableEmailLinking f true and Mailgun is integrated, will automatically link submitted emails.
     */
    setEnableEmailLinking(enableEmailLinking) {
        this['enableEmailLinking'] = enableEmailLinking;
    }
/**
     * Returns Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
     */
    getFields() {
        return this.fields;
    }

    /**
     * Sets Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
     */
    setFields(fields) {
        this['fields'] = fields;
    }

}

/**
 * Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
 * @member {String} avatarUrl
 * @default 'undefined'
 */
PrechatCapture.prototype['avatarUrl'] = 'undefined';

/**
 * If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
 * @member {Boolean} enabled
 * @default false
 */
PrechatCapture.prototype['enabled'] = false;

/**
 * f true and Mailgun is integrated, will automatically link submitted emails.
 * @member {Boolean} enableEmailLinking
 * @default false
 */
PrechatCapture.prototype['enableEmailLinking'] = false;

/**
 * Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields
 */
PrechatCapture.prototype['fields'] = undefined;






export default PrechatCapture;

