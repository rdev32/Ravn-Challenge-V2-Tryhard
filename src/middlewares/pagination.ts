import { Request } from 'express'

export function generatePagination(array: unknown[], page: number, limit: number, req: Request) {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = {} as Page

    if (endIndex < array.length) {
        results.next = {
            page: page + 1,
            limit: limit,
            url: generateURL(req, page + 1, limit)
        }
    }

    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
            limit: limit,
            url: generateURL(req, page - 1, limit)
        }
    }

    results.data = array.slice(startIndex, endIndex)
    return results
}

export function generateURL(req: Request, page: number, limit: number) {
    return new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}?page=${page}&limit=${limit}`)
}
