"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GameCreationData model module.
 * @module model/GameCreationData
 * @version 0.0.1
 */
var GameCreationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GameCreationData</code>.
   * @alias module:model/GameCreationData
   * @param username {String} 
   */
  function GameCreationData(username) {
    _classCallCheck(this, GameCreationData);

    GameCreationData.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GameCreationData, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>GameCreationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameCreationData} obj Optional instance to populate.
     * @return {module:model/GameCreationData} The populated <code>GameCreationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GameCreationData();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('rowsCount')) {
          obj['rowsCount'] = _ApiClient["default"].convertToType(data['rowsCount'], 'Number');
        }

        if (data.hasOwnProperty('columnsCount')) {
          obj['columnsCount'] = _ApiClient["default"].convertToType(data['columnsCount'], 'Number');
        }

        if (data.hasOwnProperty('minesCount')) {
          obj['minesCount'] = _ApiClient["default"].convertToType(data['minesCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GameCreationData;
}();
/**
 * @member {String} username
 */


GameCreationData.prototype['username'] = undefined;
/**
 * @member {Number} rowsCount
 */

GameCreationData.prototype['rowsCount'] = undefined;
/**
 * @member {Number} columnsCount
 */

GameCreationData.prototype['columnsCount'] = undefined;
/**
 * @member {Number} minesCount
 */

GameCreationData.prototype['minesCount'] = undefined;
var _default = GameCreationData;
exports["default"] = _default;