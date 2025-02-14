# A-Frame 3D Tiles Renderer Component

An A-Frame component wrapper for the [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) library.

## Installation

### Browser

```html
<head>
  <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-3d-tiles-renderer"></script>
</head>
```

### NPM

```bash
npm install aframe-3d-tiles-renderer
```

Then in your code:
```javascript
import 'aframe-3d-tiles-renderer';
```

## Usage

```html
<a-entity 
  3d-tiles="url: path/to/tileset.json;
            maximumSSE: 16;
            errorTarget: 6;
            maxDepth: 8">
</a-entity>
```

## Properties

| Property    | Description                                      | Default |
|------------|--------------------------------------------------|---------|
| url        | URL to the tileset JSON                          | ''      |
| maximumSSE | Maximum Screen Space Error                        | 16      |
| errorTarget| Target error for tile refinement                  | 6       |
| maxDepth   | Maximum depth of the tileset to traverse         | 8       |

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build: `npm run build`

## License

Apache-2.0
