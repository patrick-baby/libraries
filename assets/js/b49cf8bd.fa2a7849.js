"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1398],{50792:s=>{s.exports=JSON.parse('{"functions":[{"name":"isA","desc":"A custom callback for [FindFirstChildWhichIsA](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildWhichIsA).\\n\\n```lua\\nwaitForUtil.custom.class(Workspace, \\"BasePart\\"):andThen(function(basePart: BasePart)\\n\\tprint(basePart:IsA(\\"BasePart\\")) --\x3e true\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"isA","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":12,"path":"src/waitForUtil/custom/isA.luau"}},{"name":"class","desc":"A custom callback for [FindFirstChildOfClass](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildOfClass).\\n\\n```lua\\nwaitForUtil.custom.class(Workspace, \\"TextLabel\\"):andThen(function(textLabel: TextLabel)\\n\\tprint(basePart.ClassName == \\"TextLabel\\") --\x3e true\\nend)\\n```","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"className","desc":"","lua_type":"string"}],"returns":[],"function_type":"static","source":{"line":12,"path":"src/waitForUtil/custom/class.luau"}}],"properties":[],"types":[],"name":"custom","desc":" \\n\\nA read only table consisting of utility methods for [WaitFor.Custom](https://sleitnick.github.io/RbxUtil/api/WaitFor/#Custom).","source":{"line":18,"path":"src/waitForUtil/init.luau"}}')}}]);