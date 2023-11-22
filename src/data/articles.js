import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The importance of Video Editing",
		description:
			"Video content's ubiquity on platforms like Facebook and Instagram emphasizes the need for polished edits. Almost 85% of consumers credit a brand's video for influencing their purchase decisions..",
		keywords: [
			"Video Editing", "Post-production", "Content Creation", "Video Marketing"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Video production",
		description:
			"Video production encompasses three crucial stages: Pre-production, Production, and Post-production, with the latter being the editing phase. Video editing is not just important; it's indispensable.",
		style: ``,
		keywords: [
			"Film Production",
			"Video Creation", 
			"Cinematography", 
			"Editing Process",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
