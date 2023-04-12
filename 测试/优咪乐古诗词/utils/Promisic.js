const promisic = (func) => {
	return function (params = {}) {
		return new Promise((resolve, reject) => {
			const args = Object.assign(params, {
				success: (res) => {
					resolve(res);
				},
				fail: (error) => {
					resolve(error);
				}
			});
			func(args);
		});
	};
}
export default promisic;