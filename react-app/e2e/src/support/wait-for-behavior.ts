export const waitFor = async <T>(
    predicate: () => T | Promise<T>,
    options?: { timeout?:number; wait?: number}
): Promise<T> => {
    const { timeout = 30000, wait=2000 } = options || {};
    const sleep = (ms: number) => new Promise( resolve => setTimeout(resolve, ms));
    const startDate = new Date();

    while (new Date().getTime() - startDate.getTime() < timeout) {
        const results = await predicate();
        if(results) return results;

        await sleep(wait)
        console.log(`Waiting ${wait}ms`);

    }
    throw new Error(`Wait time of ${timeout} as exceeded`);

}