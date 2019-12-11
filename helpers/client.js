import  PrismicLib  from  'prismic-javascript'

let  frontClient
export  const  Client  = (req  =  null) => {
	if(!req  &&  frontClient) return  frontClient  //prevent generate new instance for client side since we don't need the refreshed request object.
	else {
		const  options  =  Object.assign({}, req  ? {req} : {}, PrismicConfig.accessToken  ? {accessToken:  PrismicConfig.accessToken} : {})
	return  Prismic.client(process.env.PRISMIC, options)
	}
}
