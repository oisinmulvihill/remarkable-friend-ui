//
export function listNotebooks(settings) {
	let result = {}

	try {
		// only works inside the pywebview which JS bridge has been configured.
		result = pywebview.api.list_notebooks(settings)
		result = JSON.parse(result)

	} catch (error) {
		// Emulate result:
		result = JSON.parse('[{"id": "93861cf6-dffc-45cd-ae02-25283e71c4db", "last_modified": "2017-12-17 14:44:23", "name": "SilverCloud"}, {"id": "29d2a55c-63b0-444c-942f-3a27f2d52232", "last_modified": "2018-02-13 21:17:50", "name": "Tech Dinner"}]')
	}

	return result
}



