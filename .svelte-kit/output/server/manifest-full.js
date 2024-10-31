export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "website/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BzWpHv-R.js","app":"_app/immutable/entry/app.BS5Eh3S4.js","imports":["_app/immutable/entry/start.BzWpHv-R.js","_app/immutable/chunks/entry.CPiFaWcv.js","_app/immutable/chunks/scheduler.BfOEM8mP.js","_app/immutable/chunks/index.DCVOIPq2.js","_app/immutable/entry/app.BS5Eh3S4.js","_app/immutable/chunks/scheduler.BfOEM8mP.js","_app/immutable/chunks/index.BOatwHNk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
