/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Client from '../model/Client';

/**
* AnotherFake service.
* @module api/AnotherFakeApi
* @version 1.0.0
*/
export default class AnotherFakeApi {

    /**
    * Constructs a new AnotherFakeApi. 
    * @alias module:api/AnotherFakeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * To test special tags
     * To test special tags and operation ID starting with number
     * @param {module:model/Client} [client] client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    call123testSpecialTagsWithHttpInfo(client) {
      let postBody = client;
      // verify the required parameter 'client' is set
      if (client === undefined || client === null) {
        throw new Error("Missing the required parameter 'client' when calling call123testSpecialTags");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Client;
      return this.apiClient.callApi(
        '/another-fake/dummy', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test special tags
     * To test special tags and operation ID starting with number
     * @param {module:model/Client} client client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    call123testSpecialTags(client) {
      return this.call123testSpecialTagsWithHttpInfo(client)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
