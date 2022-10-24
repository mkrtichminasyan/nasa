/* params: response data object */
export const dataConvert = (object) => {
    const output = []
    return function objToArray() {
        for (const property in object) {
            output.push(...object[property])
         }
        return output
    }
}