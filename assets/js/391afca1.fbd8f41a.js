"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1978],{59415:e=>{e.exports=JSON.parse('{"functions":[{"name":"observe","desc":"Observes the given [CollectionService](https://create.roblox.com/docs/reference/engine/classes/CollectionService) tag.\\n`callbackAdded` will be automatically called on all instances with the given tag, and `callbackRemoved` (if specified)\\nwill be automatically called on an instance whenever it *no longer* has the given tag.\\n\\n```lua\\ninstanceTagUtil.observe(\\"SomeTag\\", function(instanceAdded)\\n\\t\\nend, function(instanceRemoved)\\n\\t\\nend)\\n```","params":[{"name":"tag","desc":"","lua_type":"string"},{"name":"callbackAdded","desc":"","lua_type":"(instance: Instance) -> ()"},{"name":"callbackRemoved","desc":"","lua_type":"((instance: Instance) -> ())?\\n"}],"returns":[{"desc":"","lua_type":"Connection"}],"function_type":"static","source":{"line":29,"path":"src/instanceTagUtil/init.luau"}},{"name":"instanceTagPromise","desc":"Returns a promise which is resolved when the given instance has the passed tag.\\nThe returned promise will be cancelled if `instance` is destroyed.\\n\\n```lua\\ninstanceTagUtil.instanceTagPromise(instance, \\"SomeTag\\", function()\\n\\tprint(instance.Name, \\"has tag \'SomeTag\'\\")\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"tag","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":63,"path":"src/instanceTagUtil/init.luau"}},{"name":"addTagsToInstance","desc":"Adds all tags in `tags` to the given instance as [CollectionService](https://create.roblox.com/docs/reference/engine/classes/CollectionService) tags.\\n\\n```lua\\ninstanceTagUtil.addTagsToInstance(workspace.Baseplate, {\\"Test\\"})\\nprint(CollectionService:HasTag(workspace.Baseplate, \\"Test\\")) --\x3e true\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"tags","desc":"","lua_type":"{ string }"}],"returns":[],"function_type":"static","source":{"line":94,"path":"src/instanceTagUtil/init.luau"}},{"name":"removeTagsFromInstance","desc":"Removes all tags in `tags` (which were tagged to the given instance as [CollectionService](https://create.roblox.com/docs/reference/engine/classes/CollectionService) tags) from the given instance.\\n\\n```lua\\ninstanceTagUtil.addTagsToInstance(workspace.Baseplate, {\\"Test\\"})\\nprint(CollectionService:HasTag(workspace.Baseplate, \\"Test\\")) --\x3e true\\ninstanceTagUtil.removeTagsFromInstance(workspace.Baseplate, {\\"Test\\"})\\nprint(CollectionService:HasTag(workspace.Baseplate, \\"Test\\")) --\x3e false\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"tags","desc":"","lua_type":"{ string }"}],"returns":[],"function_type":"static","source":{"line":111,"path":"src/instanceTagUtil/init.luau"}}],"properties":[],"types":[],"name":"instanceTagUtil","desc":"A utility module for working with instance tags.","source":{"line":6,"path":"src/instanceTagUtil/init.luau"}}')}}]);