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
import ActionSubset from './ActionSubset';

/**
 * The Item model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Item
 * @version 14.3.4
 */
class Item {
    /**
     * Constructs a new <code>Item</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Item
     * @param title {String} The title of the item.
     * @param actions {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} An array of objects representing the actions associated with the item.
     */
    constructor(title, actions) { 
        
        Item.initialize(this, title, actions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, actions) { 
        obj['title'] = title;
        obj['actions'] = actions;
    }

    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Item} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Item();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('altText')) {
                obj['altText'] = ApiClient.convertToType(data['altText'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [ActionSubset]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The title of the item.
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets The title of the item.
     * @param {String} title The title of the item.
     */
    setTitle(title) {
        this['title'] = title;
    }
/**
     * Returns The description of the item.
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets The description of the item.
     * @param {String} description The description of the item.
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns The image url attached to the item.
     * @return {String}
     */
    getMediaUrl() {
        return this.mediaUrl;
    }

    /**
     * Sets The image url attached to the item.
     * @param {String} mediaUrl The image url attached to the item.
     */
    setMediaUrl(mediaUrl) {
        this['mediaUrl'] = mediaUrl;
    }
/**
     * Returns The MIME type for any image attached in the mediaUrl.
     * @return {String}
     */
    getMediaType() {
        return this.mediaType;
    }

    /**
     * Sets The MIME type for any image attached in the mediaUrl.
     * @param {String} mediaType The MIME type for any image attached in the mediaUrl.
     */
    setMediaType(mediaType) {
        this['mediaType'] = mediaType;
    }
/**
     * Returns An optional description of the media for accessibility purposes. The field will be saved by default with the file name as the value.
     * @return {String}
     */
    getAltText() {
        return this.altText;
    }

    /**
     * Sets An optional description of the media for accessibility purposes. The field will be saved by default with the file name as the value.
     * @param {String} altText An optional description of the media for accessibility purposes. The field will be saved by default with the file name as the value.
     */
    setAltText(altText) {
        this['altText'] = altText;
    }
/**
     * Returns The size of the image.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Item.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The size of the image.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Item.SizeEnum} size The size of the image.
     */
    setSize(size) {
        this['size'] = size;
    }
/**
     * Returns An array of objects representing the actions associated with the item.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>}
     */
    getActions() {
        return this.actions;
    }

    /**
     * Sets An array of objects representing the actions associated with the item.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions An array of objects representing the actions associated with the item.
     */
    setActions(actions) {
        this['actions'] = actions;
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
 * The title of the item.
 * @member {String} title
 */
Item.prototype['title'] = undefined;

/**
 * The description of the item.
 * @member {String} description
 */
Item.prototype['description'] = undefined;

/**
 * The image url attached to the item.
 * @member {String} mediaUrl
 */
Item.prototype['mediaUrl'] = undefined;

/**
 * The MIME type for any image attached in the mediaUrl.
 * @member {String} mediaType
 */
Item.prototype['mediaType'] = undefined;

/**
 * An optional description of the media for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
Item.prototype['altText'] = undefined;

/**
 * The size of the image.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Item.SizeEnum} size
 */
Item.prototype['size'] = undefined;

/**
 * An array of objects representing the actions associated with the item.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions
 */
Item.prototype['actions'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Item.prototype['metadata'] = undefined;





/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
Item['SizeEnum'] = {

    /**
     * value: "compact"
     * @const
     */
    "compact": "compact",

    /**
     * value: "large"
     * @const
     */
    "large": "large"
};



export default Item;

