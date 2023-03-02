interface Page {
    page: number
    next: {
        page: number
        limit: number
        url: URL
    }
    prev: {
        page: number
        limit: number
        url: URL
    }
    data: unknown
}