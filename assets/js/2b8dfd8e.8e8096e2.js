"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[941],{77010:e=>{e.exports=JSON.parse('{"functions":[{"name":"badgeInfoPromise","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved wih the badge info of the given\\nbadge id. This is just a wrapper over [BadgeService:GetBadgeInfoAsync](https://create.roblox.com/docs/reference/engine/classes/BadgeService#GetBadgeInfoAsync).\\n\\n:::note Promise rejection with default data\\nThe promise will reject with the [DefaultBadgeInfo] and an error message, instead of just the error message - allowing your code to adapt\\neasily incase of failure:\\n\\n```lua\\nlocal wasSuccessful, badgeInfo, errorMessage = badgeServiceUtil.badgeInfoPromise(badgeId):await()\\n```\\n:::","params":[{"name":"badgeId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<BadgeInfo>"}],"function_type":"static","source":{"line":53,"path":"src/badgeServiceUtil/init.luau"}},{"name":"checkPlayerBadgesPromise","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved wih an array of badge ids the given player owns.\\nThis is just a wrapper over [BadgeService:GetBadgeInfoAsync](https://create.roblox.com/docs/reference/engine/classes/BadgeService#GetBadgeInfoAsync).\\n\\n:::note Promise rejection with default data\\nThe promise will reject with an empty array and an error message, instead of just the error message - allowing your code to adapt\\neasily incase of failure:\\n\\n```lua\\nlocal wasSuccessful, playerOwnedBadgeIds, errorMessage = badgeServiceUtil.checkPlayerBadgesPromise(badgeIds):await()\\n```\\n:::","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"badgeIds","desc":"","lua_type":"{ number }"}],"returns":[{"desc":"","lua_type":"Promise<{number}>"}],"function_type":"static","source":{"line":81,"path":"src/badgeServiceUtil/init.luau"}},{"name":"playerHasBadge","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved wih a boolean indicating\\nwhether or not the given player has the specified badge or not. This is just a wrapper over \\n[BadgeService:UserHasBadgeAsync](https://create.roblox.com/docs/reference/engine/classes/BadgeService#UserHasBadgeAsync).\\n\\n:::note Promise rejection with default data\\nThe promise will reject with `false` and an error message, instead of just the error message - allowing your code to adapt\\neasily incase of failure:\\n\\n```lua\\nlocal wasSuccessful, playerHasBadge, errorMessage = badgeServiceUtil.playerHasBadge(badgeId):await()\\n```\\n:::","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"badgeId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":111,"path":"src/badgeServiceUtil/init.luau"}},{"name":"awardBadgeToPlayer","desc":"Returns a [promise](https://eryn.io/roblox-lua-promise/) which is resolved once the given player\\nhas being successfully awarded with the given badge. This is just a wrapper over \\n[BadgeService:AwardBadge](https://create.roblox.com/docs/reference/engine/classes/BadgeService#AwardBadge).\\n\\n```lua\\nlocal wasSuccessful, playerWasAwardedBadge = badgeServiceUtil.awardBadgeToPlayer(123, 123):await()\\n```","params":[{"name":"playerUserId","desc":"","lua_type":"number"},{"name":"badgeId","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"static","source":{"line":136,"path":"src/badgeServiceUtil/init.luau"}}],"properties":[],"types":[{"name":"BadgeInfo","desc":"","fields":[{"name":"Name","lua_type":"string","desc":""},{"name":"Description","lua_type":"string","desc":""},{"name":"IconImageId","lua_type":"string","desc":""},{"name":"IsEnabled","lua_type":"boolean","desc":""}],"source":{"line":15,"path":"src/badgeServiceUtil/init.luau"}},{"name":"DefaultBadgeInfo","desc":"","fields":[{"name":"Name","lua_type":"\\"\\"","desc":""},{"name":"Description","lua_type":"\\"\\"","desc":""},{"name":"IconImageId","lua_type":"\\"\\"","desc":""},{"name":"IsEnabled","lua_type":"false","desc":""}],"source":{"line":24,"path":"src/badgeServiceUtil/init.luau"}}],"name":"badgeServiceUtil","desc":" \\n\\nAn utility module for working with [BadgeService](https://create.roblox.com/docs/reference/engine/classes/BadgeService).","source":{"line":6,"path":"src/badgeServiceUtil/init.luau"}}')}}]);