import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"37e-z8rOlK0exGSo9HIHUY4YIte66mk\"",
    "mtime": "2021-10-31T17:35:31.021Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Multiplier-2c6100ba.mjs": {
    "type": "application/javascript",
    "etag": "\"347-w11eRieYHGFuf0Ep9e5FM8ruq5A\"",
    "mtime": "2021-10-31T17:35:31.021Z",
    "path": "../public/_nuxt/Multiplier-2c6100ba.mjs"
  },
  "/_nuxt/TheGame-737b859a.mjs": {
    "type": "application/javascript",
    "etag": "\"816-rm0dv6NRTkwNkeDDz1ZSaisCFZg\"",
    "mtime": "2021-10-31T17:35:31.017Z",
    "path": "../public/_nuxt/TheGame-737b859a.mjs"
  },
  "/_nuxt/[id]-f4b2d09b.mjs": {
    "type": "application/javascript",
    "etag": "\"227-y66hOtVa+slWy7Q4hLysV+V/m3g\"",
    "mtime": "2021-10-31T17:35:31.017Z",
    "path": "../public/_nuxt/[id]-f4b2d09b.mjs"
  },
  "/_nuxt/app-c412068d.mjs": {
    "type": "application/javascript",
    "etag": "\"335-By3ZZI0tfgaIDcF0IxHVZkXa+Fs\"",
    "mtime": "2021-10-31T17:35:31.017Z",
    "path": "../public/_nuxt/app-c412068d.mjs"
  },
  "/_nuxt/default-b0b0ccf0.mjs": {
    "type": "application/javascript",
    "etag": "\"f5-bj8sULzD+Zkc2vIrz7g4bKMxdSI\"",
    "mtime": "2021-10-31T17:35:31.009Z",
    "path": "../public/_nuxt/default-b0b0ccf0.mjs"
  },
  "/_nuxt/entry-bc8cabdd.mjs": {
    "type": "application/javascript",
    "etag": "\"1a12c-CO8YfirOmv1qSARBypSYP9Q//cI\"",
    "mtime": "2021-10-31T17:35:31.005Z",
    "path": "../public/_nuxt/entry-bc8cabdd.mjs"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"37e-z8rOlK0exGSo9HIHUY4YIte66mk\"",
    "mtime": "2021-10-31T17:35:31.005Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/index-18708407.mjs": {
    "type": "application/javascript",
    "etag": "\"150-CgLAC6sKmCCNgkhEy5MwoRW19rw\"",
    "mtime": "2021-10-31T17:35:31.005Z",
    "path": "../public/_nuxt/index-18708407.mjs"
  },
  "/_nuxt/index-70d8d199.mjs": {
    "type": "application/javascript",
    "etag": "\"42a-qSUU+Pe1OYtQpErm8q42EWdbHi8\"",
    "mtime": "2021-10-31T17:35:31.005Z",
    "path": "../public/_nuxt/index-70d8d199.mjs"
  },
  "/_nuxt/index-bf1acbf5.mjs": {
    "type": "application/javascript",
    "etag": "\"1b7-yMdydiDydk9Do0dEAmyhTxfTSSs\"",
    "mtime": "2021-10-31T17:35:31.005Z",
    "path": "../public/_nuxt/index-bf1acbf5.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"a49-rvikNdNMscQgh0bDY2Bx2SgOLZI\"",
    "mtime": "2021-10-31T17:35:31.001Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/numbers-1937e703.mjs": {
    "type": "application/javascript",
    "etag": "\"2a-CK6BEa45xc6oxt0rBj5MO2TMKsE\"",
    "mtime": "2021-10-31T17:35:31.001Z",
    "path": "../public/_nuxt/numbers-1937e703.mjs"
  },
  "/_nuxt/assets/Multiplier.ae70fbd3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fd-xkRtGsufh4TtzTvYKcR3+7cF+uo\"",
    "mtime": "2021-10-31T17:35:31.017Z",
    "path": "../public/_nuxt/assets/Multiplier.ae70fbd3.css"
  },
  "/_nuxt/assets/TheGame.e52e0946.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e5-2CeIX1EbYRqX05Gxcb7YN43kYo4\"",
    "mtime": "2021-10-31T17:35:31.013Z",
    "path": "../public/_nuxt/assets/TheGame.e52e0946.css"
  },
  "/_nuxt/assets/app.0ea0a94a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b8-kvb/bHsZ/QtW8sdPOV2LiAkNZV4\"",
    "mtime": "2021-10-31T17:35:31.013Z",
    "path": "../public/_nuxt/assets/app.0ea0a94a.css"
  },
  "/_nuxt/assets/default.c37a692f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-x+fx9p2vkOn+zHbF7LSbpdJa4lk\"",
    "mtime": "2021-10-31T17:35:31.013Z",
    "path": "../public/_nuxt/assets/default.c37a692f.css"
  },
  "/_nuxt/assets/entry.d0ff2753.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31-acva0IsdyY/Xunkcme5150h9mwo\"",
    "mtime": "2021-10-31T17:35:31.013Z",
    "path": "../public/_nuxt/assets/entry.d0ff2753.css"
  },
  "/_nuxt/assets/index.10fabedf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"40-Io/+MEMBIYm/HuJlUJUC5IZHsMA\"",
    "mtime": "2021-10-31T17:35:31.013Z",
    "path": "../public/_nuxt/assets/index.10fabedf.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/home/woot/dev/int/nuxt/der-alex/dist" + "/" + "1635701728";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
