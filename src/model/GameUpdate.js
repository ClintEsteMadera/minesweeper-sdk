/**
 * Minesweeper 2020
 * REST API for the famous Minesweeper game
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GameUpdate model module.
 * @module model/GameUpdate
 * @version 0.0.1
 */
class GameUpdate {
    /**
     * Constructs a new <code>GameUpdate</code>.
     * @alias module:model/GameUpdate
     * @param cellUpdateAction {module:model/GameUpdate.CellUpdateActionEnum} 
     */
    constructor(cellUpdateAction) { 
        
        GameUpdate.initialize(this, cellUpdateAction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cellUpdateAction) { 
        obj['cellUpdateAction'] = cellUpdateAction;
    }

    /**
     * Constructs a <code>GameUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameUpdate} obj Optional instance to populate.
     * @return {module:model/GameUpdate} The populated <code>GameUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameUpdate();

            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], 'Number');
            }
            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], 'Number');
            }
            if (data.hasOwnProperty('cellUpdateAction')) {
                obj['cellUpdateAction'] = ApiClient.convertToType(data['cellUpdateAction'], 'String');
            }
        }
        return obj;
    }


}

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



export default GameUpdate;
