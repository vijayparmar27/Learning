
interface Options {
    query?: unknown;
    select?: string;
    sort?: any;
    populate?: any;
    offset?: number;
    limit?: number;
    lean?: boolean;
    insert?: unknown;
    deletedBy?: string;
}

const find = async (collections: any, options?: Options) => {
    return await collections
        .find(options?.query || {})
        .select(options?.select)
        .populate(options?.populate)
        .sort(options?.sort)
        .skip(options?.offset)
        .limit(options?.limit)
        .lean(options?.lean || true);
}

const create = async (collections: any, options?: Options) => {
    return await collections.create(options?.insert);
}

const exportObject = {
    find,
    create
}

export = exportObject;