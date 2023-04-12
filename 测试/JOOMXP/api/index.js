const home=require('./modules/home')
const login=require('./modules/login')
const my=require('./modules/my')
const classify=require('./modules/classify')
// const song=require('./modules/song')
// const rankList=require('./modules/rankList')
// const singer=require('./modules/singer')

export default{
	...home,
	...login,
	...my,
	...classify
}