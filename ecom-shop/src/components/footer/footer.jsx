export default
    function Footer() {
    return (
        <>
            <div className=" bg-black text-white">
                <div className="flex justify-evenly  text-[16px] pb-5">
                    <ul>
                        <li className="text-[24px] pb-2 font-bo">Exclusive</li>
                        <li className="text-[16px]">Subscribe</li>
                        <li className="text-[16px]" >Get a 10% off coupon</li>
                        <li className="text-[16px]" ><input placeholder="Enter your email" className="bg-black border border-white" type="email" name="" id="" /></li>
                    </ul>
                    <ul>
                        <li className="text-[24px] pb-2 font-bo">Support</li>
                        <li className="text-[16px]" >Albay, Philippines</li>
                        <li className="text-[16px]" >techsupportAlbay@gmail.com</li>
                        <li className="text-[16px]" >+63812039321</li>
                    </ul>
                    <ul>
                        <li className="text-[24px] pb-2 font-bo">Account</li>
                        <li className="text-[16px]" >My Account</li>
                        <li className="text-[16px]" >Login / Register</li>
                        <li className="text-[16px]" >Cart</li>
                        <li className="text-[16px]" >Wishlist</li>
                        <li className="text-[16px]" >Shop</li>
                    </ul>
                    <ul>
                        <li className="text-[24px] pb-2 font-bo">Quick Link</li>
                        <li className="text-[16px]" >Privacy Policy</li>
                        <li className="text-[16px]" >Terms of Use</li>
                        <li className="text-[16px]" >FAQ</li>
                        <li className="text-[16px]" >Contact</li>
                    </ul>
                </div >
                <div className="flex items-center justify-center text-">
                    Copyright Jarl 2024. All right Reserved
                </div>
            </div>

        </>
    )
}