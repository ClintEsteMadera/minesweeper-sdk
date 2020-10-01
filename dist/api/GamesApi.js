"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationError = _interopRequireDefault(require("../model/ApplicationError"));

var _Game = _interopRequireDefault(require("../model/Game"));

var _GameCreationData = _interopRequireDefault(require("../model/GameCreationData"));

var _GameUpdate = _interopRequireDefault(require("../model/GameUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Games service.
* @module api/GamesApi
* @version 0.0.1
*/
var GamesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GamesApi. 
  * @alias module:api/GamesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GamesApi(apiClient) {
    _classCallCheck(this, GamesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a new game for an existing User
   * @param {module:model/GameCreationData} gameCreationData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Game} and HTTP response
   */


  _createClass(GamesApi, [{
    key: "createGameWithHttpInfo",
    value: function createGameWithHttpInfo(gameCreationData) {
      var postBody = gameCreationData; // verify the required parameter 'gameCreationData' is set

      if (gameCreationData === undefined || gameCreationData === null) {
        throw new Error("Missing the required parameter 'gameCreationData' when calling createGame");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _Game["default"];
      return this.apiClient.callApi('/api/games', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new game for an existing User
     * @param {module:model/GameCreationData} gameCreationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Game}
     */

  }, {
    key: "createGame",
    value: function createGame(gameCreationData) {
      return this.createGameWithHttpInfo(gameCreationData).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Finds a Game by ID
     * @param {String} gameId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Game} and HTTP response
     */

  }, {
    key: "findGameByIdWithHttpInfo",
    value: function findGameByIdWithHttpInfo(gameId) {
      var postBody = null; // verify the required parameter 'gameId' is set

      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling findGameById");
      }

      var pathParams = {
        'gameId': gameId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = _Game["default"];
      return this.apiClient.callApi('/api/games/{gameId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Finds a Game by ID
     * @param {String} gameId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Game}
     */

  }, {
    key: "findGameById",
    value: function findGameById(gameId) {
      return this.findGameByIdWithHttpInfo(gameId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates an existing Game, by performing individual updates to the board's cells
     * @param {String} gameId 
     * @param {module:model/GameUpdate} gameUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Game} and HTTP response
     */

  }, {
    key: "updateGameWithHttpInfo",
    value: function updateGameWithHttpInfo(gameId, gameUpdate) {
      var postBody = gameUpdate; // verify the required parameter 'gameId' is set

      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling updateGame");
      } // verify the required parameter 'gameUpdate' is set


      if (gameUpdate === undefined || gameUpdate === null) {
        throw new Error("Missing the required parameter 'gameUpdate' when calling updateGame");
      }

      var pathParams = {
        'gameId': gameId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = _Game["default"];
      return this.apiClient.callApi('/api/games/{gameId}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates an existing Game, by performing individual updates to the board's cells
     * @param {String} gameId 
     * @param {module:model/GameUpdate} gameUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Game}
     */

  }, {
    key: "updateGame",
    value: function updateGame(gameId, gameUpdate) {
      return this.updateGameWithHttpInfo(gameId, gameUpdate).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GamesApi;
}();

exports["default"] = GamesApi;