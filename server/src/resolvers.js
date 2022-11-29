const resolvers = {
  Query: {
    tracksForHome: (_, _, context) => {
      const { dataSources } = context;
      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
