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
 * The GameUpdate model module.
 * @module model/GameUpdate
 * @version 0.0.1
 */
var GameUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GameUpdate</code>.
   * @alias module:model/GameUpdate
   * @param cellUpdateAction {module:model/GameUpdate.CellUpdateActionEnum} 
   */
  function GameUpdate(cellUpdateAction) {
    _classCallCheck(this, GameUpdate);

    GameUpdate.initialize(this, cellUpdateAction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GameUpdate, null, [{
    key: "initialize",
    value: function initialize(obj, cellUpdateAction) {
      obj['cellUpdateAction'] = cellUpdateAction;
    }
    /**
     * Constructs a <code>GameUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameUpdate} obj Optional instance to populate.
     * @return {module:model/GameUpdate} The populated <code>GameUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GameUpdate();

        if (data.hasOwnProperty('row')) {
          obj['row'] = _ApiClient["default"].convertToType(data['row'], 'Number');
        }

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'Number');
        }

        if (data.hasOwnProperty('cellUpdateAction')) {
          obj['cellUpdateAction'] = _ApiClient["default"].convertToType(data['cellUpdateAction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GameUpdate;
}();
/**
 * @member {Number} row
 */


GameUpdate.prototype['row'] = undefined;
/**
 * @member {Number} column
 */

GameUpdate.prototype['column'] = undefined;
/**
 * @member {module:model/GameUpdate.CellUpdateActionEnum} cellUpdateAction
 */

GameUpdate.prototype['cellUpdateAction'] = undefined;
/**
 * Allowed values for the <code>cellUpdateAction</code> property.
 * @enum {String}
 * @readonly
 */

GameUpdate['CellUpdateActionEnum'] = {
  /**
   * value: "ADD_QUESTION_MARK"
   * @const
   */
  "ADD_QUESTION_MARK": "ADD_QUESTION_MARK",

  /**
   * value: "ADD_RED_FLAG"
   * @const
   */
  "ADD_RED_FLAG": "ADD_RED_FLAG",

  /**
   * value: "UNFLAG"
   * @const
   */
  "UNFLAG": "UNFLAG",

  /**
   * value: "REVEAL"
   * @const
   */
  "REVEAL": "REVEAL"
};
var _default = GameUpdate;
exports["default"] = _default;