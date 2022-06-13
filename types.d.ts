interface IData {
   main: {
      header: {
         title: string
         description: string
      }
      features: {
         title: string
         description: string
         strategies: IStrategies[]
      }
      articles: {
         title: string
         posts: IPosts[]
      }
   }
}

interface IStrategies {
   title: string
   description: string
   image: string
}
interface IPosts {
   createdBy: string
   title: string
   description: string
   image: string
}
