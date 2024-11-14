// import { Schema, models, model } from "mongoose";

// const UserSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required."],
//     },
//     mobile: {
//       type: String,
//       required: [true, "Mobile Number is required."],
//       match: [/^\d{10}$/, "Please provide a valid 10-digit mobile number."],
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required."],
//       match: [
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         "Please provide a valid email address.",
//       ],
//       lowercase: true,
//       trim: true,
//       unique: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// UserSchema.index({ mobile: 1 }, { unique: true });
// UserSchema.index({ email: 1 }, { unique: true });

// const User = models.User || model("User", UserSchema);
// export default User;

import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    mobile: {
      type: String,
      required: [true, "Mobile Number is required."],
      match: [/^\d{10}$/, "Please provide a valid 10-digit mobile number."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address.",
      ],
      lowercase: true,
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    city: {
      type: String,
      required: [true, "City is required."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
    },
    pinCode: {
      type: String,
      required: [true, "Pin Code is required."],
      match: [
        /^[1-9][0-9]{5}$/,
        "Please provide a valid 6-digit Indian pin code.",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Ensuring unique indexes for mobile and email
UserSchema.index({ mobile: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });

const User = models.User || model("User", UserSchema);
export default User;
