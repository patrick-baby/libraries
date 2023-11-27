"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3247],{26673:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates and returns a new remote signal. \\n\\n- If the 2nd parameter `middleware` is not specified, then it will default to [DefaultRemoteSignalMiddleware] instead.\\n- If the 3rd parameter `config` is not specified, then it will default to [DefaultRemoteSignalConfig] instead.","params":[{"name":"middleware","desc":"","lua_type":"RemoteSignalMiddleware?"},{"name":"config","desc":"","lua_type":"RemoteSignalConfig?\\r\\n"}],"returns":[{"desc":"","lua_type":"RemoteSignal\\r\\n"}],"function_type":"static","source":{"line":240,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"is","desc":"Returns a boolean indicating if `self` is a remote signal or not.","params":[{"name":"self","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"static","source":{"line":272,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"connect","desc":"Connects `callback` to the remote signal so that it is called whenever the client\\nfires the remote signal. Additionally, `callback` will be passed all the arguments sent \\nby the client.  \\n\\n```lua\\n-- Server\\nremoteSignal:connect(function(client, a, b)\\n\\tprint(a + b) --\x3e 3\\nend)\\n\\n-- Client\\nclientRemoteSignal:fireServer(1, 2)\\n```\\n\\n:::warning Possible Rate Limit\\nIt is possible that the client firing to this remote signal is intercepted by a rate-limit, either\\ndue to the global rate limit imposed on this remote signal for all players, or a specific-rate limit\\nimposed for this client.\\n\\n```lua\\nlocal remoteSignal = RemoteSignal.new(nil, 10) -- global rate limit of 10 seconds\\n-- Server\\nremoteSignal:connect(function()\\n\\tprint(\\"Fired\\")\\nend)\\n\\n--\x3e \\"Fired\\" \\n-- Only printed once!\\n\\n-- Client\\nfor _ = 1, 5 do\\n\\tclientRemoteSignal:fireServer()\\nend\\n```\\n\\nIf you do not desire this behavior, you can do the following:\\n\\t\\n- Set a specific rate limit for the client through [RemoteSignal:setRateLimitForClient] or [RemoteSignal:setRateLimitForClients], to `0`.\\n- Not impose a global rate limit to the remote signal (See [RemoteSignalConfig] for more info).\\n:::","params":[{"name":"callback","desc":"","lua_type":"RemoteSignalConnectCallback"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\r\\n"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":321,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"once","desc":"Works almost exactly the same as [RemoteSignal:connect], except the \\nconnection returned is  disconnected immediately upon `callback` being called.","params":[{"name":"callback","desc":"","lua_type":"RemoteSignalConnectCallback"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection\\r\\n"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":343,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"wait","desc":"Connects `callback` to the remote signal so that it is called whenever the remote signal\\nis fired off by the client *successfully*. Additionally, `callback` will be passed all the arguments sent \\nby the client.\\n\\n```lua\\n-- Server\\nremoteSignal:connect(function(client, a, b)\\n\\tprint(a + b) --\x3e 3\\nend)\\n\\n-- Client\\nclientRemoteSignal:fireServer(1, 2)\\n```","params":[],"returns":[{"desc":"","lua_type":"...any\\r\\n"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":369,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"wait","desc":"Yields the current thread until the remote signal is *successfully* fired off by the client. \\nThe yielded thread is resumed once the client fires some data to the server *successfully*, \\nwith the arguments sent by the client.\\n\\n```lua\\n-- Server\\nlocal client, a, b = remoteSignal:wait()\\nprint(a + b) --\x3e 3\\n\\n-- Client\\nclientRemoteSignal:fireServer(1, 2)\\n```","params":[],"returns":[{"desc":"","lua_type":"...any\\r\\n"}],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":386,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"setRateLimitForClient","desc":"Sets a specific rate limit for the given client.\\n\\n:::note\\nThis specific rate limit set for this client will be **removed**\\nonce the client leaves the game.\\n:::","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"rateLimit","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":407,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"setRateLimitForClients","desc":"Wrapper for [RemoteSignal:setRateLimitForClient] for an array of clients.","params":[{"name":"clients","desc":"","lua_type":"{ Player }"},{"name":"rateLimit","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":417,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"removeSpecificRateLimitForClient","desc":"Removes the **specific rate limit set** for the given client (through [RemoteSignal:setRateLimitForClient]).\\n\\n:::note Global Rate Limit \\nIf the remote signal has a global rate limit set (see [RemoteSignal.new]\'s second parameter), then\\nthe given client will now be subject to that global rate limit. \\n\\nIf you do not desire this behavior and want the rate limit imposation completely lifted for the client, \\nyou should set a specific rate limit of `0` for the given client (through [RemoteSignal:setRateLimitForClient]).\\n:::","params":[{"name":"client","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":437,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"removeSpecificRateLimitForClients","desc":"Wrapper for [RemoteSignal:removeSpecificRateLimitForClient] for an array of clients.","params":[{"name":"clients","desc":"","lua_type":"{ Player }"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":447,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"fireClient","desc":"Fires the given arguments to `client`.","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":459,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"fireAllClients","desc":"Calls [RemoteSignal:fireClient] for every player in the game, passing in the given arguments along.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":469,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"fireClients","desc":"Iterates through `clients` and calls [RemoteSignal:fireClient] for each client, \\npassing in the given arguments along.","params":[{"name":"clients","desc":"","lua_type":"{ Player }"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":482,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"fireAllClientsExcept","desc":"Calls [RemoteSignal:fireClient] for every player in the game, except for `client`, \\npassing in the given arguments along.","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":495,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"destroy","desc":"Destroys the remote signal and renders it unusable.","params":[],"returns":[],"function_type":"method","tags":["RemoteSignal instance"],"source":{"line":511,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"_handleClientFire","desc":"","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"serializedArgs","desc":"","lua_type":"sharedTypes.SerializedArgs"},{"name":"callback","desc":"","lua_type":"RemoteSignalConnectCallback\\r\\n"}],"returns":[],"function_type":"method","private":true,"source":{"line":519,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"dispatch","desc":"","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","private":true,"source":{"line":536,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"_authenticateClientFireRequest","desc":"","params":[{"name":"client","desc":"","lua_type":"Player"},{"name":"serializedArgs","desc":"","lua_type":"sharedTypes.SerializedArgs\\r\\n"}],"returns":[],"function_type":"method","private":true,"source":{"line":545,"path":"src/network/Server/RemoteSignal.luau"}}],"properties":[],"types":[{"name":"DefaultRemoteSignalMiddleware","desc":"","fields":[{"name":"serverEvent","lua_type":"{}","desc":""}],"source":{"line":22,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"RemoteSignal","desc":" ","lua_type":"RemoteSignal","source":{"line":27,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"RemoteSignalConnectCallback","desc":" ","lua_type":"(client: Player, ...any) -> ()","source":{"line":32,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"RemoteSignalConfig","desc":" \\n\\n- `automaticArgumentSerializationAndDeserializationEnabled` -> `true`\\n\\t- Arguments and values sent across the network by the remote signal \\n\\twill be automatically serialized and deserialized respectively, with the\\n\\thelp of an internal library, i.e [serializerUtil](https://bubshurb.github.io/libraries/api/serializerUtil/).\\n\\n\\t:::note Serialization and deserialization limitations\\n\\tWhile the serializer utility used to accomplish this supports a variety of data types, do keep in mind that not all data types\\n\\tcan be supported on the go for serialization and deserialization - check the above hyperlink to the serializer utility on how\\n\\tmany data types it supports.\\n\\t::::\\n\\n\\t**See the type of the value sent to the client by the remote signal, being `TweenInfo` on the client**:\\n\\n\\t```lua\\n\\t-- Server\\n\\tlocal Workspace = game:GetService(\\"Workspace\\")\\n\\tlocal Players = game:GetService(\\"Players\\")\\n\\n\\tlocal testNetwork = network.Server.new(\\"TestNetwork\\")\\n\\tlocal remoteSignal = network.Server.RemoteSignal.new()\\n\\ttestNetwork:append(\\"remoteSignal\\",  remoteSignal) \\n\\ttestNetwork:dispatch(Workspace)\\n\\n\\tremoteSignal:fireClient(Players:GetPlayers()[1] or Players.PlayerAdded:Wait())\\n\\n\\t-- Client\\n\\tlocal Workspace = game:GetService(\\"Workspace\\")\\n\\n\\tlocal testNetwork = network.client.fromParent(\\"TestNetwork\\", Workspace):expect()\\n\\ttestNetwork.remoteSignal:connect(function(value)\\n\\t\\tprint(typeof(value)) --\x3e \\"TweenInfo\\"\\n\\tend)\\n\\t```\\n- `automaticArgumentSerializationAndDeserializationEnabled` -> `false`\\n\\t- Arguments and values sent across the network by the remote signal will not be internally serialized\\n\\tand deserialized. Using the same example as above:\\n\\t\\n\\t**See the type of the value sent to the client by the remote signal, being `TweenInfo` on the client**:\\n\\n\\t```lua\\n\\t-- Server\\n\\tlocal Workspace = game:GetService(\\"Workspace\\")\\n\\tlocal Players = game:GetService(\\"Players\\")\\n\\n\\tlocal testNetwork = network.Server.new(\\"TestNetwork\\")\\n\\tlocal remoteSignal = network.Server.RemoteSignal.new()\\n\\ttestNetwork:append(\\"remoteSignal\\",  remoteSignal) \\n\\ttestNetwork:dispatch(Workspace)\\n\\n\\tremoteSignal:fireClient(Players:GetPlayers()[1] or Players.PlayerAdded:Wait())\\n\\n\\t-- Client\\n\\tlocal Workspace = game:GetService(\\"Workspace\\")\\n\\n\\tlocal testNetwork = network.client.fromParent(\\"TestNetwork\\", Workspace):expect()\\n\\ttestNetwork.remoteSignal:connect(function(value)\\n\\t\\tprint(typeof(value)) --\x3e \\"table\\"\\n\\tend)\\n\\t```","fields":[{"name":"useUnreliableRemoteEvent","lua_type":"boolean","desc":"determines whether or not the remote signal will use `UnreliableRemoteEvent` or `RemoteEvent` internally."},{"name":"automaticArgumentSerializationAndDeserializationEnabled","lua_type":"boolean","desc":"determines whether or not values sent to clients by the remote signal be internally serialized/deserialized or not."},{"name":"globalRateLimit","lua_type":"number","desc":"(in seconds) will serve as the global rate limit for all players firing to this RemoteSignal."}],"source":{"line":100,"path":"src/network/Server/RemoteSignal.luau"}},{"name":"RemoteSignalMiddleware","desc":"`serverEvent` must be array of callbacks, if specified.\\n\\n:::warning Yielding in middleware callbacks is not allowed\\nMiddleware callbacks aren\'t allowed to yield. If they do so, their thread will be closed via\\n[coroutine.close](https://create.roblox.com/docs/reference/engine/libraries/coroutine#close) and an\\nerror will be outputted in the console.\\n\\nYielding, (especially in network-related code) results in weird bugs and behavior which can be hard to track down!\\n:::\\n\\n### `serverEvent` \\n\\nCallbacks in `serverEvent` are called whenever the client fires off the remote signal.\\n\\nThe first argument passed to each callback is a reference to the remote signal itself,\\nwhich is followed by the client itself, which is followed by an array of arguments fired \\nby the client. \\n\\n```lua\\nlocal serverEventCallbacks = {\\n\\tfunction (remoteSignal, client: Player, arguments)\\n\\t\\tprint(RemoteSignal.is(remoteSignal)) --\x3e true\\n\\t\\tprint(client:IsA(\\"Player\\")) --\x3e true \\n\\t\\tprint(typeof(arguments)) --\x3e \\"table\\"\\n\\tend\\n}\\n---\\n```\\n\\n:::tip More control\\n- If any of the callbacks return an **explicit** false value, then the remote signal\\nwill not be fired. For e.g:\\n\\n```lua\\n-- Server\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.Server.new(\\"TestNetwork\\")\\nlocal testRemoteSignal = network.Server.RemoteSignal.new({\\n\\tserverEvent = {function() return false end}\\n})\\n\\ntestRemoteSignal:connect(function()\\n\\tprint(\\"Fired\\") --\x3e never prints\\nend)\\n\\ntestNetwork:append(\\"signal\\", testRemoteSignal)\\ntestNetwork:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.client.fromParent(\\"TestNetwork\\", Workspace)\\nprint(testNetwork.signal:fireServer()) \\n```\\n\\n- Additionally, you can modify the `arguments` table before it is passed to the connected callback, for e.g:\\n\\n```lua\\n-- Server\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.Server.new(\\"TestNetwork\\")\\nlocal testRemoteSignal = network.Server.RemoteSignal.new({\\n\\tserverEvent = {\\n\\t\\tfunction(_, arguments) \\n\\t\\t\\targuments[2] = 5 \\n\\t\\t\\targuments[3] = \\"test\\"\\n\\t\\tend\\n\\t}\\n})\\n\\ntestRemoteSignal:connect(function(client, a, b)\\n\\tprint(a, b) --\x3e 5, \\"test\\" (a and b ought to be 1 and 24 respectively, but they were modified through the middleware)\\nend)\\n\\ntestNetwork:append(\\"signal\\", testRemoteSignal)\\ntestNetwork:dispatch(Workspace)\\n\\n-- Client\\nlocal Workspace = game:GetService(\\"Workspace\\")\\n\\nlocal testNetwork = network.client.fromParent(\\"Test\\", Workspace):expect()\\nprint(testNetwork.signal:fireServer(1, 24)) \\n```\\n:::","fields":[{"name":"serverEvent","lua_type":"{ (remoteSignal: RemoteSignal, client: Player, args: {any}) -> any }?,","desc":""}],"source":{"line":193,"path":"src/network/Server/RemoteSignal.luau"}}],"name":"RemoteSignal","desc":"A remote signal in layman\'s terms is simply an object which dispatches data\\nto a client (who can listen to this data through a client remote signal) and \\nlistens to data dispatched to itself by a client (through a client remote signal).","source":{"line":8,"path":"src/network/Server/RemoteSignal.luau"}}')}}]);