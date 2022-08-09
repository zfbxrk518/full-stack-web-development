export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-b4ee2dc7.js","imports":["_app/immutable/start-b4ee2dc7.js","_app/immutable/chunks/index-2a4cea0c.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "todos.json",
				pattern: /^\/todos\.json$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/todos/index.json.ts.js')
			},
			{
				type: 'endpoint',
				id: "todos/[uid].json",
				pattern: /^\/todos\/([^/]+?)\.json$/,
				names: ["uid"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/todos/_uid_.json.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
