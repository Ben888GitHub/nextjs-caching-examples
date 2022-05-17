function Posts({ posts }) {
	// console.log(posts);
	return (
		<div className="posts">
			{posts?.map((post, idx) => (
				<div key={idx} className="post">
					<h2>
						{post.id}. {post.title}
					</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

export default Posts;
