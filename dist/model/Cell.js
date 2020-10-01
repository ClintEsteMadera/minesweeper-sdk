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
 * The Cell model module.
 * @module model/Cell
 * @version 0.0.1
 */
var Cell = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Cell</code>.
   * @alias module:model/Cell
   */
  function Cell() {
    _classCallCheck(this, Cell);

    Cell.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Cell, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Cell</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cell} obj Optional instance to populate.
     * @return {module:model/Cell} The populated <code>Cell</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cell();

        if (data.hasOwnProperty('row')) {
          obj['row'] = _ApiClient["default"].convertToType(data['row'], 'Number');
        }

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'Number');
        }

        if (data.hasOwnProperty('mine')) {
          obj['mine'] = _ApiClient["default"].convertToType(data['mine'], 'Boolean');
        }

        if (data.hasOwnProperty('revealed')) {
          obj['revealed'] = _ApiClient["default"].convertToType(data['revealed'], 'Boolean');
        }

        if (data.hasOwnProperty('flag')) {
          obj['flag'] = _ApiClient["default"].convertToType(data['flag'], 'String');
        }

        if (data.hasOwnProperty('minesAround')) {
          obj['minesAround'] = _ApiClient["default"].convertToType(data['minesAround'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Cell;
}();
/**
 * @member {Number} row
 */


Cell.prototype['row'] = undefined;
/**
 * @member {Number} column
 */

Cell.prototype['column'] = undefined;
/**
 * @member {Boolean} mine
 */

Cell.prototype['mine'] = undefined;
/**
 * @member {Boolean} revealed
 */

Cell.prototype['revealed'] = undefined;
/**
 * @member {module:model/Cell.FlagEnum} flag
 */

Cell.prototype['flag'] = undefined;
/**
 * @member {Number} minesAround
 */

Cell.prototype['minesAround'] = undefined;
/**
 * Allowed values for the <code>flag</code> property.
 * @enum {String}
 * @readonly
 */

Cell['FlagEnum'] = {
  /**
   * value: "QUESTION_MARK"
   * @const
   */
  "QUESTION_MARK": "QUESTION_MARK",

  /**
   * value: "RED_FLAG"
   * @const
   */
  "RED_FLAG": "RED_FLAG"
};
var _default = Cell;
exports["default"] = _default;