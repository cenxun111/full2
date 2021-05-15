const Card = require('./models/Postm')
const resolvers = {
    Query:{
        hello:() => {
            return 'Hello World';
        },
        getAllCard:async() => {
            return await Card.find()
        },
        getCard:async(parent,{id})=> {
            return await Card.findById(id)
        }
    },
    Mutation:{
        // createCard:async(parent,args,context, info) =>{
        //     const {name,genre,year} = args.card;
        //     const card = new Card({name,genre,year});
        //     await card.save();
        //     return card;
        // }
        createCard:(parent,args) =>{
            const card = new Card({
                name:args.name,
                genre:args.genre,
                year:args.year
            });
            card.save()
            return card;
        },
        deleteCard:(parent,args) =>{
            const { id } = args
            Card.findByIdAndDelete(id)
            return"post deleted"
        }
        }
    } ;

module.exports = resolvers;