//
export function connectDevice(settings) {
	let result = {message: '', status: 'fail'}

	try {
		// only works inside the pywebview which JS bridge has been configured.
		result = pywebview.api.connect_device(settings)
	}
	catch (error) {
		// Emulate result:
		result.message = {message: 'MOCK Connected', status: 'ok'}
	}

	return result
}


export function recoverNotebooks(settings) {
	let result = {notebooks: []}

	try {
		// only works inside the pywebview which JS bridge has been configured.
		result = pywebview.api.connect_device(settings)
	}
	catch (error) {
		// Emulate result:
		result.notebooks = [
            {"name": "Mock Notebook1"},
            {"name": "Mock Notebook2"}
        ]
	}

	return result
}



