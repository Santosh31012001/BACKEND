class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }


//  Why Use ApiResponse?
// To standardize all successful API responses with a common structure. This makes it easy for frontend apps to handle responses predictably.