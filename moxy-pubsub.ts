interface IKeyValuePair {
	[key: string]: any
}
let subscribers: IKeyValuePair = {}

module.exports = {
	publish(event: string, data: any): boolean {
		if (!subscribers[event]) {
			return false
		}

		subscribers[event].forEach((subscriberCallback: (data: any) => any) =>
			subscriberCallback(data),
		)
		return true
	},
	subscribe(event: string, callback: (data: any) => any): any {
		if (!subscribers[event]) {
			subscribers[event] = []
		}

		const index: number = subscribers[event].push(callback) - 1

		return {
			unsubscribe(): any {
				subscribers[event].splice(index, 1)
			},
		}
	},
}
