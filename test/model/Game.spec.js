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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Minesweeper2020);
  }
}(this, function(expect, Minesweeper2020) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Minesweeper2020.Game();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Game', function() {
    it('should create an instance of Game', function() {
      // uncomment below and update the code to test Game
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be.a(Minesweeper2020.Game);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

    it('should have the property board (base name: "board")', function() {
      // uncomment below and update the code to test the property board
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

    it('should have the property outcome (base name: "outcome")', function() {
      // uncomment below and update the code to test the property outcome
      //var instane = new Minesweeper2020.Game();
      //expect(instance).to.be();
    });

  });

}));
