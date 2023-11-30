import React from "react";

export const News = () => {
	React.useEffect(() => {
		let newsFrame = document.querySelector("iframe");
		let newsFrameContent = newsFrame?.contentWindow?.document;
		let header = newsFrameContent?.getElementById("header");
		if (header !== undefined && header !== null) {
			header.style.display = "none";
		}
	}, []);

	return (
		<iframe
			id="news"
			title="News"
			src="https://backup.vinglishcoffee.com/tin-tuc/"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				width: "100%",
				height: "100%",
				border: "none",
				margin: 0,
				padding: 0,
				overflow: "hidden",
				zIndex: 999999,
			}}
		/>
	);
};

// style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
