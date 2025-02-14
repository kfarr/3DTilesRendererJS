import { TilesRenderer } from '3d-tiles-renderer';

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('3d-tiles', {
  schema: {
    url: { type: 'string' },
    maximumSSE: { type: 'number', default: 16 },
    errorTarget: { type: 'number', default: 6 },
    maxDepth: { type: 'number', default: 8 }
  },

  init: function() {
    const renderer = this.el.sceneEl.renderer;
    const scene = this.el.sceneEl.object3D;
    const camera = this.el.sceneEl.camera;

    this.tilesRenderer = new TilesRenderer(this.data.url);
    this.tilesRenderer.setCamera(camera);
    this.tilesRenderer.setResolutionFromRenderer(renderer);
    
    // Apply configuration
    this.tilesRenderer.setMaximumSSE(this.data.maximumSSE);
    this.tilesRenderer.errorTarget = this.data.errorTarget;
    this.tilesRenderer.maxDepth = this.data.maxDepth;

    scene.add(this.tilesRenderer.group);
  },

  update: function(oldData) {
    if (oldData.url !== this.data.url) {
      this.tilesRenderer.setTileset(this.data.url);
    }
    
    if (oldData.maximumSSE !== this.data.maximumSSE) {
      this.tilesRenderer.setMaximumSSE(this.data.maximumSSE);
    }
    
    if (oldData.errorTarget !== this.data.errorTarget) {
      this.tilesRenderer.errorTarget = this.data.errorTarget;
    }
    
    if (oldData.maxDepth !== this.data.maxDepth) {
      this.tilesRenderer.maxDepth = this.data.maxDepth;
    }
  },

  tick: function() {
    this.tilesRenderer.update();
  },

  remove: function() {
    if (this.tilesRenderer) {
      this.tilesRenderer.dispose();
      this.el.sceneEl.object3D.remove(this.tilesRenderer.group);
    }
  }
});
