const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Alif's Photography`
    }, [title])
}
export default useTitle