# Vintage Vinyls crate catalogue

Each physical display uses `N.json` and `N.jpg`, where N is zero-based and fixed. Slots 0–43 are music crates; 44–63 are GEAR instrument displays. Existing music IDs, metadata and original banner image files were preserved. JSON `id`, `crateIndex`, `type` and `schemaVersion` identify the physical slot; keep them unchanged when editing the other fields. Gear JSON adds `stemInstrument` and `stemVariants`.

The space reads files from this directory at startup. If a JSON is missing, malformed or unavailable, it uses its local fallback; if a banner fails, it displays the existing original or the procedural cover. Refresh after changes. These GEAR prompts ask the music generator for solo recordings: they do not extract stems from a song, and the model may still produce unwanted accompaniment.

`banner-prompts.json` documents the prompts used for newly generated banners. The source genre list was supplied by the space owner at https://gist.githubusercontent.com/regtable/270cb48aaaa586e610e4bbc12d93c23b/raw/genres.json.
