import React from "react";
import { Navbar } from "../navbar/navbar.component";
import "./layout.component.scss";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="layout-container">
			<Navbar />
			{children}
		</div>
	);
};
