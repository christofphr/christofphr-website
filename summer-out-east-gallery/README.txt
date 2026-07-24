SUMMER OUT EAST — GALLERY
=========================

FILES
  index.html    the page
  img/          114 images, 001.jpg - 114.jpg, in book order

TO PUBLISH
  Upload index.html and the img/ folder together, keeping them
  in the same directory. Any static host works — Netlify, Vercel,
  Cloudflare Pages, GitHub Pages, or a plain /gallery folder on
  christofphr.com.

  Drag-and-drop hosts: drop this whole folder onto the deploy area.

TO CHANGE THE ORDER
  Order = filename order. Renaming 007.jpg to 003.jpg moves it,
  but you must also update the matching <figure> line in index.html
  since each tile hardcodes its src. Easier: reorder the <figure>
  blocks in index.html directly. They appear in reading order.

TO SWAP AN IMAGE
  Replace the numbered file in img/. Keep the same filename.
  If the new image has a different shape, update that tile's
  class: landscape tiles carry class="t wide", portraits are
  class="t".

IMAGE SOURCE
  These were extracted from Summer_Out_East_v4.pdf at 144 DPI,
  roughly 1400px on the long edge. Good for web. For a retina
  display or any large hero use, re-export from your originals
  at 2000-2400px and overwrite the files in img/.
