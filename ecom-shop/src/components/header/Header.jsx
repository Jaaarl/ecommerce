export default
    function Header() {
    return (
        <>
            <div className="">
                <div className="bg-black text-white flex justify-center items-center text-[14px] gap-3">
                    Summer sale for All Swim Suits and Free Express Delivery - OFF 50%! <span className="font-semibold  underline cursor-pointer">ShopNow</span>
                </div>
                <div className="flex items-center justify-between px-[98px] border border-gray-100 bg-slate-50">
                    <span className="text-[24px] font-bold">Exclusive</span>
                    <span>
                        <ul className="flex justify-center items-center gap-3 text-[16px] font-normal ">
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Sign Up</li>
                        </ul>
                    </span>
                    <div>
                        <input placeholder="What are you looking for?" className="text=3xl pl-2 pr-10"></input>

                    </div>
                </div>
            </div>
        </>
    )
}