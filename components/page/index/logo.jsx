import React from "react";
import Image from "next/image";
import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <a>
                <Image src={"/images/logo.png"}  layout={"fill"}/>
            </a>
        </Link>
    )
}

export default Logo