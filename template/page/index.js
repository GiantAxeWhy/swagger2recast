/**
 * 当前只针对vite方式，webpack则需要require.context
 */
const modulesFiles = import.meta.globEager('./modules/*.js')
const services = Object.keys(modulesFiles).reduce((obj, key) => {
    const moduleArr = key.split('/')
    const newKey = moduleArr[moduleArr.length - 1].replace('.js', '')
    obj = {
        ...obj,
        [newKey]: modulesFiles[key]
    }
    return obj
}, {})

export default {
    ...services
}
