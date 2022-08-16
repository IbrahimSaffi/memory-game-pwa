import Icon from "../Icon"
function Box(props) {
    function boxExist() {
        let flag = false
        props.scoreArr.forEach(ele => {
            let [row, col] = ele
            if (props.index[0] === row && props.index[1] === col) {
                flag = true
            }
        })
        return flag
    }
    return (
        <div
            onClick={() => {
                if (!boxExist()&&props.clickable) {
                    props.visibile(props.index)
                }
            }}
            className="box">
            <div
              className= {
                boxExist()?"icon visibile":"icon"
             } 
            >
                <Icon svgNo={props.svgNo} />
            </div>
        </div>
    )
}
export default Box