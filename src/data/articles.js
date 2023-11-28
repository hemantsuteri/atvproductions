import React from "react";

function article_1() {
	return {
		img: "https://res.cloudinary.com/duivrjbfz/image/upload/v1701195236/myimages/course1_mkjkvt.png",
		title: "BASIC COURSE",
		description:
			"This is a basic course of video editing, generally preferred for beginners in the field of video editing.",
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
		img: "https://res.cloudinary.com/duivrjbfz/image/upload/v1701195236/myimages/course2_s8obto.png",
		title: "ADVANCED COURSE",
		description:
			"This is advance course on Video editing, prefferd for those who knows basics of editing already.",
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
