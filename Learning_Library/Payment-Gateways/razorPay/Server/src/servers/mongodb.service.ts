
interface UpdateData {
    updateData?: unknown;
    updateOptions?: unknown;
}

interface Options extends UpdateData {
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

const findOne = async (collections: any, options?: Options) =>
    collections
        .findOne(options?.query || {})
        .select(options?.select)
        .populate(options?.populate)
        .sort(options?.sort)
        .lean(options?.lean ?? true);

const findOneAndUpdate = async (collections: any, options: Options) =>
    collections.findOneAndUpdate(
        options.query,
        options.updateData,
        options.updateOptions || { new: true }
    );

const exportObject = {
    find,
    create,
    findOneAndUpdate,
    findOne
}

export = exportObject;