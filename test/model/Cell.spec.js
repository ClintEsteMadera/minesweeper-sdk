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
    instance = new Minesweeper2020.Cell();
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

  describe('Cell', function() {
    it('should create an instance of Cell', function() {
      // uncomment below and update the code to test Cell
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be.a(Minesweeper2020.Cell);
    });

    it('should have the property row (base name: "row")', function() {
      // uncomment below and update the code to test the property row
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

    it('should have the property column (base name: "column")', function() {
      // uncomment below and update the code to test the property column
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

    it('should have the property mine (base name: "mine")', function() {
      // uncomment below and update the code to test the property mine
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

    it('should have the property revealed (base name: "revealed")', function() {
      // uncomment below and update the code to test the property revealed
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

    it('should have the property flag (base name: "flag")', function() {
      // uncomment below and update the code to test the property flag
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

    it('should have the property minesAround (base name: "minesAround")', function() {
      // uncomment below and update the code to test the property minesAround
      //var instane = new Minesweeper2020.Cell();
      //expect(instance).to.be();
    });

  });

}));
