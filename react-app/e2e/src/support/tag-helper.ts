// Return ED dev. And to determine what environment not to run the test on.

export const generateCucumberRuntimeTag = (
    commonConfig: string,
    runtimeEnv: string,
    availableEnvList: string[],
    runtimeTag: string
): string => {
    const tagExpression = availableEnvList
        .filter(e => e !== runtimeEnv)
        .map(e => `(@${runtimeTag} and not @${e})`)
        .join(' and ')
    return `${commonConfig} --tags '${tagExpression}'`
}