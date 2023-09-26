import { getAxiosData } from "services/analytics/postViews";
import { apolloClient } from "services/apolo/client";
import { WP_HOME_PAGE } from "services/apolo/queries/queries";



export const homeStaticProps = async (allLangData = false) => {

	let dataFromAxios: any = null;
	let dataFromGraph: any = null;

	try {
		dataFromAxios = await getAxiosData();
		console.log("getAxiosData", dataFromAxios);

		//WP AXIOS Vercel  
		dataFromGraph = await apolloClient.query({
			query: WP_HOME_PAGE,
		});
		console.log("dataFromGraph", dataFromGraph.data.pages.nodes);		

	} catch (e) {
		console.log(e);
	}
	return {
		props: {
			dataFromGraph: dataFromGraph.data.pages.nodes,
		},
	};
};
