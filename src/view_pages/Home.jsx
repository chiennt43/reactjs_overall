
import { useEffect } from "react";

const Home = (props) => {
    useEffect(()=>{
        let anh = 243432;
        console.log("okok")
    })

    const test2 = "this is test 2"
    return (
            <button onClick={()=> props.history.push('/about')}>Nav to Cá nhân</button>
    )
    
}

export default Home