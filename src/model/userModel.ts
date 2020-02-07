import mongoose, { Schema, Model } from 'mongoose';

// import Typescript interfaces
import { IUserDocument } from '../interfaces';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
    default:
      'https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'

  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'event',
  }]
})

const User: Model<IUserDocument> = mongoose.model('user', userSchema);

export default User;