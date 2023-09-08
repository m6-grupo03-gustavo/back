"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const pagination = (req, res, next) => {
    const queryPage = Number(req.query.page);
    const queryPerPage = Number(req.query.perPage);
    const page = queryPage && queryPage > 1 ? queryPage : 1;
    const perPage = queryPerPage && queryPerPage <= 12 && queryPerPage > 0 ? queryPerPage : 12;
    const querySort = req.query.sort;
    const queryOrder = req.query.order;
    const orderOptions = ["asc", "desc"];
    const sortOptions = ["value"];
    let sort;
    let order;
    if (!(querySort && sortOptions.includes(querySort))) {
        sort = "id";
    }
    else {
        sort = querySort;
    }
    if (!querySort || !(queryOrder && orderOptions.includes(queryOrder))) {
        order = "asc";
    }
    else {
        order = queryOrder;
    }
    const baseUrl = "http://localhost:3000/car";
    const prevPage = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
    const nextPage = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
    res.locals = Object.assign(Object.assign({}, res.locals), { pagination: {
            page: perPage * (page - 1),
            perPage,
            order,
            sort,
            prevPage,
            nextPage,
        } });
    return next();
};
exports.pagination = pagination;
