# Portfolio OS

A retro macOS-style desktop that hosts my portfolio. Static site — just
`index.html` + `content.js` + `assets/`. Open `index.html` (or serve the folder)
and it runs.

## Adding / removing folders and files

**You only ever edit `content.js`.** It exports one array, `DESKTOP`, which is
the whole filesystem as data. The engine in `index.html` turns that tree into
desktop icons and windows — you never touch it.

### Node types

| type     | fields                        | opens as            |
|----------|-------------------------------|---------------------|
| `folder` | `name`, `children: [...]`     | a folder window     |
| `text`   | `name`, `body` (string)       | read-only TextEdit  |
| `image`  | `name`, `src` (path)          | Image Viewer        |
| `link`   | `name`, `url`, `icon`         | new browser tab     |

Optional on any node:

- `icon` — a filename inside `assets/icons/png 64px/` (e.g. `"24.png"`).
  Defaults: folder → `24.png`, text → `10.png`, image → `69.png`.
- `pos: { x, y }` — pixel position, **top-level desktop icons only**. Leave it
  off and the icon is auto-placed in a grid.

### Examples

Add a folder to the desktop — append to `DESKTOP`:

```js
{
  type: "folder",
  name: "Photography",
  children: [
    { type: "image", name: "Sunset.jpg", src: "assets/images/sunset.jpg" },
    { type: "text",  name: "About.txt",  body: `Shot on a Canon AE-1...` },
  ]
}
```

Add a file inside an existing folder — add an object to that folder's
`children` array. Folders can nest as deep as you want.

Remove anything — delete its object.

### Adding images

Drop the file in `assets/images/`, then reference it with
`src: "assets/images/yourfile.jpg"`.
