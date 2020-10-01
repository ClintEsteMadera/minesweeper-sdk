"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationError = _interopRequireDefault(require("../model/ApplicationError"));

var _User = _interopRequireDefault(require("../model/User"));

var _UserDTO = _interopRequireDefault(require("../model/UserDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 0.0.1
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a new User
   * @param {module:model/UserDTO} userDTO 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
   */


  _createClass(UsersApi, [{
    key: "createUserWithHttpInfo",
    value: function createUserWithHttpInfo(userDTO) {
      var postBody = userDTO; // verify the required parameter 'userDTO' is set

      if (userDTO === undefined || userDTO === null) {
        throw new Error("Missing the required parameter 'userDTO' when calling createUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/api/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new User
     * @param {module:model/UserDTO} userDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "createUser",
    value: function createUser(userDTO) {
      return this.createUserWithHttpInfo(userDTO).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;