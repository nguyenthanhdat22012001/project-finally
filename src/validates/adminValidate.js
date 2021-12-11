import * as yup from "yup";

export const categorySchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    slug: yup
        .string()
        .trim(),
    description: yup
        .string()
        .trim(),
    hide: yup
        .string()
});

export const brandSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    description: yup
        .string()
        .trim(),
    hide: yup
        .string()
});

export const productSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Không được để trống"),
    price: yup
        .number()
        .typeError('Phải là số')
        .min(1, 'phải lớn hơn 0')
        .required("Không được để trống"),
    discount: yup
        .number()
        .typeError('Phải là số')
        .min(0, 'không được nhỏ hơn 0'),
    cate_id: yup
        .number()
        .min(1, "Bạn chưa chọn")
        .required("Không được để trống"),
    brand_id: yup
        .number()
        .min(1, "Bạn chưa chọn")
        .required("Không được để trống"),
    shortdescription: yup
        .string()
        .trim(),
    hide: yup
        .string(),
    attributes: yup.array().of(
        yup.object().shape({
            id: yup
                .number(),
            name: yup
                .string()
                .trim()
                .required('Không được để trống'),
            quantity: yup.number()
                .typeError('Phải là số')
                .min(1, 'phải lớn hơn 0')
                .required('Không được để trống'),
        })
            .required('Không được để trống'),
    )
});


// const defaultValue = {
//     name: "",
//     age: ""
//   };

//   function App() {
//     const [friends, setFriends] = useState([]);
//     const {
//       register,
//       errors,
//       handleSubmit,
//       setValue,
//       getValues,
//       clearError
//     } = useForm({
//       mode: "onChange",
//       reValidateMode: "onChange",
//       validationSchema: friendsSchema
//     });

//     const onSubmit = data => {
//       console.log("submit", data);
//     };

//     const addFriend = async () => {
//       setFriends([...friends, defaultValue]);
//     };

//     const removeFriend = index => () => {
//       // get values
//       const { friends } = getValues({ nest: true });

//       // create a copy
//       const newFriends = [...friends];

//       // remove by index
//       newFriends.splice(index, 1);

//       // update values
//       setFriends(newFriends);

//       for (let i = 0; i < newFriends.length; i++) {
//         setValue(`friends[${i}].name`, newFriends[i].name);
//         setValue(`friends[${i}].age`, newFriends[i].age);
//       }
//     };

//     const clearFriends = () => {
//       setFriends([]);
//       clearError();
//     };

//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {friends.map((_, index) => {
//           const fieldName = `friends[${index}]`;

//           return (
//             <fieldset name={fieldName} key={fieldName}>
//               <label>
//                 Name {index}:
//                 <input type="text" name={`${fieldName}.name`} ref={register} />
//               </label>
//               <ErrorMessage
//                 errors={errors}
//                 type="required"
//                 name={`${fieldName}.name`}
//               />

//               <label>
//                 Age {index}:
//                 <input type="number" name={`${fieldName}.age`} ref={register} />
//               </label>
//               <ErrorMessage
//                 errors={errors}
//                 type="required"
//                 name={`${fieldName}.age`}
//               />

//               <button type="button" onClick={removeFriend(index)}>
//                 Remove Friend
//               </button>
//             </fieldset>
//           );
//         })}

//         <ErrorMessage errors={errors} type="min" name="friends" />
//         <ErrorMessage errors={errors} type="required" name="friends" />
//         <div className="action">
//           <button type="button" onClick={addFriend}>
//             Add Friend
//           </button>
//           <button type="button" onClick={clearFriends}>
//             Clear Friends
//           </button>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }