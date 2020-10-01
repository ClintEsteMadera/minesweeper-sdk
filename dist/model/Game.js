"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Board = _interopRequireDefault(require("./Board"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Game model module.
 * @module model/Game
 * @version 0.0.1
 */
var Game = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Game</code>.
   * @alias module:model/Game
   */
  function Game() {
    _classCallCheck(this, Game);

    Game.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Game, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Game</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Game} obj Optional instance to populate.
     * @return {module:model/Game} The populated <code>Game</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Game();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('board')) {
          obj['board'] = _Board["default"].constructFromObject(data['board']);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('outcome')) {
          obj['outcome'] = _ApiClient["default"].convertToType(data['outcome'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Game;
}();
/**
 * @member {String} id
 */


Game.prototype['id'] = undefined;
/**
 * @member {String} username
 */

Game.prototype['username'] = undefined;
/**
 * @member {module:model/Board} board
 */

Game.prototype['board'] = undefined;
/**
 * @member {Date} created
 */

Game.prototype['created'] = undefined;
/**
 * @member {Date} modified
 */

Game.prototype['modified'] = undefined;
/**
 * @member {module:model/Game.OutcomeEnum} outcome
 */

Game.prototype['outcome'] = undefined;
/**
 * Allowed values for the <code>outcome</code> property.
 * @enum {String}
 * @readonly
 */

Game['OutcomeEnum'] = {
  /**
   * value: "LOST"
   * @const
   */
  "LOST": "LOST",

  /**
   * value: "WON"
   * @const
   */
  "WON": "WON"
};
var _default = Game;
exports["default"] = _default;