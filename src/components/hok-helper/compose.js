
export const compose = (...func) => (comp) => {
    return func.reduceRight((prevRes ,fn) => fn(prevRes), comp);
}