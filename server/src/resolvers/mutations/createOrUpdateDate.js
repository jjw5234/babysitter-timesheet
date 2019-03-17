module.exports = {
  createOrUpdateDate: async (
    _,
    {
      dateId,
      dateObjectId,
      childId,
      month,
      day,
      year,
      hours,
      dayOfWeek,
      notes,
      paid,
      isFixedRate
    },
    context
  ) => {
    try {
      return await context.prisma.upsertDate({
        where: {
          id: dateId
        },
        create: {
          dateObjectId,
          owner: { connect: { id: childId } },
          month,
          day,
          year,
          hours,
          dayOfWeek,
          notes,
          paid,
          isFixedRate
        },
        update: {
          dateObjectId,
          owner: { connect: { id: childId } },
          month,
          day,
          year,
          hours,
          dayOfWeek,
          notes,
          paid,
          isFixedRate
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  createDate: async (_, args, context) => {
    // const {
    //   data: { dateObjectId, owner, month, day, year, hours, dayOfWeek }
    // } = args;
    // const {
    //   connect: { id }
    // } = owner;
    try {
      return await context.prisma.createDate({
        dateObjectId: "2234",
        owner: {
          connect: {
            id: "cjsq881oy00600933qrtmbdyg"
          }
        },
        month: 1,
        day: 1,
        year: 2011,
        hours: 22
      });
    } catch (err) {
      throw new Error("err", err.message);
    }
  }
};

// input DateCreateInput {
//     dateObjectId: String!
//     owner: SitteCreateOneWithoutDatesInput!
//     month: Float!
//     day: Float!
//     year: Float!
//     hours: Float!
//   }
