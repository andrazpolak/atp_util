//ATP util
function isArrayNotEmpty(array) {
    return Array.isArray(array) && array.length > 0;
};

function convert16bitesArrayTo(array, output_type) {
    if (!isArrayNotEmpty(array))
        return;

    if (!output_type)
        return array[0];

    let ret = array[0];

    switch (output_type) {
        case "uint":
        case "uint16":
            if (array.length === 1)
                ret = (array[0] & 0xFFFF);
            break;
        case "int":
        case "int16":
            if (array.length === 1) {
                ret = (array[0] & 0xFFFF);
                if (array[0] & (1 << 15))
                    ret |= 0xFFFF0000;
            }
            break;
        case "int":
        case "int32":
            if (array.length === 2) {
                ret = (((array[1] & 0xFFFF) << 16) | (array[0] & 0xFFFF));
                if (array[1] & (1 << 15))
                    ret |= 0xFFFFFFFF00000000;
            }
            break;
            //TODO
        // case "uint32":
        //     if (array.length === 2) {
        //         ret = (((array[1] & 0xFFFF) << 16) | (array[0] & 0xFFFF));
        //         ret = Number.toUint32(ret);
        //     }
        //     break;
        case "string":
        case "string8bit":
            if (array.length > 0) {
                const tmp_stringArray = [];
                for (let item of array) {
                    const char1 = item & 0x00FF;
                    const char2 = (item & 0xFF00) >> 8;

                    if (char1 === 0) break;
                    tmp_stringArray.push(String.fromCharCode(char1))
                    if (char2 === 0) break;
                    tmp_stringArray.push(String.fromCharCode(char2))

                }
                ret = tmp_stringArray.join("");
            }
            break;
        case "string16bit":
            if (array.length > 0) {
                const tmp_stringArray = [];
                for (let item of array) {
                    if (item === 0) break;
                    tmp_stringArray.push(String.fromCharCode(item))
                }
                ret = tmp_stringArray.join("");
            }
            break;
        //TODO: add support for float
        default:
    }

    return ret;
};

module.exports = {
    isArrayNotEmpty,
    convert16bitesArrayTo
}

