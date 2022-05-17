import Posts from '../components/Posts';
import styles from '../styles/Home.module.css';

function ApiCaching({ data }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Blog Page</h1>
				<Posts posts={data} />
			</main>
		</div>
	);
}

export default ApiCaching;

export const getStaticProps = async () => {
	const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
		(r) => r.json()
	);

	return {
		props: { data: posts.slice(0, 10) },
		revalidate: 10
	};
};
