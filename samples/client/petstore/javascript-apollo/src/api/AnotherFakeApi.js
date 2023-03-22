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
export default class AnotherFakeApi extends ApiClient {

    /**
    * Constructs a new AnotherFakeApi. 
    * @alias module:api/AnotherFakeApi
    * @class
    */
    constructor(baseURL = 'http://petstore.swagger.io:80/v2') {
      super(baseURL);
    }


    /**
     * To test special tags
     * To test special tags and operation ID starting with number
     * @param {module:model/Client} [client] client model
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<module:model/Client>}
     */
    async call123testSpecialTags(client, requestInit) {
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
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Client;

      return this.callApi(
        '/another-fake/dummy', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }


}
