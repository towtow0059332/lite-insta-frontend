import React, {useEffect, useState} from 'react';
import "./StatusBar.css";
import AvatarStatus from "./AvatarStatus/AvatarStatus";
import uploadImg from "../../../../images/statusadd.png";

function StatusBar(props) {
    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        let data = [{
            username: "1", src: "../../../../../images/pp3.jpeg",
        }, {
            username: "2", src: "../../../../images/pp2.png",
        }, {
            username: "3", src: "../../../images/pp3.jpeg",
        }, {
            username: "4", src: "../../images/pp3.jpeg",
        }, {
            username: "sai5", src: "../images/pp3.jpeg",
        }, {
            username: "sw6", src: "images/pp3.jpeg",
        }, {
            username: "sow7", src: "images/pp3.jpeg",
        }, {
            username: "saint_rowgow8", src: "../../../../../images/pp3.jpeg",
        }, {
            username: "saint_rowgow9", src: "../../../../../images/pp3.jpeg",
        }, {
            username: "saint_rowgow10", src: "../../../../../images/pp3.jpeg",
        },]
        setStatusList(data);
    }, [])

    // const temp = "../../../../../images/pp3.jpeg";

    return (
        <div className="statusBar_container">
            {/*<AvatarStatus info={temp}/>*/}
            {/*<AvatarStatus info={temp}/>*/}
            {/*<AvatarStatus info={temp} imagess={imageSS}/>*/}
            <img src={uploadImg} alt="" className="statusBar_uploadImg"/>
            {
                statusList.map((item, index) => {
                    return <AvatarStatus key={index} info={item}/>
                    // return <AvatarStatus key={index} src={item.src}/>
                })
            }
        </div>
    );
}

export default StatusBar;