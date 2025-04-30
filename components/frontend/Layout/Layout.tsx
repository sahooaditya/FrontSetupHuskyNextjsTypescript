import React, { FC, ReactNode } from "react";
import Spacer from "@/components/ui/Spacer";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

interface Props {
    children?: ReactNode;
    activeMenu?: string;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Spacer defaultSpace="1rem" />
            <Footer />
        </div>
    );
};

export default Layout;
