
export interface pagination {
    currentPage: number,
    itemPerPage: number,
    totalItem: number,
    totalPage: number
}

export class PaginationResult<T> {

    result: T;
    pagination: pagination;

}