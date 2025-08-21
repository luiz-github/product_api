export interface Pagination {
    take: number
    page: number
    order: 'DESC' | 'ASC'
}

export function getPagination(query: any): Pagination {
    const take = parseInt(query.take as string) || 10
    const page = parseInt(query.take as string) * parseInt(query.page as string) || 0
    const order = query.order === 'ASC' ? 'ASC' : 'DESC'
    return { take, page, order }
}

