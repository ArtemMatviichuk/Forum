class BaseRepository {
	static baseUrl = 'http://localhost:8081'

	static async handleError(response) {
		if (!response.ok) {
			await response.json().then(res => {
				throw res
			})
		}
		if (response.status != 204) return response.json()
	}
}
export default BaseRepository
