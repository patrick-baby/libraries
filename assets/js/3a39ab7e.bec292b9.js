"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4513],{1681:e=>{e.exports=JSON.parse('{"functions":[{"name":"playerGroupRank","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with the group rank of the player in the given group. If the group rank couldn\'t be retrieved,\\nthen the promise will reject with [DefaultGroupRank] and with the error message.\\n\\n```lua\\nplayerUtil.playerGroupRank(2981707497, 1):andThen(function(groupRank)\\n\\tprint(groupRank)\\nend):catch(function(defaultGroupRank, errorMessage)\\n\\tprint(groupRank, tostring(errorMessage))\\nend)\\n```","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"groupId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<number>"}],"function_type":"static","source":{"line":71,"path":"src/playerUtil/init.luau"}},{"name":"playerIsFriendsWith","desc":" \\n\\nReturns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with a boolean indicating whether or not\\nthe given player is friends with the given `userId`. This is a wrapper over [Player:IsFriendsWith](https://create.roblox.com/docs/reference/engine/classes/Player#IsFriendsWith).\\n\\n```lua\\nplayerUtil.playerIsFriendsWith(2981707497, 27842645):andThen(function(isFriends)\\n\\tprint(isFriends)\\nend):catch(function(isFriends, errorMessage)\\n\\tprint(isFriends, tostring(errorMessage))\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"userId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":103,"path":"src/playerUtil/init.luau"}},{"name":"playerFriendsOnline","desc":" \\n\\nReturns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with an array of fields of info\\nregarding the given player\'s friends. This is a wrapper over \\n[Player:GetFriendsOnline](https://create.roblox.com/docs/reference/engine/classes/Player#GetFriendsOnline).\\n\\n```lua\\nplayerUtil.playerFriendsOnline(player, 15):andThen(function(friends)\\n\\tfor _, friend in friends do\\n\\t\\tprint(friend.UserName)\\n\\tend\\nend):catch(function(friends, errorMessage)\\n\\t-- `friends` will be an empty array\\n\\tprint(friends, tostring(errorMessage))\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"maxFriends","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<{[string]: any}>"}],"function_type":"static","source":{"line":134,"path":"src/playerUtil/init.luau"}},{"name":"playerGroupRole","desc":" \\n\\nReturns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with the group role of the player in the given group. If the group role couldn\'t be retrieved,\\nthen the promise will reject with [DefaultGroupRole] and with the error message.\\n\\n```lua\\nplayerUtil.playerGroupRole(2981707497, 1):andThen(function(groupRole)\\n\\tprint(groupRole)\\nend):catch(function(defaultGroupRole, errorMessage)\\n\\twarn(tostring(errorMessage))\\nend)\\n```","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"groupId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<string>"}],"function_type":"static","source":{"line":161,"path":"src/playerUtil/init.luau"}},{"name":"playerIsInGroup","desc":" \\n\\nReturns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with a boolean indicating if the given player is in the given group or not. \\nIf the player\'s group status couldn\'t be retrieved, then the promise will reject with a false value, along with the error message.\\n\\n```lua\\nplayerUtil.playerIsInGroup(2981707497, 1):andThen(function(playerIsInGroup)\\n\\tprint(playerIsInGroup)\\nend):catch(function(playerIsInGroup, errorMessage)\\n\\t-- playerIsInGroup will always be false here\\n\\tprint(playerIsInGroup, tostring(errorMessage))\\nend)\\n```","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"groupId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":194,"path":"src/playerUtil/init.luau"}},{"name":"safeChatStatus","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved with the safe chat status of the given player.\\n\\n```lua\\nplayerUtil.safeChatStatus(player):andThen(function(safeChatStatus)\\n\\tprint(safeChatStatus == playerUtil.playerSafeChatStatus.on)\\nend)\\n```","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<PlayerSafeChatStatus>"}],"function_type":"static","source":{"line":219,"path":"src/playerUtil/init.luau"}}],"properties":[],"types":[{"name":"PlayerGroupRank","desc":" ","fields":[{"name":"Default","lua_type":"0","desc":""}],"source":{"line":20,"path":"src/playerUtil/init.luau"}},{"name":"PlayerGroupRole","desc":" ","fields":[{"name":"Default","lua_type":"\\"Guest\\"","desc":""}],"source":{"line":26,"path":"src/playerUtil/init.luau"}},{"name":"playerSafeChatStatus","desc":"","fields":[{"name":"On","lua_type":"\\"On\\"","desc":""},{"name":"Off","lua_type":"\\"Off\\"","desc":""},{"name":"Unknown","lua_type":"\\"Unknown\\"","desc":""}],"source":{"line":34,"path":"src/playerUtil/init.luau"}}],"name":"playerUtil","desc":" \\n\\nAn utility module for working with players.\\n \\n```lua\\nplayerUtil.playerGroupRole(2981707497, 1):andThen(function(groupRole)\\n\\tprint(groupRole)\\nend):catch(function(defaultGroupRole, errorMessage)\\n\\twarn(tostring(errorMessage))\\nend)\\n```","source":{"line":14,"path":"src/playerUtil/init.luau"}}')}}]);