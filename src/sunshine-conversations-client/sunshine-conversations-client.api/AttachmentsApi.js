/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.2
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
import AttachmentDeleteBody from '../sunshine-conversations-client.model/AttachmentDeleteBody';
import AttachmentMediaTokenBody from '../sunshine-conversations-client.model/AttachmentMediaTokenBody';
import AttachmentMediaTokenResponse from '../sunshine-conversations-client.model/AttachmentMediaTokenResponse';
import AttachmentResponse from '../sunshine-conversations-client.model/AttachmentResponse';

/**
* Attachments service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AttachmentsApi
* @version 9.4.2
*/
export default class AttachmentsApi {

    /**
    * Constructs a new AttachmentsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AttachmentsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete Attachment
     * Remove an attachment uploaded to Sunshine Conversations through the Upload attachment API. See [Attachments for Messages](#section/Attachments-for-Messages) to have attachments automatically deleted when deleting messages, conversations or users. <aside class=\"notice\">Note that deleted attachments can remain available on our CDN’s cache up to 15 minutes after the delete call.</aside> 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} attachmentDeleteBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAttachmentWithHttpInfo(appId, attachmentDeleteBody) {
      let postBody = attachmentDeleteBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteAttachment");
      }
      // verify the required parameter 'attachmentDeleteBody' is set
      if (attachmentDeleteBody === undefined || attachmentDeleteBody === null) {
        throw new Error("Missing the required parameter 'attachmentDeleteBody' when calling deleteAttachment");
      }

      let pathParams = {
        'appId': appId
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
        '/v2/apps/{appId}/attachments/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Attachment
     * Remove an attachment uploaded to Sunshine Conversations through the Upload attachment API. See [Attachments for Messages](#section/Attachments-for-Messages) to have attachments automatically deleted when deleting messages, conversations or users. <aside class=\"notice\">Note that deleted attachments can remain available on our CDN’s cache up to 15 minutes after the delete call.</aside> 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} attachmentDeleteBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAttachment(appId, attachmentDeleteBody) {
      return this.deleteAttachmentWithHttpInfo(appId, attachmentDeleteBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate Media Token
     * Generates a media JWT for a list of attachment paths. This media token is a prerequisite for setting the cookie needed to visualize a private attachment. <aside class=\"notice\">Note you have the ability to allow files using different rules, see <a href=\"https://docs.smooch.io/guide/private-attachments\">Private Attachments</a> for more details.</aside> 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} attachmentMediaTokenBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} and HTTP response
     */
    generateMediaJsonWebTokenWithHttpInfo(appId, attachmentMediaTokenBody) {
      let postBody = attachmentMediaTokenBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling generateMediaJsonWebToken");
      }
      // verify the required parameter 'attachmentMediaTokenBody' is set
      if (attachmentMediaTokenBody === undefined || attachmentMediaTokenBody === null) {
        throw new Error("Missing the required parameter 'attachmentMediaTokenBody' when calling generateMediaJsonWebToken");
      }

      let pathParams = {
        'appId': appId
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
      let returnType = AttachmentMediaTokenResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/attachments/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate Media Token
     * Generates a media JWT for a list of attachment paths. This media token is a prerequisite for setting the cookie needed to visualize a private attachment. <aside class=\"notice\">Note you have the ability to allow files using different rules, see <a href=\"https://docs.smooch.io/guide/private-attachments\">Private Attachments</a> for more details.</aside> 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} attachmentMediaTokenBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse}
     */
    generateMediaJsonWebToken(appId, attachmentMediaTokenBody) {
      return this.generateMediaJsonWebTokenWithHttpInfo(appId, attachmentMediaTokenBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set Cookie
     * With the media JWT retrieved, pass it in the header of the below request as it’s authorization in order to set a cookie in the user’s browser corresponding to the path within the media JWT. The expiration date of this cookie will match the expiration date of the media JWT. This cookie will be needed to visualize a private attachment. 
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    setCookieWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling setCookie");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/attachments/cookie', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set Cookie
     * With the media JWT retrieved, pass it in the header of the below request as it’s authorization in order to set a cookie in the user’s browser corresponding to the path within the media JWT. The expiration date of this cookie will match the expiration date of the media JWT. This cookie will be needed to visualize a private attachment. 
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    setCookie(appId) {
      return this.setCookieWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload Attachment
     * Upload an attachment to Sunshine Conversations to use in future messages. Files are uploaded using the multipart/form-data content type. Use the returned mediaUrl to send a file, image or carousel message. <aside class=\"notice\">Note that Sunshine Conversations limits the size and type of file you can upload to the platform. See the <a href=\"https://docs.smooch.io/guide/validating-files\">file validation</a> guide for more details.</aside> 
     * @param {String} appId Identifies the app.
     * @param {String} access The access level for the attachment. Currently the available access levels are public and private.
     * @param {File} source 
     * @param {Object} opts Optional parameters
     * @param {String} opts._for Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details.
     * @param {String} opts.conversationId Links the attachment getting uploaded to the conversation ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} and HTTP response
     */
    uploadAttachmentWithHttpInfo(appId, access, source, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling uploadAttachment");
      }
      // verify the required parameter 'access' is set
      if (access === undefined || access === null) {
        throw new Error("Missing the required parameter 'access' when calling uploadAttachment");
      }
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling uploadAttachment");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'access': access,
        'for': opts['_for'],
        'conversationId': opts['conversationId']
      };
      let headerParams = {
      };
      let formParams = {
        'source': source
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AttachmentResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/attachments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload Attachment
     * Upload an attachment to Sunshine Conversations to use in future messages. Files are uploaded using the multipart/form-data content type. Use the returned mediaUrl to send a file, image or carousel message. <aside class=\"notice\">Note that Sunshine Conversations limits the size and type of file you can upload to the platform. See the <a href=\"https://docs.smooch.io/guide/validating-files\">file validation</a> guide for more details.</aside> 
     * @param {String} appId Identifies the app.
     * @param {String} access The access level for the attachment. Currently the available access levels are public and private.
     * @param {File} source 
     * @param {Object} opts Optional parameters
     * @param {String} opts._for Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details.
     * @param {String} opts.conversationId Links the attachment getting uploaded to the conversation ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse}
     */
    uploadAttachment(appId, access, source, opts) {
      return this.uploadAttachmentWithHttpInfo(appId, access, source, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
