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
import Campaign from './Campaign';

/**
 * The SourceWithCampaignWebhookAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhookAllOf
 * @version 14.0.0
 */
class SourceWithCampaignWebhookAllOf {
    /**
     * Constructs a new <code>SourceWithCampaignWebhookAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhookAllOf
     */
    constructor() { 
        
        SourceWithCampaignWebhookAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SourceWithCampaignWebhookAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhookAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhookAllOf} The populated <code>SourceWithCampaignWebhookAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceWithCampaignWebhookAllOf();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = Campaign.constructFromObject(data['campaign']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign}
     */
    getCampaign() {
        return this.campaign;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign} campaign
     */
    setCampaign(campaign) {
        this['campaign'] = campaign;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign} campaign
 */
SourceWithCampaignWebhookAllOf.prototype['campaign'] = undefined;






export default SourceWithCampaignWebhookAllOf;

