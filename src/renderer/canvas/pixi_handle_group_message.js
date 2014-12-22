define(['pixi'], function(pixi) {
  'use strict';

  return {
    createPixiObject: function() {
      return new pixi.DisplayObjectContainer();
    },
    update: function() {},
    remove: function(renderObject, stage) {
      stage.removeChild(renderObject.pixiObject);
    }
  };

});
