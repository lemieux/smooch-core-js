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

import ApiClient from "../ApiClient";
import AcceptControlBody from '../sunshine-conversations-client.model/AcceptControlBody';
import OfferControlBody from '../sunshine-conversations-client.model/OfferControlBody';
import PassControlBody from '../sunshine-conversations-client.model/PassControlBody';

/**
* SwitchboardActions service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardActionsApi
* @version 12.6.1
*/
export default class SwitchboardActionsApi {

    /**
    * Constructs a new SwitchboardActionsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardActionsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Accept Control
     * The acceptControl action transfers the control of the conversation to the pending switchboard integration. When using integration auth scope, a 403 is returned if the pending switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} acceptControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    acceptControlWithHttpInfo(appId, conversationId, acceptControlBody) {
      let postBody = acceptControlBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling acceptControl");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling acceptControl");
      }
      // verify the required parameter 'acceptControlBody' is set
      if (acceptControlBody === undefined || acceptControlBody === null) {
        throw new Error("Missing the required parameter 'acceptControlBody' when calling acceptControl");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/acceptControl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept Control
     * The acceptControl action transfers the control of the conversation to the pending switchboard integration. When using integration auth scope, a 403 is returned if the pending switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} acceptControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    acceptControl(appId, conversationId, acceptControlBody) {
      return this.acceptControlWithHttpInfo(appId, conversationId, acceptControlBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Offer Control
     * The offerControl action will invite a switchboard integration to accept control of the conversation (changing its status to pending), and trigger a webhook signal to that integration indicating that they have been offered control of the conversation. Invalidates previous offerControl actions.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} offerControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    offerControlWithHttpInfo(appId, conversationId, offerControlBody) {
      let postBody = offerControlBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling offerControl");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling offerControl");
      }
      // verify the required parameter 'offerControlBody' is set
      if (offerControlBody === undefined || offerControlBody === null) {
        throw new Error("Missing the required parameter 'offerControlBody' when calling offerControl");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/offerControl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Offer Control
     * The offerControl action will invite a switchboard integration to accept control of the conversation (changing its status to pending), and trigger a webhook signal to that integration indicating that they have been offered control of the conversation. Invalidates previous offerControl actions.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} offerControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    offerControl(appId, conversationId, offerControlBody) {
      return this.offerControlWithHttpInfo(appId, conversationId, offerControlBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pass Control
     * The passControl action marks the named switchboard integration as active and transitions all the other switchboard integrations to standby status. The `passControl` action is idempotent if either the target `switchboardIntegration` is specified explicitly by its `id` or `name`, or the `next` keyword is used for the `switchboardIntegration` field, and the invoking integration can be identified by its [OAuth token](https://docs.smooch.io/guide/oauth/#redirect-and-acquiring-an-oauth-token) or [Custom Integration API Key](https://docs.smooch.io/rest/#tag/CustomIntegrationApiKeys) credentials. Duplicate passControl actions using the `next` keyword and their metadata are disregarded. For more information, see [Switchboard passControl](https://docs.smooch.io/guide/switchboard/#pass-control).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} passControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    passControlWithHttpInfo(appId, conversationId, passControlBody) {
      let postBody = passControlBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling passControl");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling passControl");
      }
      // verify the required parameter 'passControlBody' is set
      if (passControlBody === undefined || passControlBody === null) {
        throw new Error("Missing the required parameter 'passControlBody' when calling passControl");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/passControl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Pass Control
     * The passControl action marks the named switchboard integration as active and transitions all the other switchboard integrations to standby status. The `passControl` action is idempotent if either the target `switchboardIntegration` is specified explicitly by its `id` or `name`, or the `next` keyword is used for the `switchboardIntegration` field, and the invoking integration can be identified by its [OAuth token](https://docs.smooch.io/guide/oauth/#redirect-and-acquiring-an-oauth-token) or [Custom Integration API Key](https://docs.smooch.io/rest/#tag/CustomIntegrationApiKeys) credentials. Duplicate passControl actions using the `next` keyword and their metadata are disregarded. For more information, see [Switchboard passControl](https://docs.smooch.io/guide/switchboard/#pass-control).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} passControlBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    passControl(appId, conversationId, passControlBody) {
      return this.passControlWithHttpInfo(appId, conversationId, passControlBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Release Control
     * The releaseControl action releases the control of the conversation by nullifying its switchboard state. When using integration auth scope, a 403 is returned if the active switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    releaseControlWithHttpInfo(appId, conversationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling releaseControl");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling releaseControl");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/releaseControl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Release Control
     * The releaseControl action releases the control of the conversation by nullifying its switchboard state. When using integration auth scope, a 403 is returned if the active switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    releaseControl(appId, conversationId) {
      return this.releaseControlWithHttpInfo(appId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
