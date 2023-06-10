import { CheckOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom";

const Payment = () =>{
    const navigate = useNavigate();
    return(
        
        <div className="flex flex-row">
            <div className="w-[60%] bg-white flex justify-center align-middle flex-col">
                <h1 className=" text-center font-semibold text-[35px] mb-5">Premium Subscription</h1>
                <div className="flex flex-row align-middle justify-center"> <CheckOutlined className=" text-[#04e400] mr-3" /><p>Unlock all topic</p></div>
                <div className="flex flex-row align-middle justify-center "> <CheckOutlined className=" text-[#04e400] mr-3" /><p>Connect with tuitor</p></div>
                <div className="flex flex-row align-middle justify-center mb-5"> <CheckOutlined className=" text-[#7e7e7e] mr-3" /><p className=" text-[#7e7e7e]">Chat & friend list (comming soon)</p></div>
                <p className="font-semibold" >Please scan the QR code and make the payment.</p>
                <p className="flex flex-row justify-center underline"><p className=" text-[#da3535]">*</p>Input your email on message of the payment.</p>
                <Button onClick={()=>navigate(`/`)} className=" w-[100px] mx-auto mt-10" type="primary">Back</Button>
            </div>
            <img className="w-[40%]" src="/img/momoQR.png" />
        </div>
    )
}
export default Payment