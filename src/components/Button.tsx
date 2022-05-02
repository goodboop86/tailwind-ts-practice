/* This example requires Tailwind CSS v2.0+ */

export const Button = (props: any,) => {
    const { setIsOpenSideBar, children } = props;

    console.log(props);
    console.log(setIsOpenSideBar);
    console.log(children);
    //const [open, setOpen] = useState(true)

    return (
        <div className="absolute bottom-0 right-0 md:h-40 md:w-40 w-24 h-24">
            <div className="absolute top-0 left-0 md:h-24 md:w-24 w-16 h-16">
                <button onClick={() => setIsOpenSideBar((flag: boolean) => !flag)} type="button" className="md:w-24 md:h-24 w-16 h-16 backdrop-blur-sm bg-black/30 hover:bg-black-700 focus:ring-black-500 focus:ring-offset-black-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                    {children}
                </button></div>
        </div>

    )
}
