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


import ApiClient from './ApiClient';
import ApplicationError from './model/ApplicationError';
import Board from './model/Board';
import Cell from './model/Cell';
import Game from './model/Game';
import GameCreationData from './model/GameCreationData';
import GameUpdate from './model/GameUpdate';
import User from './model/User';
import UserDTO from './model/UserDTO';
import GamesApi from './api/GamesApi';
import UsersApi from './api/UsersApi';


/**
* REST_API_for_the_famous_Minesweeper_game.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Minesweeper2020 = require('index'); // See note below*.
* var xxxSvc = new Minesweeper2020.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Minesweeper2020.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Minesweeper2020.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Minesweeper2020.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApplicationError model constructor.
     * @property {module:model/ApplicationError}
     */
    ApplicationError,

    /**
     * The Board model constructor.
     * @property {module:model/Board}
     */
    Board,

    /**
     * The Cell model constructor.
     * @property {module:model/Cell}
     */
    Cell,

    /**
     * The Game model constructor.
     * @property {module:model/Game}
     */
    Game,

    /**
     * The GameCreationData model constructor.
     * @property {module:model/GameCreationData}
     */
    GameCreationData,

    /**
     * The GameUpdate model constructor.
     * @property {module:model/GameUpdate}
     */
    GameUpdate,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserDTO model constructor.
     * @property {module:model/UserDTO}
     */
    UserDTO,

    /**
    * The GamesApi service constructor.
    * @property {module:api/GamesApi}
    */
    GamesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
