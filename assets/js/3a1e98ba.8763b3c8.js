"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5315],{68604:t=>{t.exports=JSON.parse('{"functions":[{"name":"setInstanceId","desc":" \\nSets an attribute ([InstanceIdAttribute]) in the given instance to `id`. ","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"id","desc":"","lua_type":"number"}],"returns":[],"function_type":"static","source":{"line":25,"path":"src/matterEntityUtil/init.luau"}},{"name":"instanceId","desc":" \\nReturns the instane attribute id of the given instance, if found.","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"number?\\n"}],"function_type":"static","source":{"line":33,"path":"src/matterEntityUtil/init.luau"}},{"name":"instanceIdPromise","desc":" \\nReturns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with the entity id attribute (set by [matterEntityUtil.setInstanceId]) of the given instance.\\n\\n```lua\\nmatterEntityUtil.instanceIdPromise(instance):andThen(function(entityId)\\n\\tprint(typeof(entityId)) --\x3e \\"number\\"\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Promise<number>"}],"function_type":"static","source":{"line":49,"path":"src/matterEntityUtil/init.luau"}},{"name":"entityIdFromComponents","desc":" \\nReturns the id of the entity which has the given components.\\n\\n```lua\\nlocal id = world:spawn(componentA)\\nlocal entityId = matterEntityUtil.entityIdFromComponents(componentA)\\n\\nprint(entityId == id)\\n```","params":[{"name":"world","desc":"","lua_type":"Matter.World"},{"name":"...","desc":"","lua_type":"Matter.Component"}],"returns":[{"desc":"","lua_type":"number?\\n"}],"function_type":"static","source":{"line":73,"path":"src/matterEntityUtil/init.luau"}}],"properties":[],"types":[{"name":"InstanceIdAttribute","desc":" \\n\\nIs `serverEntityId` on the server and `clientEntityId` on the client.","lua_type":"\\"serverEntityId\\" | \\"clientEntityId\\"","source":{"line":13,"path":"src/matterEntityUtil/init.luau"}}],"name":"matterEntityUtil","desc":" \\n\\nUtility module for working with [matter](https://eryn.io/matter/) entities.","source":{"line":6,"path":"src/matterEntityUtil/init.luau"}}')}}]);