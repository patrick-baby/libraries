"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2122],{89863:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new content preloader queue object. An `initialUpdateInterval` argument can be passed\\nas the initial update interval of the queue.","params":[{"name":"initialUpdateInterval","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"ContentProviderQueue\\n"}],"function_type":"static","source":{"line":84,"path":"src/contentProviderQueue/init.luau"}},{"name":"setUpdateInterval","desc":"Sets the update interval of the queue, i.e the interval at which the queue will preload\\neach asset.","params":[{"name":"updateInterval","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":109,"path":"src/contentProviderQueue/init.luau"}},{"name":"add","desc":"Adds the given instance to the content provider queue. If the given instance\\nalready exists, then the instance **will not** be readded again.","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","source":{"line":118,"path":"src/contentProviderQueue/init.luau"}},{"name":"addInstances","desc":"Adds all instances in `instances` to the content provider queue, via [ContentProviderQueue:add].","params":[{"name":"instances","desc":"","lua_type":"{ Instance }"}],"returns":[],"function_type":"method","source":{"line":132,"path":"src/contentProviderQueue/init.luau"}},{"name":"remove","desc":"Removes the instance from the given queue, if the instance was being preloaded, then it\\nwill be disregarded by the content provider queue.\\n\\n```lua\\nlocal contentProviderQueue = ...\\ncontentProviderQueue:add(sound1)\\nprint(#contentProviderQueue:pendingInstances()) --\x3e 1\\ncontentProviderQueue:remove(sound1)\\nprint(pendingInstancescontentProviderQueue:pendingInstances()) --\x3e 0\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","source":{"line":151,"path":"src/contentProviderQueue/init.luau"}},{"name":"progress","desc":"Returns a number from `0` to `1` indicating the progress of the content provider queue.","params":[],"returns":[{"desc":"","lua_type":"number\\n"}],"function_type":"method","source":{"line":167,"path":"src/contentProviderQueue/init.luau"}},{"name":"fullyProgressed","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved once the content provider queue\\nhas fully progressed, i.e there are no more instances to preload.","params":[],"returns":[{"desc":"","lua_type":"Promise<>"}],"function_type":"method","source":{"line":186,"path":"src/contentProviderQueue/init.luau"}},{"name":"paused","desc":"Returns a boolean indicating if the content provider queue object is paused or not.","params":[],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","source":{"line":200,"path":"src/contentProviderQueue/init.luau"}},{"name":"resume","desc":"Resumes the content provider queue.","params":[],"returns":[],"function_type":"method","source":{"line":208,"path":"src/contentProviderQueue/init.luau"}},{"name":"pause","desc":"Pauses the content provider queue object. If any more instances are to be preloaded, they won\'t be\\nuntil the content provider object is resumed back. ","params":[],"returns":[],"function_type":"method","source":{"line":217,"path":"src/contentProviderQueue/init.luau"}},{"name":"empty","desc":"Clears all instances to be preloaded from the content provider queue object, via [ContentProviderQueue:remove].","params":[],"returns":[],"function_type":"method","source":{"line":225,"path":"src/contentProviderQueue/init.luau"}},{"name":"pendingInstances","desc":"Returns a read only array of all instances, left to be preloaded in the content provider queue object.","params":[],"returns":[{"desc":"","lua_type":"{ Instance }\\n"}],"function_type":"method","source":{"line":235,"path":"src/contentProviderQueue/init.luau"}},{"name":"destroy","desc":"Destroys the content provider queue object, and also empties it through [ContentProviderQueue:empty].","params":[],"returns":[],"function_type":"method","source":{"line":243,"path":"src/contentProviderQueue/init.luau"}},{"name":"_init","desc":"Destroys the content provider queue object, empties it through [ContentProviderQueue:empty] and renders\\nit unusable.","params":[],"returns":[],"function_type":"method","private":true,"source":{"line":254,"path":"src/contentProviderQueue/init.luau"}}],"properties":[{"name":"onProgressed","desc":" \\n\\nA [signal](https://sleitnick.github.io/RbxUtil/api/Signal/) which is fired whenever an instance in the content provider\\nqueue object has being \'processed\' by preloading. \\n\\n`deltaTime` is the amount of time the instance took to be \'processsed\' for preload.","lua_type":"Signal <instance: Instance, contentProviderId: string, deltaTime: number, status: Enum.AssetFetchStatus>","tags":["Read only","Signal","ContentProviderQueue Instance"],"source":{"line":27,"path":"src/contentProviderQueue/init.luau"}},{"name":"onProgressing","desc":" \\n\\nA [signal](https://sleitnick.github.io/RbxUtil/api/Signal/) which is fired whenever an instance in the content provider\\nqueue object is being preloaded.","lua_type":"Signal <instance: Instance>","tags":["Read only","Signal","ContentProviderQueue Instance"],"source":{"line":38,"path":"src/contentProviderQueue/init.luau"}},{"name":"onAdded","desc":" \\n\\nA [signal](https://sleitnick.github.io/RbxUtil/api/Signal/) which is fired whenever an instance is added to the content provider queue object.","lua_type":"Signal <instance: Instance>","tags":["Read only","Signal","ContentProviderQueue Instance"],"source":{"line":48,"path":"src/contentProviderQueue/init.luau"}},{"name":"onRemoved","desc":" \\n\\nA [signal](https://sleitnick.github.io/RbxUtil/api/Signal/) which is fired whenever an instance is removed from the content provider queue object.","lua_type":"Signal <instance: Instance>","tags":["Read only","Signal","ContentProviderQueue Instance"],"source":{"line":58,"path":"src/contentProviderQueue/init.luau"}}],"types":[{"name":"ContentProviderQueue","desc":" ","lua_type":"ContentProviderQueue","source":{"line":63,"path":"src/contentProviderQueue/init.luau"}}],"name":"ContentProviderQueue","desc":" \\n\\nA simple class for working with [ContentProvider](https://create.roblox.com/docs/reference/engine/classes/ContentProvider).\\n\\n```lua\\nlocal contentProviderQueue = ContentProviderQueue.new()\\ncontentProviderQueue:addInstances({sound1, sound2, sound3})\\nprint(#contentProviderQueue:pendingInstances()) --\x3e 3\\ncontentProviderQueue:fullyProgressed():await() -- ensure all pending instances are preloaded\\nprint(#contentProviderQueue:pendingInstances()) --\x3e 0\\n```","source":{"line":14,"path":"src/contentProviderQueue/init.luau"}}')}}]);