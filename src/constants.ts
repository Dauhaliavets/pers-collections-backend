export const reshapingOptions = {
  virtuals: true,
  transform: function (_doc: any, ret: { password: any; _id: any }) {
    delete ret.password;
    delete ret._id;
    return ret;
  },
};
