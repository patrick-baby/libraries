"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7402],{45040:e=>{e.exports=JSON.parse('{"functions":[{"name":"toolOwnerInstance","desc":"Returns the owner instance of the given tool, if found.","params":[{"name":"tool","desc":"","lua_type":"Tool"}],"returns":[{"desc":"","lua_type":"Player?\\n"}],"function_type":"static","source":{"line":15,"path":"src/toolUtil/init.luau"}},{"name":"tryPlaceToolInBackpackAndEquip","desc":" \\nPlaces the given tool in the player\'s backpack and tries to\\nequips it on the humanoid.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"tool","desc":"","lua_type":"Tool"}],"returns":[],"function_type":"static","source":{"line":37,"path":"src/toolUtil/init.luau"}},{"name":"playerToolCountPredicate","desc":"Returns the player tool count. `predicate` is called on every tool owned by the player, and\\\\\\neach time it returns `true`, the tool count is incremented by 1.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"predicate","desc":"","lua_type":"(tool: Tool) -> boolean"}],"returns":[],"function_type":"static","source":{"line":54,"path":"src/toolUtil/init.luau"}},{"name":"playerTools","desc":"Returns an array of all player tools - equipped and enequipped.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"static","source":{"line":69,"path":"src/toolUtil/init.luau"}},{"name":"currentEquippedTool","desc":" \\nReturns the current equipped tool by the player.","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"static","source":{"line":87,"path":"src/toolUtil/init.luau"}},{"name":"observePlayerForToolsEquippedAndEnequipped","desc":" \\nObserves the player for any new tools equipped or unequipped. Also captures\\nall the initial tool equipped. \\n\\n```lua\\ntoolUtil.observePlayerForEquippedTool(player, function(newToolEquipped, oldToolEquipped)\\n\\nend, function(newToolUnequipped, oldToolUnEquipped)\\n\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"observerForToolEquipped","desc":"","lua_type":"((\\n\\t\\tnewToolEquipped: Tool,\\n\\t\\toldToolEquipped: Tool?\\n\\t) -> ())?"},{"name":"observerForToolEnequipped","desc":"","lua_type":"((\\n\\t\\tnewToolUnequipped: Tool,\\n\\t\\toldToolUnequipped: Tool?\\n\\t) -> ())?\\n"}],"returns":[],"function_type":"static","source":{"line":104,"path":"src/toolUtil/init.luau"}},{"name":"observePlayerBackpackForTools","desc":" \\nObserves the player\'s backpack for any new tools added or removed. Also captures\\nall initial tools in the player backpack.\\n\\n```lua\\ntoolUtil.observePlayerBackpackForTools(player, function(newToolAdded, oldToolAdded)\\n\\nend, function(newToolRemoved, oldToolRemoved)\\n\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"observerForToolAdded","desc":"","lua_type":"((\\n\\t\\tnewToolAdded: Tool,\\n\\t\\toldToolAdded: Tool?\\n\\t) -> ())?"},{"name":"observerForToolRemoved","desc":"","lua_type":"((\\n\\t\\tnewToolRemoved: Tool,\\n\\t\\toldToolRemoved: Tool?\\n\\t) -> ())?\\n"}],"returns":[],"function_type":"static","source":{"line":182,"path":"src/toolUtil/init.luau"}},{"name":"observePlayerForToolOwnership","desc":" \\nObserves the player\'s backpack and character for any new tools added or removed.\\n\\n```lua\\ntoolUtil.observePlayerForToolOwnership(player, function(newToolOwnershipGranted, oldToolOwnershipGranted)\\n\\nend, function(newToolOwnershipRemoved, oldToolOwnershipRemoved)\\n\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"observerForToolOwnershipGranted","desc":"","lua_type":"((newTool: Tool, oldTool: Tool?) -> ())?"},{"name":"observerForToolOwnershipRemoved","desc":"","lua_type":"((newTool: Tool, oldTool: Tool?) -> ())?\\n"}],"returns":[],"function_type":"static","source":{"line":247,"path":"src/toolUtil/init.luau"}}],"properties":[],"types":[],"name":"toolUtil","desc":"A simple utility module for working with tools.","source":{"line":6,"path":"src/toolUtil/init.luau"}}')}}]);