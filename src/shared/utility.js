export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidty = (value, rules) => {
    let isValid = true;

    if (rules){
        if (rules.required) {
            isValid = (value.trim() !== '') && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isAtPresent) {
            isValid = value.split('@').length > 1 && isValid;
            if (isValid) {
                isValid = value.split('@')[1].split('.').length > 1
                if (isValid) {
                    for (let k in value.split('@')[1].split('.')) {
                        isValid = (value.split('@')[1].split('.')[k] !== '') && isValid;
                    }
                }
            }
        }

        if (rules.isNumber) {
            const dummy = parseInt(value, 10);
            isValid = !isNaN(dummy) && isValid;
        }
    }

    return isValid;
}