var gdjs;
(function(gdjs2) {
  class BBTextRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene) {
      this._object = runtimeObject;
      if (this._pixiObject === void 0) {
        this._pixiObject = new MultiStyleText(runtimeObject._text, {
          default: {
            fontFamily: runtimeScene.getGame().getFontManager().getFontFamily(runtimeObject._fontFamily),
            fontSize: runtimeObject._fontSize + "px",
            fill: gdjs2.rgbToHexNumber(runtimeObject._color[0], runtimeObject._color[1], runtimeObject._color[2]),
            tagStyle: "bbcode",
            wordWrap: runtimeObject._wordWrap,
            wordWrapWidth: runtimeObject._wrappingWidth,
            align: runtimeObject._align
          }
        });
      } else {
        this.updateColor();
        this.updateAlignment();
        this.updateFontFamily();
        this.updateFontSize();
      }
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._pixiObject, runtimeObject.getZOrder());
      this._pixiObject.anchor.x = 0.5;
      this._pixiObject.anchor.y = 0.5;
      this.updateText();
      this.updatePosition();
      this.updateAngle();
      this.updateOpacity();
    }
    getRendererObject() {
      return this._pixiObject;
    }
    updateWordWrap() {
      this._pixiObject._style.wordWrap = this._object._wordWrap;
      this._pixiObject.dirty = true;
      this.updatePosition();
    }
    updateWrappingWidth() {
      this._pixiObject._style.wordWrapWidth = this._object._wrappingWidth;
      this._pixiObject.dirty = true;
      this.updatePosition();
    }
    updateText() {
      this._pixiObject.text = this._object._text;
      this.updatePosition();
    }
    updateColor() {
      this._pixiObject.textStyles.default.fill = gdjs2.rgbToHexNumber(this._object._color[0], this._object._color[1], this._object._color[2]);
      this._pixiObject.dirty = true;
    }
    updateAlignment() {
      this._pixiObject._style.align = this._object._align;
      this._pixiObject.dirty = true;
    }
    updateFontFamily() {
      this._pixiObject.textStyles.default.fontFamily = this._object._runtimeScene.getGame().getFontManager().getFontFamily(this._object._fontFamily);
      this._pixiObject.dirty = true;
    }
    updateFontSize() {
      this._pixiObject.textStyles.default.fontSize = this._object._fontSize + "px";
      this._pixiObject.dirty = true;
    }
    updatePosition() {
      this._pixiObject.position.x = this._object.x + this._pixiObject.width / 2;
      this._pixiObject.position.y = this._object.y + this._pixiObject.height / 2;
    }
    updateAngle() {
      this._pixiObject.rotation = gdjs2.toRad(this._object.angle);
    }
    updateOpacity() {
      this._pixiObject.alpha = this._object._opacity / 255;
    }
    getWidth() {
      return this._pixiObject.width;
    }
    getHeight() {
      return this._pixiObject.height;
    }
  }
  gdjs2.BBTextRuntimeObjectPixiRenderer = BBTextRuntimeObjectPixiRenderer;
  gdjs2.BBTextRuntimeObjectRenderer = BBTextRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=bbtextruntimeobject-pixi-renderer.js.map
