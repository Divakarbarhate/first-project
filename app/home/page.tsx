import { Metadata } from "next";

export const metaData:Metadata = {
    title: "Home Page",
    description: "This is the home page of the website",
}

const home = () => {
    return (
        <>
        <h1>Home Page</h1>
        </>
    )
}
export default home;