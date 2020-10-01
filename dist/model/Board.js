"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Cell = _interopRequireDefault(require("./Cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Board model module.
 * @module model/Board
 * @version 0.0.1
 */
var Board = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Board</code>.
   * @alias module:model/Board
   */
  function Board() {
    _classCallCheck(this, Board);

    Board.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Board, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Board</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Board} obj Optional instance to populate.
     * @return {module:model/Board} The populated <code>Board</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Board();

        if (data.hasOwnProperty('rowsCount')) {
          obj['rowsCount'] = _ApiClient["default"].convertToType(data['rowsCount'], 'Number');
        }

        if (data.hasOwnProperty('columnsCount')) {
          obj['columnsCount'] = _ApiClient["default"].convertToType(data['columnsCount'], 'Number');
        }

        if (data.hasOwnProperty('minesCount')) {
          obj['minesCount'] = _ApiClient["default"].convertToType(data['minesCount'], 'Number');
        }

        if (data.hasOwnProperty('cells')) {
          obj['cells'] = _ApiClient["default"].convertToType(data['cells'], [[_Cell["default"]]]);
        }
      }

      return obj;
    }
  }]);

  return Board;
}();
/**
 * @member {Number} rowsCount
 */


Board.prototype['rowsCount'] = undefined;
/**
 * @member {Number} columnsCount
 */

Board.prototype['columnsCount'] = undefined;
/**
 * @member {Number} minesCount
 */

Board.prototype['minesCount'] = undefined;
/**
 * @member {Array.<Array.<module:model/Cell>>} cells
 */

Board.prototype['cells'] = undefined;
var _default = Board;
exports["default"] = _default;