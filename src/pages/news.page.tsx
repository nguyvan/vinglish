import { Layout } from "../components/layout/layout.component";

export const News = () => {
	return (
		<Layout>
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
				}}
			/>
		</Layout>
	);
};

// style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
