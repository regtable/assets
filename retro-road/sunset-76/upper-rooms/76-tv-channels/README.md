# Sunset 76 TV channels

Edit `channels.json` in Git. There are seven channels: Crime, Nature, i-boop, i-make, Life, Cosmos and After Hours. The last two are editable choices. Each `prompt` may be a string or a JSON schema object. Empty strings deliberately still call both generation services.

The song receives the exact channel prompt as **soundPrompt**, with no lyrics prompt. The image receives `imagePromptPrefix`, selected channel name and the same prompt. Every tune starts one image request and one song request in parallel. Only a missing result is retried, at most three extra requests. If both first requests fail, the modal shows **Sorry, service unavailable. Re-tune box.** No requests run on opening the modal or loading an asset.

The remote beneath the TV opens the TV's own modal. Image and audio can arrive in either order. Successful image displays immediately; successful song plays with a playback button if autoplay is blocked. Closing the remote leaves generation and playback running on the physical TV. Selecting a channel automatically closes the remote. Turning the TV off, leaving the room or disposing the module stops audio. Late responses from closed tunings are ignored. Requests already submitted to the SDK cannot be cancelled and may still complete/bill. Ambient mute is respected. No document-wide audio unlock listener is installed.

Retry is three *additional* attempts after the first call. Tune controls are locked during generation. Opening the modal announces the generation and retry behavior. Service calls use host-injected SDK functions, so the external assets do not bundle a second Flow SDK.
