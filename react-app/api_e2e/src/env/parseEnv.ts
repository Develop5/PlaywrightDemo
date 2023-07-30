// Validate that the environment variable is found in the process.env

export const env = (key: string): string => {
    const value = process.env[key]
    if (!value) {
        throw Error(`🧨  No environment variable found for ${key}  🧨 `)
    }
    return value
}
