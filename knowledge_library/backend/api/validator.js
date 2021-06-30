module.exports = app => {

    function existsOrError(value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === "string" && !value.trim()) throw msg
    }
    
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    function mailValidator(value) {
        if(value.indexOf("@") === -1) throw "E-mail inválido"
    }

    function passwordValidator(value) {
        if(value.length < 4) throw "Senha inválida"
    }

    function isIntegerGreaterThanZero(value, msg) {
        if(isNaN(value)) throw msg
        if(value <= 0) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError, mailValidator, passwordValidator,
                isIntegerGreaterThanZero }
}