"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2719],{78877:e=>{e.exports=JSON.parse('{"functions":[{"name":"all","desc":"Returns a read only array of all descendants in `instanceTree` which have the\\n`desiredAttribute` attribute.","params":[{"name":"instanceTree","desc":"","lua_type":"Instance"},{"name":"desiredAttribute","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":15,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"observeMany","desc":"Works similar to [instanceAttributeUtil.observe], but observes an dictionary of \\nattributes instead of a single attribute. Returns a [RBXScriptConnection](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection) object.\\n\\n```lua\\ninstanceAttributeUtil.observeMany(workspace, workspace:GetAttributes(), function(newAttributes, oldAttributes)\\n\\t...\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"attributesToObserve","desc":"","lua_type":"{ [string]: any }"},{"name":"observer","desc":"","lua_type":"(\\r\\n\\t\\tnewAttributeValue: any,\\r\\n\\t\\toldAttributeValue: any\\r\\n\\t) -> ()\\r\\n"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\r\\n"}],"function_type":"static","source":{"line":38,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"new","desc":"Sets up an event connection which listens to any descendant added to `instanceTree`, if it has the\\n`desiredAttribute` atribute, then `callback` will be called. Returns a [RBXScriptConnection](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection) object.\\n\\n```lua\\ninstanceAttributeUtil.new(workspace, \\"Test\\", function(instance)\\n\\tprint(instance)\\nend)\\n```","params":[{"name":"instanceTree","desc":"","lua_type":"Instance"},{"name":"desiredAttribute","desc":"","lua_type":"string"},{"name":"callback","desc":"","lua_type":"(descendant: Instance) -> ()\\r\\n"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\r\\n"}],"function_type":"static","source":{"line":74,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"removed","desc":"Sets up an event connection which listens to any descendant removed from `instanceTree`, if it has the\\n`desiredAttribute` atribute, then `callback` will be called. Returns a [RBXScriptConnection](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection) object.\\n\\n```lua\\ninstanceAttributeUtil.removed(workspace, \\"Test\\", function(instance)\\n\\tprint(instance)\\nend)\\n```","params":[{"name":"instanceTree","desc":"","lua_type":"Instance"},{"name":"desiredAttribute","desc":"","lua_type":"string"},{"name":"callback","desc":"","lua_type":"(descendant: Instance) -> ()\\r\\n"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\r\\n"}],"function_type":"static","source":{"line":97,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"observe","desc":"Observes the value of attribute `desiredAttribute` in `instance`, so `observer` is called\\nevery time the attribute updates. Returns a [RBXScriptConnection](https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection) object, \\nas well a promise that is resolved when `observer` is called for the first time and has finished running.\\n\\n```lua\\ninstanceAttributeUtil.observe(workspace, \\"SomeAttribute\\", function(newValue, oldValue)\\n\\t...\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"desiredAttribute","desc":"","lua_type":"string"},{"name":"observer","desc":"","lua_type":"(newAttributeValue: any, oldAttributeValue: any) -> ()\\r\\n"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"},{"desc":"","lua_type":"any"}],"function_type":"static","source":{"line":121,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"instanceAttributePromise","desc":"Returns a promise which is resolved when the given instance has the given attribute.\\n\\n```lua\\ninstanceAttributeUtil.instanceAttributePromise(instance, \\"SomeAttribute\\"):andThen(function(value)\\n\\tprint(value) --\x3e 5\\nend)\\n\\ninstance:SetAttribute(\\"SomeAttribute\\", 5)\\n```\\n\\n`predicate` can also be passed, which should return a boolean value. It is passed\\nthe new attribute value of the instance, and the old attribute value of the instance. The promise\\nwill only resolve when `predicate` returns `true` for the new attribute value of the instance.\\n\\nThe returned promise will be cancelled if `instance` is destroyed.\\n\\n```lua\\ninstanceAttributeUtil.instanceAttributePromise(instance, \\"SomeAttribute\\", function(newValue, oldValue)\\n\\treturn newValue == 2 and oldValue == 1\\nend):andThen(function(value)\\n\\tprint(value) --\x3e 2\\nend)\\n\\ninstance:SetAttribute(\\"SomeAttribute\\", 1)\\ninstance:SetAttribute(\\"SomeAttribute\\", 2)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"attribute","desc":"","lua_type":"string"},{"name":"predicate","desc":"","lua_type":"((\\r\\n\\t\\tnewValue: any,\\r\\n\\t\\toldValue: any\\r\\n\\t) -> boolean)?\\r\\n"}],"returns":[],"function_type":"static","source":{"line":172,"path":"src/instanceAttributeUtil/init.luau"}},{"name":"instanceAttributesPromise","desc":"Calls [instanceAttributeUtil.instanceAttributePromise] for every attribute in `attributes`, and saves\\nthe promise internally. Returns a promise that is reolved once all internal promises have been resolved.","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"attributes","desc":"","lua_type":"{ string }"}],"returns":[{"desc":"","lua_type":"Promise<>"}],"function_type":"static","source":{"line":217,"path":"src/instanceAttributeUtil/init.luau"}}],"properties":[],"types":[],"name":"instanceAttributeUtil","desc":"A utility module for working with instance attributes.","source":{"line":6,"path":"src/instanceAttributeUtil/init.luau"}}')}}]);